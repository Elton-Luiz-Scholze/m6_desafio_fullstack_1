import { Request, Response } from "express";
import {
  createClientService,
  listAllClientsService,
  updateClientService,
} from "../services/clientService";

export const createClientController = async (req: Request, res: Response) => {
  const client = await createClientService(req.body);

  return res.status(201).json(client);
};

export const listAllClientsController = async (req: Request, res: Response) => {
  const clients = await listAllClientsService();

  return res.json(clients);
};

export const updateClientController = async (req: Request, res: Response) => {
  const id = req.client.id;
  const updatedClient = await updateClientService(req.body, id);

  return res.status(200).json(updatedClient);
};
