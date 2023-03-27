import * as yup from "yup";

export const updateSchema = yup.object().shape({
  name: yup.string().max(200).trim(),
  email: yup.string().email("Deve ser um email válido").trim().max(200),
  password: yup
    .string()
    .trim()
    .max(120)
    .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter ao menos um caractér especial")
    .matches(/.{8,}/, "Deve ter no mínimo 8 dígitos"),
  phone: yup
    .string()
    .trim()
    .matches(
      /[1-9]{2} 9[1-9]\d{3}\d{4}/,
      "Insira um telefone válido. Ex.: 41 999999999",
    ),
});
