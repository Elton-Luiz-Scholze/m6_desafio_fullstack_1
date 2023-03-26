import { IClientRegister, IClientRes } from "../interfaces";
import { RequestApi } from "./RequestApi";

export async function RequestClientRegister(
  dataUser: IClientRegister,
): Promise<IClientRes> {
  const { data } = await RequestApi.post<IClientRes>("client", dataUser);

  return data;
}
