import { IClientLogin } from "../interfaces";
import { RequestApi } from "./RequestApi";

export async function RequestLogin(loginData: IClientLogin) {
  const { data } = await RequestApi.post("login", loginData);

  return data;
}
