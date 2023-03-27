import { IClientRes } from "../interfaces";
import { RequestApi } from "./RequestApi";

export async function RequestDeleteClient(token: string): Promise<void> {
  await RequestApi.delete<IClientRes>("client", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
