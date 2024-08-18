import { SubmitHandler, useForm } from "react-hook-form";
import formFields from "../configs/form-fields";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../configs/yup-validation-schema";
import { useNavigate } from "react-router-dom";
import IRegistrationForm from "@configs/registration-form-types";
import { useDispatch } from "react-redux";
import { addUser } from "@configs/users-slice";

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    console.log(data);
    dispatch(addUser(data));
    navigate("/");
  };

  const {
    userName,
    userAge,
    userEmail,
    userPassword,
    userPasswordConfirm,
    userGender,
  } = formFields;

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

        <label htmlFor={userGender.id}>{userGender.label}</label>

        <select
          id={userGender.id}
          defaultValue={userGender.placeholder}
          {...register("userGender")}
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
        <p>{errors.userGender?.message}</p>

        <input type="submit" value={"Submit"} />
      </form>
    </>
  );
}

export default ReactHookForm;
