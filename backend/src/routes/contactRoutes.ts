import { Router } from "express";
import {
  createContactController,
  listAllContactsController,
  updateContactController,
} from "../controllers/contactsController";
import { validateAuthTokenMiddleware } from "../middlewares/validateAuthTokenMiddleware";

export const contactRoutes = Router();

contactRoutes.post("", validateAuthTokenMiddleware, createContactController);
contactRoutes.get("", listAllContactsController);
contactRoutes.patch(
  "/:id",
  validateAuthTokenMiddleware,
  updateContactController,
);
