export interface ICredentials {
  email: string;
  token: string;
}

export type IAuthState = {
  admin: ICredentials | null;
  isAuthenticated: boolean;
};

interface IData {
  credentials: {
    email: string;
    token: string;
  };
}

export interface IAdmin {
  code: number;
  status: string;
  data: IData;
  token: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}
