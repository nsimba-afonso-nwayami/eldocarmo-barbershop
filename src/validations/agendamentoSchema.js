import * as yup from "yup";

// Pega apenas data atual sem hora
const hoje = new Date();
hoje.setHours(0, 0, 0, 0);

export const agendamentoSchema = yup.object().shape({
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
  servico: yup.string().required("Selecione um serviço"),
  profissional: yup.string().required("Selecione um profissional"),
  data: yup
    .date()
    .typeError("Data inválida") // <-- importante para strings mal formatadas
    .required("Data é obrigatória")
    .min(hoje, "Não é possível agendar para datas passadas"),
  hora: yup.string().required("Horário é obrigatório"),
});
