import { IClientLogin } from "../interfaces";
import { clientRepository } from "../repositories/clientRepository";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/errors";

export const loginService = async (data: IClientLogin) => {
  const client = await clientRepository.findOneByOrFail({ email: data.email });

  if (!client.isActive) {
    throw new AppError(400, "User is not active");
  }

  const token = jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: client.id,
  });

  return { token: token };
};
