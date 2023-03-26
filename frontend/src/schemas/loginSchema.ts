import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Deve ser um email válido")
    .trim()
    .required("Email é obrigatório"),
  password: yup.string().trim().required("Senha é obrigatória"),
});
