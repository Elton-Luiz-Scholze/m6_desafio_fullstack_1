import { IClientRes, IClientUpdate } from "../interfaces";
import { RequestApi } from "./RequestApi";

export async function RequestClientUpdate(
  token: string,
  clientData: IClientUpdate,
): Promise<IClientRes> {
  const { data } = await RequestApi.patch<IClientRes>("client", clientData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}
