// validations/loginSchema.js
import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email é obrigatório")
    .email("Email inválido"),
  senha: yup
    .string()
    .required("Senha é obrigatória")
    .min(8, "A senha deve ter pelo menos 8 caracteres"),
});
