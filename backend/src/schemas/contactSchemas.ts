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
  phone: yup.string(),
  email: yup.string().email(),
  name: yup.string(),
  id: yup.string(),
});

export const returnContactSchema: yup.Schema<IContactRes> = yup.object().shape({
  client: yup.object().shape({
    id: yup.string(),
    name: yup.string(),
  }),
  updatedAt: yup.date(),
  createdAt: yup.date(),
  isActive: yup.boolean(),
  phone: yup.string(),
  email: yup.string().email(),
  name: yup.string(),
  id: yup.string(),
});

export const returnedAllContactsSchema = yup.array(returnContactSchema);

export const updateContactSchema: yup.Schema<IContactUpdate> = yup
  .object()
  .shape({
    client: yup.object().shape({
      id: yup.string(),
      name: yup.string(),
    }),
    phone: yup.string().trim(),
    email: yup.string().email().trim(),
    name: yup.string().trim(),
  });
