export interface IBaseUserInfo {
  userName: string;
  userAge: number;
  userEmail: string;
  userPassword: string;
  userPasswordConfirm: string;
  userGender: string;
  acceptTAC: boolean;
  userCountrie: string;
}

export default interface IRegistrationForm extends IBaseUserInfo {
  userImage: FileList;
}

export interface IUserInStore extends IBaseUserInfo {
  userImage: string;
}
