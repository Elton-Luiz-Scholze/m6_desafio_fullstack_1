import { RequestApi } from "./RequestApi";

export async function RequestDeleteContact(
  token: string,
  contactId: string,
): Promise<void> {
  await RequestApi.delete(`contact/${contactId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
