import { HTMLInputTypeAttribute } from "react";

interface IInput {
  label: string;
  id: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
}

interface ITextInput extends IInput {
  type: "text";
}

interface INumberInput extends IInput {
  type: "number";
}

interface IEmailInput extends IInput {
  type: "text";
}

interface IPasswordInput extends IInput {
  type: "password";
}

interface IFormFields {
  userName: ITextInput;
  userAge: INumberInput;
  userEmail: IEmailInput;
  userPassword: IPasswordInput;
  userPasswordConfirm: IPasswordInput;
}

const formFields: IFormFields = {
  userName: {
    label: "Name",
    placeholder: "enter your name",
    id: "userName",
    type: "text",
  },
  userAge: {
    label: "Age",
    placeholder: "18",
    id: "userAge",
    type: "number",
  },
  userEmail: {
    label: "E-mail",
    placeholder: "hehehe@hoho.kek",
    id: "email",
    type: "email",
  },
  userPassword: {
    label: "Password",
    placeholder: "",
    id: "password",
    type: "password",
  },
  userPasswordConfirm: {
    label: "Confirm password",
    placeholder: "",
    id: "passwordConfirm",
    type: "password",
  },
};

export default formFields;
