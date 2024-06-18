export const AUTH = "AUTH";

export const GET_USERS = "get-users";

export const GET_MESSAGES = "get-messages";

export const GET_USER_BY_ID = "get-user-by-id";
export interface signupInfo {
  fullname: string;
  email: string;
  password: string;
  confirmpassword: string;
}
export interface loginInfo {
  email: string;
  password: string;
}
