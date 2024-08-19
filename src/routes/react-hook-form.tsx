import { SubmitHandler, useForm } from "react-hook-form";
import formFields from "../configs/form-fields";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../configs/yup-validation-schema";
import { useNavigate } from "react-router-dom";
import IRegistrationForm from "@configs/registration-form-types";
import { useDispatch } from "react-redux";
import { addUser } from "@configs/users-slice";
import createUserFromRegistration from "@utils/create-user-from-registration";
import Autocomplete from "@components/autocomplete/autocomplete";
import { useAppSelector } from "@configs/redux-hooks";
import { countriesSelector } from "@configs/store";
import ValidationErrors from "@views/validation-errors/validation-errors";

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
  const countries = useAppSelector(countriesSelector);

  const onSubmit: SubmitHandler<IRegistrationForm> = async (data) => {
    const user = await createUserFromRegistration(data);
    dispatch(addUser(user));
    navigate("/");
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
    userCountrie,
  } = formFields;

  return (
    <>
      <h2> React hook form </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor={userName.id}>{userName.label}</label>
        <input type="text" autoComplete="off" {...register("userName")} />
        <ValidationErrors errors={[errors.userName?.message]} />

        <label htmlFor={userAge.id}>{userAge.label}</label>
        <input
          type={userAge.type}
          id={userAge.id}
          autoComplete="off"
          {...register("userAge")}
        />
        <ValidationErrors errors={[errors.userAge?.message]} />

        <label htmlFor={userEmail.id}>{userEmail.label}</label>
        <input
          type={userEmail.type}
          formNoValidate
          placeholder={userEmail.placeholder}
          autoComplete="off"
          id={userEmail.id}
          {...register("userEmail")}
        />
        <ValidationErrors errors={[errors.userEmail?.message]} />

        <label htmlFor={userPassword.id}>{userPassword.label}</label>
        <input
          type={userPassword.type}
          id={userPassword.id}
          autoComplete="off"
          {...register("userPassword")}
        />
        <ValidationErrors errors={[errors.userPassword?.message]} />

        <label htmlFor={userPasswordConfirm.id}>
          {userPasswordConfirm.label}
        </label>
        <input
          type={userPasswordConfirm.type}
          id={userPasswordConfirm.id}
          autoComplete="off"
          {...register("userPasswordConfirm")}
        />
        <ValidationErrors errors={[errors.userPasswordConfirm?.message]} />

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
        <ValidationErrors errors={[errors.userGender?.message]} />

        <label htmlFor={acceptTAC.id}>{acceptTAC.label}</label>
        <input
          type={acceptTAC.type}
          id={acceptTAC.id}
          autoComplete="off"
          {...register("acceptTAC")}
        />
        <ValidationErrors errors={[errors.acceptTAC?.message]} />

        <label htmlFor={userImage.id}>{userImage.label}</label>
        <input
          type={userImage.type}
          id={userImage.id}
          autoComplete="off"
          {...register("userImage")}
        />
        <ValidationErrors errors={[errors.userImage?.message]} />

        <label htmlFor={userCountrie.id}>{userCountrie.label}</label>
        <Autocomplete
          options={countries.value}
          id={userCountrie.id}
          autoComplete="off"
          {...register("userCountrie")}
        />
        <ValidationErrors errors={[errors.userCountrie?.message]} />

        <input type="submit" value={"Submit"} />
      </form>
    </>
  );
}

export default ReactHookForm;
