import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { agendamentoSchema } from "../../validations/agendamentoSchema";

export default function Agendar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(agendamentoSchema),
  });

  const onSubmit = async (data) => {
    // Mostra toast de loading
    const toastId = toast.loading("Processando agendamento...");

    try {
      // Simula envio assíncrono (substitua pelo fetch/axios real)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 segundos de delay

      console.log("Agendamento enviado:", data);

      // Atualiza o toast para sucesso
      toast.success("Agendamento realizado com sucesso!", {
        id: toastId, // substitui o toast de loading
      });

      reset(); // limpa o formulário
    } catch (error) {
      // Atualiza o toast para erro
      toast.error("Erro ao enviar agendamento. Tente novamente.", {
        id: toastId,
      });
    }
  };

  return (
    <>
      <title>Agendar | Eldocarmo Barbershop</title>

      {/* Header */}
      <Header />

      {/* Introdução */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-amber-400 text-stone-50">
            Agendamento
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Agende Seu Corte ou Tratamento
          </h1>

          <p className="text-lg text-stone-500">
            Escolha o profissional, o serviço e o melhor horário para você. A
            Eldocarmo Barbershop conecta você a um atendimento de qualidade de
            forma simples, segura e digital.
          </p>
        </div>
      </section>

      {/* Formulário de Agendamento */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto bg-stone-50 border border-stone-200 rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-stone-800 mb-4 text-center">
            Dados do Agendamento
          </h2>
          <p className="text-stone-500 mb-10 text-center">
            Preencha corretamente as informações abaixo para garantir o seu
            horário.
          </p>

          <form
            className="grid gap-6 md:grid-cols-2 md:gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Nome */}
            <div className="md:col-span-2">
              <label className="block text-stone-800 font-medium mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                placeholder="Digite seu nome completo"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none ${
                  errors.nome
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:ring-amber-400"
                }`}
                {...register("nome")}
              />
              {errors.nome && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nome.message}
                </p>
              )}
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-stone-800 font-medium mb-2">
                Telefone
              </label>
              <input
                type="tel"
                placeholder="Ex: 923 456 789"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none ${
                  errors.telefone
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:ring-amber-400"
                }`}
                {...register("telefone")}
              />
              {errors.telefone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.telefone.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-stone-800 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Digite seu email"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none ${
                  errors.email
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:ring-amber-400"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Serviço */}
            <div>
              <label className="block text-stone-800 font-medium mb-2">
                Serviço
              </label>
              <select
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none ${
                  errors.servico
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:ring-amber-400"
                }`}
                {...register("servico")}
              >
                <option value="">Selecione o serviço</option>
                <option>Corte de Cabelo</option>
                <option>Barba</option>
                <option>Tratamentos Capilares</option>
                <option>Coloração</option>
              </select>
              {errors.servico && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.servico.message}
                </p>
              )}
            </div>

            {/* Profissional */}
            <div>
              <label className="block text-stone-800 font-medium mb-2">
                Profissional
              </label>
              <select
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none ${
                  errors.profissional
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:ring-amber-400"
                }`}
                {...register("profissional")}
              >
                <option value="">Selecione o profissional</option>
                <option>Eldocarmo</option>
                <option>Ricardo</option>
                <option>Lucas</option>
                <option>Miguel</option>
              </select>
              {errors.profissional && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.profissional.message}
                </p>
              )}
            </div>

            {/* Data */}
            <div>
              <label className="block text-stone-800 font-medium mb-2">
                Data
              </label>
              <input
                type="date"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none ${
                  errors.data
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:ring-amber-400"
                }`}
                {...register("data")}
              />
              {errors.data && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.data.message}
                </p>
              )}
            </div>

            {/* Horário */}
            <div>
              <label className="block text-stone-800 font-medium mb-2">
                Horário
              </label>
              <input
                type="time"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none ${
                  errors.hora
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:ring-amber-400"
                }`}
                {...register("hora")}
              />
              {errors.hora && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.hora.message}
                </p>
              )}
            </div>

            {/* Botão */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full mt-4 bg-amber-400 hover:bg-amber-500 text-stone-50 font-semibold py-4 rounded-lg transition cursor-pointer"
              >
                Confirmar Agendamento
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
