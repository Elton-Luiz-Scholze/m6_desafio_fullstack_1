import { Request, Response } from "express";
import {
  createClientService,
  deleteClientService,
  listAllClientsService,
  listProfileService,
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

export const listProfileController = async (req: Request, res: Response) => {
  const id = req.client.id;
  const client = await listProfileService(id);

  return res.json(client);
};

export const updateClientController = async (req: Request, res: Response) => {
  const id = req.client.id;
  const updatedClient = await updateClientService(req.body, id);

  return res.status(200).json(updatedClient);
};

export const deleteClientController = async (req: Request, res: Response) => {
  const id = req.client.id;
  const deleteClient = await deleteClientService(id);

  return res.status(204).json(deleteClient);
};
