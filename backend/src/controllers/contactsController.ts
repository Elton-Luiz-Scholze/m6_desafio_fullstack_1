import { Request, Response } from "express";
import {
  createContactService,
  deleteContactServices,
  listAllContactsService,
  updateContactService,
} from "../services/contactService";

export const createContactController = async (req: Request, res: Response) => {
  const id = req.client.id;
  const contact = await createContactService(req.body, id);

  return res.status(201).json(contact);
};

export const listAllContactsController = async (
  req: Request,
  res: Response,
) => {
  const contacts = await listAllContactsService();

  return res.json(contacts);
};

export const updateContactController = async (req: Request, res: Response) => {
  const clientId = req.client.id;
  const contactId = req.params.id;
  const updatedContact = await updateContactService(
    req.body,
    clientId,
    contactId,
  );

  return res.json(updatedContact);
};

export const deleteContactController = async (req: Request, res: Response) => {
  const clientId = req.client.id;
  const contactId = req.params.id;
  const deletedContact = await deleteContactServices(clientId, contactId);

  return res.status(204).json(deletedContact);
};
