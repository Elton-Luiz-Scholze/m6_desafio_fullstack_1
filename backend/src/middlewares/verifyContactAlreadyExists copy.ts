import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/errors";
import { contactRepository } from "../repositories/contactRepository";

export const verifyContactAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const findContact = await contactRepository.findOneBy({
    email: req.body.email,
  });

  if (findContact) {
    throw new AppError(409, "Contact already exists");
  }

  next();
};
