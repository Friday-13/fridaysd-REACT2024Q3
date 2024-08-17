import { SubmitHandler, useForm } from "react-hook-form";
import formFields from "../configs/form-fields";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IReactHookForm {
  userName: string;
  userAge: number;
  userEmail: string;
  userPassword: string;
  userPasswordConfirm: string;
}

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

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReactHookForm>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit: SubmitHandler<IReactHookForm> = (data) => {
    console.log(data);
  };

  const { userName, userAge, userEmail, userPassword, userPasswordConfirm } =
    formFields;

  return (
    <>
      <h2> React hook form </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor={userName.id}>{userName.label}</label>
        <input type="text" {...register("userName")} />
        <p>{errors.userName?.message}</p>

        <label htmlFor={userAge.id}>{userAge.label}</label>
        <input type={userAge.type} id={userAge.id} {...register("userAge")} />
        <p>{errors.userAge?.message}</p>

        <label htmlFor={userEmail.id}>{userEmail.label}</label>
        <input
          type={userEmail.type}
          formNoValidate
          placeholder={userEmail.placeholder}
          id={userEmail.id}
          {...register("userEmail")}
        />
        <p>{errors.userEmail?.message}</p>

        <label htmlFor={userPassword.id}>{userPassword.label}</label>
        <input
          type={userPassword.type}
          id={userPassword.id}
          {...register("userPassword")}
        />
        <p>{errors.userPassword?.message}</p>

        <label htmlFor={userPasswordConfirm.id}>
          {userPasswordConfirm.label}
        </label>
        <input
          type={userPasswordConfirm.type}
          id={userPasswordConfirm.id}
          {...register("userPasswordConfirm")}
        />
        <p>{errors.userPasswordConfirm?.message}</p>

        <input type="submit" value={"Submit"} />
      </form>
    </>
  );
}

export default ReactHookForm;
