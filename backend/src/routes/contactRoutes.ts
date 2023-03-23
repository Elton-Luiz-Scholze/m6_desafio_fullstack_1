import { Router } from "express";
import { createContactController } from "../controllers/contactsController";
import { validateAuthTokenMiddleware } from "../middlewares/validateAuthTokenMiddleware";

export const contactRoutes = Router();

contactRoutes.post("", validateAuthTokenMiddleware, createContactController);
