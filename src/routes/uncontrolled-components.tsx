import { FormEvent, useRef } from "react";
import formFields from "../configs/form-fields";

function UncontrolledComponentsForm() {
  const userNameRef = useRef<HTMLInputElement>(null);
  const userAgeRef = useRef<HTMLInputElement>(null);
  const userEmailRef = useRef<HTMLInputElement>(null);
  const userPasswordRef = useRef<HTMLInputElement>(null);
  const userPasswordConfirmRef = useRef<HTMLInputElement>(null);

  const onSubmit = () => {
    console.log(userNameRef.current?.value);
    console.log(userAgeRef.current?.value);
  };

  const { userName, userAge, userEmail, userPassword, userPasswordConfirm } =
    formFields;

  return (
    <>
      <h2> Uncontrolled components form </h2>
      <form onSubmit={onSubmit} action="">
        <label htmlFor={userName.id}>{userName.label}</label>
        <input type={userName.type} id={userName.id} ref={userNameRef} />

        <label htmlFor={userAge.id}>{userAge.label}</label>
        <input type={userAge.type} id={userAge.id} ref={userAgeRef} />

        <label htmlFor={userEmail.id}>{userEmail.label}</label>
        <input type={userEmail.type} id={userEmail.id} ref={userEmailRef} />

        <label htmlFor={userPassword.id}>{userPassword.label}</label>
        <input
          type={userPassword.type}
          id={userPassword.id}
          ref={userPasswordRef}
        />

        <label htmlFor={userPasswordConfirm.id}>
          {userPasswordConfirm.label}
        </label>
        <input
          type={userPasswordConfirm.type}
          id={userPasswordConfirm.id}
          ref={userPasswordConfirmRef}
        />

        <input type="submit" value={"Submit"} />
      </form>
    </>
  );
}

export default UncontrolledComponentsForm;
