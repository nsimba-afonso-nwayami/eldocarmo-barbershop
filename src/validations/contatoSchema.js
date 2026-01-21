import * as yup from "yup";

export const contatoSchema = yup.object().shape({
  nome: yup
    .string()
    .required("Nome é obrigatório")
    .min(3, "Nome deve ter pelo menos 3 caracteres"),
  telefone: yup
    .string()
    .required("Telefone é obrigatório")
    .matches(
      /^9\d{2} \d{3} \d{3}$/,
      "Formato do telefone inválido (Ex: 923 456 789)"
    ),
  email: yup.string().required("Email é obrigatório").email("Email inválido"),
  assunto: yup
    .string()
    .required("Assunto é obrigatório")
    .min(3, "Assunto deve ter pelo menos 3 caracteres"),
  mensagem: yup
    .string()
    .required("Mensagem é obrigatória")
    .min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});
