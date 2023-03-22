import * as yup from "yup";
import { IClientLogin, IClientReq, IClientRes } from "../interfaces";

export const createClientSchema: yup.Schema<IClientReq> = yup.object().shape({
  name: yup.string().max(200).trim().required(),
  email: yup.string().email().trim().max(200).required(),
  password: yup.string().trim().max(120).required(),
  phone: yup.string().trim().required(),
});

export const returnClientSchema: yup.Schema<IClientRes> = yup.object().shape({
  id: yup.string(),
  name: yup.string(),
  email: yup.string().email(),
  phone: yup.string(),
  isActive: yup.boolean(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
});

export const returnAllClientsSchema = yup.array(returnClientSchema);

export const loginSchema: yup.Schema<IClientLogin> = yup.object().shape({
  email: yup.string().email().trim().required(),
  password: yup.string().trim().required(),
});
