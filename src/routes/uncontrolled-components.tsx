import { FormEvent, useRef, useState } from "react";
import formFields from "../configs/form-fields";
import * as yup from "yup";
import getFormErrors, { TFormErrorsState } from "../utils/get-form-errors";
import ValidationErrors from "../views/validation-errors/validation-errors";
import { useNavigate } from "react-router-dom";
import schema from "@configs/yup-validation-schema";
import { addUser } from "@configs/users-slice";
import { useDispatch } from "react-redux";
import createUserFromRegistration from "@utils/create-user-from-registration";

function UncontrolledComponentsForm() {
  const userNameRef = useRef<HTMLInputElement>(null);
  const userAgeRef = useRef<HTMLInputElement>(null);
  const userEmailRef = useRef<HTMLInputElement>(null);
  const userPasswordRef = useRef<HTMLInputElement>(null);
  const userPasswordConfirmRef = useRef<HTMLInputElement>(null);
  const userGenderRef = useRef<HTMLSelectElement>(null);
  const userImageRef = useRef<HTMLInputElement>(null);
  const acceptTACRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<TFormErrorsState>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const value = schema.cast({
      userName: userNameRef.current?.value,
      userAge: Number(userAgeRef.current?.value),
      userEmail: userEmailRef.current?.value,
      userPassword: userPasswordRef.current?.value,
      userPasswordConfirm: userPasswordConfirmRef.current?.value,
      userGender: userGenderRef.current?.value,
      acceptTAC: acceptTACRef.current?.checked,
      userImage: userImageRef.current?.files,
    });
    try {
      await schema.validate(value, { abortEarly: false });
      setErrors({});
      const user = await createUserFromRegistration(value);
      dispatch(addUser(user));
      navigate("/");
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setErrors(getFormErrors(err));
      }
    }
  };

  const {
    userName,
    userAge,
    userEmail,
    userPassword,
    userPasswordConfirm,
    userGender,
    acceptTAC,
    userImage,
  } = formFields;

  return (
    <>
      <h2> Uncontrolled components form </h2>
      <form onSubmit={onSubmit} noValidate={true}>
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

        <select
          id={userGender.id}
          ref={userGenderRef}
          defaultValue={userGender.placeholder}
        >
          <option disabled value={userGender.placeholder}>
            {userGender.placeholder}
          </option>
          {userGender.predefinedValues.map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
        </select>
        <ValidationErrors errors={errors} fieldKey="userGender" />

        <label htmlFor={acceptTAC.id}>{acceptTAC.label}</label>
        <input type={acceptTAC.type} id={acceptTAC.id} ref={acceptTACRef} />
        <ValidationErrors errors={errors} fieldKey="acceptTAC" />

        <label htmlFor={userImage.id}>{userImage.label}</label>
        <input type={userImage.type} id={userImage.id} ref={userImageRef} />
        <ValidationErrors errors={errors} fieldKey="userImage" />

        <input type="submit" value={"Submit"} />
      </form>
    </>
  );
}

export default UncontrolledComponentsForm;
