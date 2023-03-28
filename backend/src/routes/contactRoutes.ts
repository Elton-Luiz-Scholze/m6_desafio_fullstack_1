import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listAllContactsController,
  updateContactController,
} from "../controllers/contactsController";
import { validateAuthTokenMiddleware } from "../middlewares/validateAuthTokenMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { verifyContactAlreadyExists } from "../middlewares/verifyContactAlreadyExists";
import { createContactSchema } from "../schemas/contactSchemas";

export const contactRoutes = Router();

contactRoutes.post(
  "",
  validateSchemaMiddleware(createContactSchema),
  verifyContactAlreadyExists,
  validateAuthTokenMiddleware,
  createContactController,
);
contactRoutes.get("", listAllContactsController);
contactRoutes.patch(
  "/:id",
  validateAuthTokenMiddleware,
  updateContactController,
);
contactRoutes.delete(
  "/:id",
  validateAuthTokenMiddleware,
  deleteContactController,
);
