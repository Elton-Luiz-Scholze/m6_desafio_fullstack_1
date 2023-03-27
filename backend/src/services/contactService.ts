import { AppError } from "../errors/errors";
import { IContactReq, IContactUpdate } from "../interfaces/contacts";
import { clientRepository } from "../repositories/clientRepository";
import { contactRepository } from "../repositories/contactRepository";
import {
  returnContactSchema,
  returnedAllContactsSchema,
  updateContactSchema,
} from "../schemas/contactSchemas";

export const createContactService = async (data: IContactReq, id: string) => {
  const findClient = await clientRepository.findOneByOrFail({ id: id });

  const newContact = contactRepository.create({ ...data, client: findClient });

  await contactRepository.save(newContact);

  const returnedNewContact = await returnContactSchema.validate(newContact, {
    stripUnknown: true,
  });

  return returnedNewContact;
};

export const listAllContactsService = async () => {
  const findContacts = await contactRepository.find({
    relations: {
      client: true,
    },
  });

  const returnedContacts = await returnedAllContactsSchema.validate(
    findContacts,
    {
      stripUnknown: true,
    },
  );

  return returnedContacts;
};

export const updateContactService = async (
  data: IContactUpdate,
  clientId: string,
  contactId: string,
) => {
  const findContact = await contactRepository.findOne({
    relations: {
      client: true,
    },
    where: {
      id: contactId,
    },
  });

  if (findContact?.client.id !== clientId) {
    throw new AppError(
      401,
      "You are not allowed to change a contact that is not yours",
    );
  }

  const updatedContact = contactRepository.create({
    ...findContact,
    ...data,
  });

  await contactRepository.save(updatedContact);

  const returnedUpdatedContact = await updateContactSchema.validate(
    updatedContact,
    {
      stripUnknown: true,
    },
  );

  return returnedUpdatedContact;
};

export const deleteContactServices = async (
  clientId: string,
  contactId: string,
): Promise<void> => {
  const findContact = await contactRepository.findOne({
    relations: {
      client: true,
    },
    where: {
      id: contactId,
    },
  });

  if (findContact?.client.id !== clientId) {
    throw new AppError(
      401,
      "You are not allowed to delete a contact that is not yours.",
    );
  }

  await contactRepository.remove(findContact!);
};
