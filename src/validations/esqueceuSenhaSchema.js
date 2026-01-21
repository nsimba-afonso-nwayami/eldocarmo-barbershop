// validations/esqueceuSenhaSchema.js
import * as yup from "yup";

export const esqueceuSenhaSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email é obrigatório")
    .email("Email inválido"),
});
