import { compare } from "bcryptjs";
import { Request, Response, NextFunction } from "express";
import { IClientLogin } from "../interfaces";
import { clientRepository } from "../repositories/clientRepository";

export const loginMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password }: IClientLogin = req.body;

  const client = await clientRepository.findOneBy({ email: email });

  if (!client) {
    return res.status(403).json({ message: "Wrong email or password" });
  }

  const passwordCompare = await compare(password, client.password);

  if (!passwordCompare) {
    return res.status(403).json({ message: "Wrong email or password" });
  }

  next();
};
