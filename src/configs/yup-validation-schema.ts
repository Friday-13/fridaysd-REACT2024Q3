import * as yup from "yup";
import formFields from "./form-fields";
import listOfCountiers from "./list-of-countries";

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
    acceptTAC: yup
      .boolean()
      .oneOf([true], "Accept terms and conditions")
      .required(),
    userImage: yup
      .mixed<FileList>()
      .required("Photo is required")
      .test("fileExist", "Photo is requrid", (value) => {
        return value.length !== 0;
      })
      .test("fileSize", "File size is to big (max 3Mb)", (value) => {
        if (value.length === 0) return true;
        return value && value[0].size <= 3 * 1024 * 1024;
      })
      .test("fileType", "Allowed file extensions: png, jpeg", (value) => {
        if (value.length === 0) return true;
        return (
          value &&
          (value[0].type === "image/jpeg" || value[0].type === "image/png")
        );
      }),
    userCountrie: yup
      .string()
      .oneOf(listOfCountiers, "Please, select valid countrie")
      .required(),
  })
  .required();
export default schema;
