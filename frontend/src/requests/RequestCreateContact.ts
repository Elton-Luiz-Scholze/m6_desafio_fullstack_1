import { IContactCreate } from "../interfaces";
import { RequestApi } from "./RequestApi";

export async function RequestCreateContact(
  token: string,
  contactData: IContactCreate,
): Promise<IContactCreate> {
  const { data } = await RequestApi.post<IContactCreate>(
    "contact",
    contactData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
}
