import { HTMLInputTypeAttribute } from "react";

interface IInput {
  label: string;
  id: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
}

interface ISelect {
  label: string;
  id: string;
  placeholder: string;
}

interface ITextInput extends IInput {
  type: "text";
}

interface INumberInput extends IInput {
  type: "number";
}

interface IEmailInput extends IInput {
  type: "email";
}

interface IPasswordInput extends IInput {
  type: "password";
}

interface ICheckboxInput extends IInput {
  type: "checkbox";
}

interface IFileInput extends IInput {
  type: "file";
}

interface IGenderSelect extends ISelect {
  predefinedValues: Array<string>;
}

interface IFormFields {
  userName: ITextInput;
  userAge: INumberInput;
  userEmail: IEmailInput;
  userPassword: IPasswordInput;
  userPasswordConfirm: IPasswordInput;
  userGender: IGenderSelect;
  acceptTAC: ICheckboxInput;
  userImage: IFileInput;
  userCountrie: ITextInput;
}

const formFields: IFormFields = {
  userName: {
    label: "Name",
    placeholder: "Enter your name",
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
    id: "userPassword",
    type: "password",
  },
  userPasswordConfirm: {
    label: "Confirm password",
    placeholder: "",
    id: "userPasswordConfirm",
    type: "password",
  },
  userGender: {
    label: "Gender",
    id: "userGender",
    placeholder: "select gender",
    predefinedValues: ["male", "female"],
  },
  acceptTAC: {
    label: "I agree to the Terms and Conditions",
    placeholder: "",
    id: "userPasswordConfirm",
    type: "checkbox",
  },
  userImage: {
    label: "Photo",
    placeholder: "",
    id: "userImage",
    type: "file",
  },
  userCountrie: {
    label: "Your countrie",
    id: "userCountrie",
    placeholder: "Select...",
    type: "text",
  },
};

export default formFields;
