import { IClientReq } from "../interfaces";
import { clientRepository } from "../repositories/clientRepository";
import {
  returnAllClientsSchema,
  returnClientSchema,
} from "../schemas/clientSchemas";

export const createClientService = async (data: IClientReq) => {
  const newClient = clientRepository.create(data);

  await clientRepository.save(newClient);

  const returnedNewClient = await returnClientSchema.validate(newClient, {
    stripUnknown: true,
  });

  return returnedNewClient;
};

export const listAllClientsService = async () => {
  const findClients = await clientRepository.find();

  const returnedClients = await returnAllClientsSchema.validate(findClients, {
    stripUnknown: true,
  });

  return returnedClients;
};
