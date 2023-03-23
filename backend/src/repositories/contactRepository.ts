import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contactsEntity";

export const contactRepository = AppDataSource.getRepository(Contact);
