import { SubmitHandler, useForm } from "react-hook-form";
import formFields from "../configs/form-fields";

interface IReactHookForm {
  userName: string;
  userAge: number;
  userEmail: string;
  userPassword: string;
  userPasswordConfirm: string;
}

function ReactHookForm() {
  const { register, handleSubmit } = useForm<IReactHookForm>();
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
        <input type="text" id={userName.id} {...register("userName")} />

        <label htmlFor={userAge.id}>{userAge.label}</label>
        <input type={userAge.type} id={userAge.id} {...register("userAge")} />

        <label htmlFor={userEmail.id}>{userEmail.label}</label>
        <input
          type={userEmail.type}
          id={userEmail.id}
          {...register("userEmail")}
        />

        <label htmlFor={userPassword.id}>{userPassword.label}</label>
        <input
          type={userPassword.type}
          id={userPassword.id}
          {...register("userPassword")}
        />

        <label htmlFor={userPasswordConfirm.id}>
          {userPasswordConfirm.label}
        </label>
        <input
          type={userPasswordConfirm.type}
          id={userPasswordConfirm.id}
          {...register("userPasswordConfirm")}
        />

        <input type="submit" value={"Submit"} />
      </form>
    </>
  );
}

export default ReactHookForm;
