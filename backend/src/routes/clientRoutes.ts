import { Router } from "express";
import { createClientController } from "../controllers/clientControllers";
import { validateDataMiddleware } from "../middlewares/validateSerializer.middleware";
import { createClientSchema } from "../schemas/clientSchemas";

export const clientRoutes = Router();

clientRoutes.post(
  "",
  validateDataMiddleware(createClientSchema),
  createClientController,
);
