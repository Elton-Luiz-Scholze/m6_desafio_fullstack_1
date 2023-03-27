import { AppDataSource } from "../data-source";
import { Client } from "../entities/clientsEntity";

export const clientRepository = AppDataSource.getRepository(Client);
