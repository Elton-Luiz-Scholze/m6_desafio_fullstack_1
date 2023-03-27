import { IClientRes, IClientUpdate } from "../interfaces";
import { RequestApi } from "./RequestApi";

export async function RequestCreateContact(
  token: string,
  contactData: IClientUpdate,
): Promise<IClientRes> {
  const { data } = await RequestApi.post<IClientUpdate>(
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
