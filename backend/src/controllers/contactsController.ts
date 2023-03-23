import { Request, Response } from "express";
import { createContactService } from "../services/contactService";

export const createContactController = async (req: Request, res: Response) => {
  const id = req.client.id;
  const contact = await createContactService(req.body, id);

  return res.status(201).json(contact);
};
