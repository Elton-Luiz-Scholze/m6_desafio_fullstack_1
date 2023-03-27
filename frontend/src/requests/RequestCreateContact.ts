import { IContact, IContactCreate } from "../interfaces";
import { RequestApi } from "./RequestApi";

export async function RequestCreateContact(
  token: string,
  contactData: IContactCreate,
): Promise<IContact> {
  const { data } = await RequestApi.post<IContact>("contact", contactData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}
