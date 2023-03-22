import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/errors";

export const validateAuthTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let authToken = req.headers.authorization;

  if (!authToken) throw new AppError(400, "Missing authorization headers");

  authToken = authToken?.split(" ")[1];

  return jwt.verify(
    authToken!,
    process.env.SECRET_KEY!,
    (error, decoded: any) => {
      if (error) throw new AppError(401, "Missing authorization headers");

      req.client = {
        id: decoded.sub,
      };

      return next();
    },
  );
};
