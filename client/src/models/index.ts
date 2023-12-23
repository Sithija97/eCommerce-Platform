export type registerInputs = {
  username: string;
  email: string;
  password: string;
};

export type loginInputs = { email: string; password: string };

export type IUser = {
  _id: string;
  username: string;
  email: string;
  photo: string;
  authMethod: string;
};

export type initialAuthState = {
  user: IUser | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
  modalType: string;
  show: boolean;
};
