import { Router } from "express";
import { loginController } from "../controllers/loginController";
import { loginMiddleware } from "../middlewares/loginMiddleware";
import { validateDataMiddleware } from "../middlewares/validateSerializer.middleware";
import { loginSchema } from "../schemas/clientSchemas";

export const loginRoute = Router();

loginRoute.post(
  "",
  validateDataMiddleware(loginSchema),
  loginMiddleware,
  loginController,
);
