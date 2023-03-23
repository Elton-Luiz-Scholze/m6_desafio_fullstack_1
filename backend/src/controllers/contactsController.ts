import { Request, Response } from "express";
import {
  createContactService,
  listAllContactsService,
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
