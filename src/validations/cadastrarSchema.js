// validations/cadastrarSchema.js
import * as yup from "yup";

export const cadastrarSchema = yup.object().shape({
  nome: yup
    .string()
    .required("Nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres"),
  sexo: yup.string().required("Selecione seu sexo"),
  email: yup
    .string()
    .required("Email é obrigatório")
    .email("Email inválido"),
  telefone: yup
    .string()
    .required("Telefone é obrigatório")
    .matches(/^9\d{2} \d{3} \d{3}$/, "Formato do telefone inválido (Ex: 923 456 789)"),
  senha: yup
    .string()
    .required("Senha é obrigatória")
    .min(8, "A senha deve ter pelo menos 8 caracteres"),
  confirmarSenha: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("senha")], "As senhas devem ser iguais"),
});
