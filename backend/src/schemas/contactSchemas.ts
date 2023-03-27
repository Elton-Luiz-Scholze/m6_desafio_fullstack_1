import * as yup from "yup";
import {
  IContact,
  IContactReq,
  IContactRes,
  IContactUpdate,
} from "../interfaces/contacts";

export const createContactSchema: yup.Schema<IContactReq> = yup.object().shape({
  name: yup.string().max(200).trim().required(),
  email: yup.string().email().trim().max(200).required(),
  phone: yup.string().trim().required(),
});

export const ContactSchema: yup.Schema<IContact> = yup.object().shape({
  id: yup.string(),
  name: yup.string(),
  email: yup.string().email(),
  phone: yup.string(),
});

export const returnContactSchema: yup.Schema<IContactRes> = yup.object().shape({
  id: yup.string(),
  name: yup.string(),
  email: yup.string().email(),
  phone: yup.string(),
  isActive: yup.boolean(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
  client: yup.object().shape({
    id: yup.string(),
    name: yup.string(),
  }),
});

export const returnedAllContactsSchema = yup.array(returnContactSchema);

export const updateContactSchema: yup.Schema<IContactUpdate> = yup
  .object()
  .shape({
    name: yup.string().trim(),
    email: yup.string().email().trim(),
    phone: yup.string().trim(),
    client: yup.object().shape({
      id: yup.string(),
      name: yup.string(),
    }),
  });
