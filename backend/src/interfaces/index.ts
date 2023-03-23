export interface IClientReq {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface IClientRes {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IClientLogin {
  email: string;
  password: string;
}

export interface IClientUpdate {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
}
