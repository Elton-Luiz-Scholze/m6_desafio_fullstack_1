import { Request, Response } from "express";
import { loginService } from "../services/loginService";

export const loginController = async (req: Request, res: Response) => {
  const token = await loginService(req.body);

  return res.json(token);
};
