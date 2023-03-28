import { IContact, IContactUpdate } from "../interfaces";
import { RequestApi } from "./RequestApi";

export async function RequestContactUpdated(
  token: string,
  contactData: IContactUpdate,
  contactId: string,
): Promise<IContact> {
  const { data } = await RequestApi.patch<IContactUpdate>(
    `contact/${contactId}`,
    contactData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
}
