import * as yup from "yup";
import {
  IClientLogin,
  IClientReq,
  IClientRes,
  IClientUpdate,
} from "../interfaces";
import { ContactSchema } from "./contactSchemas";

export const createClientSchema: yup.Schema<IClientReq> = yup.object().shape({
  name: yup.string().max(200).trim().required(),
  email: yup.string().email().trim().max(200).required(),
  password: yup.string().trim().max(120).required(),
  phone: yup.string().trim().required(),
});

export const returnClientSchema: yup.Schema<IClientRes> = yup.object().shape({
  contact: yup.array(ContactSchema),
  updatedAt: yup.date(),
  createdAt: yup.date(),
  isActive: yup.boolean(),
  phone: yup.string(),
  email: yup.string().email(),
  name: yup.string(),
  id: yup.string(),
});

export const returnAllClientsSchema = yup.array(returnClientSchema);

export const loginSchema: yup.Schema<IClientLogin> = yup.object().shape({
  email: yup.string().email().trim().required(),
  password: yup.string().trim().required(),
});

export const updateClientSchema: yup.Schema<IClientUpdate> = yup
  .object()
  .shape({
    phone: yup.string(),
    password: yup.string().trim(),
    email: yup.string().email(),
    name: yup.string(),
  });
