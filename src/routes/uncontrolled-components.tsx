import { FormEvent, useRef, useState } from "react";
import formFields from "../configs/form-fields";
import * as yup from "yup";
import getFormErrors, { TFormErrorsState } from "../utils/get-form-errors";
import ValidationErrors from "../views/validation-errors/validation-errors";

const schema = yup
  .object()
  .shape({
    userName: yup
      .string()
      .matches(/^[A-Z].*/, "Name shoul have first uppercased letter")
      .required(),
    userAge: yup.number().moreThan(-1, "Age shoul be non negative").required(),
    userEmail: yup.string().email().required(),
    userPassword: yup
      .string()
      .matches(/.*\d+.*/, "Should contain number")
      .matches(/.*[A-Z]+.*/, "Should contain uppercased letter")
      .matches(/.*[a-z]+.*/, "Should contain lowercased letter")
      .matches(/.*\W+.*/, "Should contain special charater")
      .required(),
    userPasswordConfirm: yup
      .string()
      .oneOf([yup.ref("userPassword")], "<Passwords must match")
      .required(),
  })
  .required();

interface IReactHookForm {
  userName: string;
  userAge: number;
  userEmail: string;
  userPassword: string;
  userPasswordConfirm: string;
}

function UncontrolledComponentsForm() {
  const userNameRef = useRef<HTMLInputElement>(null);
  const userAgeRef = useRef<HTMLInputElement>(null);
  const userEmailRef = useRef<HTMLInputElement>(null);
  const userPasswordRef = useRef<HTMLInputElement>(null);
  const userPasswordConfirmRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<TFormErrorsState>({});

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const value = schema.cast({
      userName: userNameRef.current?.value,
      userAge: Number(userAgeRef.current?.value),
      userEmail: userEmailRef.current?.value,
      userPassword: userPasswordRef.current?.value,
      userPasswordConfirm: userPasswordConfirmRef.current?.value,
    });
    try {
      await schema.validate(value, { abortEarly: false });
      setErrors({});
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setErrors(getFormErrors(err));
      }
    }
  };

  const { userName, userAge, userEmail, userPassword, userPasswordConfirm } =
    formFields;

  return (
    <>
      <h2> Uncontrolled components form </h2>
      <form onSubmit={onSubmit} action="">
        <label htmlFor={userName.id}>{userName.label}</label>
        <input type={userName.type} id={userName.id} ref={userNameRef} />
        <ValidationErrors errors={errors} fieldKey="userName" />

        <label htmlFor={userAge.id}>{userAge.label}</label>
        <input type={userAge.type} id={userAge.id} ref={userAgeRef} />
        <ValidationErrors errors={errors} fieldKey="userAge" />

        <label htmlFor={userEmail.id}>{userEmail.label}</label>
        <input type={userEmail.type} id={userEmail.id} ref={userEmailRef} />
        <ValidationErrors errors={errors} fieldKey="userEmail" />

        <label htmlFor={userPassword.id}>{userPassword.label}</label>
        <input
          type={userPassword.type}
          id={userPassword.id}
          ref={userPasswordRef}
        />
        <ValidationErrors errors={errors} fieldKey="userPassword" />

        <label htmlFor={userPasswordConfirm.id}>
          {userPasswordConfirm.label}
        </label>
        <input
          type={userPasswordConfirm.type}
          id={userPasswordConfirm.id}
          ref={userPasswordConfirmRef}
        />
        <ValidationErrors errors={errors} fieldKey="userPasswordConfirm" />

        <input type="submit" value={"Submit"} />
      </form>
    </>
  );
}

export default UncontrolledComponentsForm;
