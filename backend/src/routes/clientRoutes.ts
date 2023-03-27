import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listAllClientsController,
  listProfileController,
  updateClientController,
} from "../controllers/clientControllers";
import { validateAuthTokenMiddleware } from "../middlewares/validateAuthTokenMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { verifyClientAlreadyExists } from "../middlewares/verifyUserAlreadyExists";
import {
  createClientSchema,
  updateClientSchema,
} from "../schemas/clientSchemas";

export const clientRoutes = Router();

clientRoutes.post(
  "",
  verifyClientAlreadyExists,
  validateSchemaMiddleware(createClientSchema),
  createClientController,
);
clientRoutes.get("", listAllClientsController);
clientRoutes.get(
  "/profile",
  validateAuthTokenMiddleware,
  listProfileController,
);
clientRoutes.patch(
  "",
  validateAuthTokenMiddleware,
  validateSchemaMiddleware(updateClientSchema),
  updateClientController,
);
clientRoutes.delete("", validateAuthTokenMiddleware, deleteClientController);
