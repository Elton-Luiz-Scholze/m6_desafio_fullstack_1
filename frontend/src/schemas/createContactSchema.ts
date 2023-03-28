import * as yup from "yup";

export const createContactSchema = yup.object().shape({
  name: yup.string().max(200).trim().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Deve ser um email válido")
    .trim()
    .max(200)
    .required("Email é obrigatório"),
  phone: yup
    .string()
    .trim()
    .matches(
      /[1-9]{2} 9[1-9]\d{3}\d{4}/,
      "Insira um telefone válido. Ex.: 41 999999999",
    )
    .required("Telefone é obrigatório"),
});
