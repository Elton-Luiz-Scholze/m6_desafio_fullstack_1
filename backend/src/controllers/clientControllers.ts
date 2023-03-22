import { Request, Response } from "express";
import {
  createClientService,
  listAllClientsService,
} from "../services/clientService";

export const createClientController = async (req: Request, res: Response) => {
  const client = await createClientService(req.body);

  return res.status(201).json(client);
};

export const listAllClientsController = async (req: Request, res: Response) => {
  const clients = await listAllClientsService();

  return res.json(clients);
};
