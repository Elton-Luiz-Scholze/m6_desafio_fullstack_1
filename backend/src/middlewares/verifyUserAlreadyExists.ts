import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/errors";
import { clientRepository } from "../repositories/clientRepository";

export const verifyClientAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const findClient = await clientRepository.findOneBy({
    email: req.body.email,
  });

  if (findClient) {
    throw new AppError(409, "Client already exists");
  }

  next();
};
