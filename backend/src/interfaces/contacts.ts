export interface IContactReq {
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

export interface IContactRes {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  client?: {
    id?: string;
    name?: string;
  };
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  phone?: string;
}
