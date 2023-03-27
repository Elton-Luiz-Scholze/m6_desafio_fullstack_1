export interface IClientRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
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
  contact?: IContact[];
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

export interface IContactCreate {
  name: string;
  email: string;
  phone: string;
}

export interface IContact {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
}
