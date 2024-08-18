import * as yup from "yup";
import formFields from "./form-fields";

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
    userGender: yup
      .string()
      .required()
      .oneOf(formFields.userGender.predefinedValues),
  })
  .required();
export default schema;
