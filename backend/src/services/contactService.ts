import { IContactReq } from "../interfaces/contacts";
import { clientRepository } from "../repositories/clientRepository";
import { contactRepository } from "../repositories/contactRepository";
import { returnContactSchema } from "../schemas/contactSchemas";

export const createContactService = async (data: IContactReq, id: string) => {
  const findClient = await clientRepository.findOneByOrFail({ id: id });

  const newContact = contactRepository.create({ ...data, client: findClient });

  await contactRepository.save(newContact);

  const returnedNewContact = await returnContactSchema.validate(newContact, {
    stripUnknown: true,
  });

  return returnedNewContact;
};
