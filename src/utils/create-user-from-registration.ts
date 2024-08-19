import IRegistrationForm, {
  IUserInStore,
} from "@configs/registration-form-types";
import fileToBase64 from "./file-to-base64";

async function createUserFromRegistration(formData: IRegistrationForm) {
  const { userImage, ...baseUser } = formData;
  const base64Image = await fileToBase64(userImage[0]);
  const preparedUser: IUserInStore = { ...baseUser, userImage: base64Image };
  return preparedUser;
}

export default createUserFromRegistration;
