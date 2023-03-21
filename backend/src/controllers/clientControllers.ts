import { Request, Response } from "express";
import { createClientService } from "../services/clientService";

export const createClientController = async (req: Request, res: Response) => {
  const client = await createClientService(req.body);

  return res.status(200).json(client);
};
