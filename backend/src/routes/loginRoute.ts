import { Router } from "express";
import { loginController } from "../controllers/loginController";
import { loginMiddleware } from "../middlewares/loginMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { loginSchema } from "../schemas/clientSchemas";

export const loginRoute = Router();

loginRoute.post(
  "",
  validateSchemaMiddleware(loginSchema),
  loginMiddleware,
  loginController,
);
