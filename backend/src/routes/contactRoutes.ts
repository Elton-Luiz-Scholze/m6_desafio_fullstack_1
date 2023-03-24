import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listAllContactsController,
  updateContactController,
} from "../controllers/contactsController";
import { validateAuthTokenMiddleware } from "../middlewares/validateAuthTokenMiddleware";
import { verifyContactAlreadyExists } from "../middlewares/verifyContactAlreadyExists copy";

export const contactRoutes = Router();

contactRoutes.post(
  "",
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
