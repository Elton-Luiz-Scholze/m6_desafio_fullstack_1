import { IClientRes } from "../interfaces";
import { RequestApi } from "./RequestApi";

export async function RequestClientProfile(token: string): Promise<IClientRes> {
  const { data } = await RequestApi.get<IClientRes>("client/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}
