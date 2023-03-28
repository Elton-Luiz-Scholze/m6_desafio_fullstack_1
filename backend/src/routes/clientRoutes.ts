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
  validateSchemaMiddleware(createClientSchema),
  verifyClientAlreadyExists,
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
  validateSchemaMiddleware(updateClientSchema),
  validateAuthTokenMiddleware,
  updateClientController,
);
clientRoutes.delete("", validateAuthTokenMiddleware, deleteClientController);
