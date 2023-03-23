import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listAllClientsController,
  updateClientController,
} from "../controllers/clientControllers";
import { validateAuthTokenMiddleware } from "../middlewares/validateAuthTokenMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import {
  createClientSchema,
  updateClientSchema,
} from "../schemas/clientSchemas";

export const clientRoutes = Router();

clientRoutes.post(
  "",
  validateSchemaMiddleware(createClientSchema),
  createClientController,
);
clientRoutes.get("", listAllClientsController);
clientRoutes.patch(
  "",
  validateAuthTokenMiddleware,
  validateSchemaMiddleware(updateClientSchema),
  updateClientController,
);
clientRoutes.delete("", validateAuthTokenMiddleware, deleteClientController);
