import { IClientReq, IClientUpdate } from "../interfaces";
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
  const findClients = await clientRepository.find({
    relations: {
      contact: true,
    },
  });

  const returnedClients = await returnAllClientsSchema.validate(findClients, {
    stripUnknown: true,
  });

  return returnedClients;
};

export const listProfileService = async (id: string) => {
  const findClient = await clientRepository.findOne({
    relations: {
      contact: true,
    },
    where: { id: id },
  });

  const returnedClient = await returnClientSchema.validate(findClient, {
    stripUnknown: true,
  });

  return returnedClient;
};

export const updateClientService = async (data: IClientUpdate, id: string) => {
  const findClient = await clientRepository.findOneByOrFail({ id: id });

  const patchedClient = clientRepository.create({
    ...findClient,
    ...data,
  });

  await clientRepository.save(patchedClient);

  const returnPatchedClient = await returnClientSchema.validate(patchedClient, {
    stripUnknown: true,
  });

  return returnPatchedClient;
};

export const deleteClientService = async (id: string): Promise<void> => {
  const findClient = await clientRepository.findOneByOrFail({ id: id });

  findClient.isActive = false;

  await clientRepository.save(findClient);
};
