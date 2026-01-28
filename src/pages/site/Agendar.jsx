import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { agendamentoSchema } from "../../validations/agendamentoSchema";
import { useState } from "react";

export default function Agendar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(agendamentoSchema),
  });

  const [openProfissionais, setOpenProfissionais] = useState(false);
  const [profissionalSelecionado, setProfissionalSelecionado] = useState(null);

  const profissionais = [
    {
      nome: "Eldocarmo",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      nome: "Ricardo",
      foto: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      nome: "Lucas",
      foto: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    {
      nome: "Miguel",
      foto: "https://randomuser.me/api/portraits/men/77.jpg",
    },
  ];

  const onSubmit = async (data) => {
    const toastId = toast.loading("Processando agendamento...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Agendamento enviado:", data);

      toast.success("Agendamento realizado com sucesso!", {
        id: toastId,
      });

      reset();
      setProfissionalSelecionado(null);
    } catch (error) {
      toast.error("Erro ao enviar agendamento. Tente novamente.", {
        id: toastId,
      });
    }
  };

  return (
    <>
      <title>Agendar | Eldocarmo Barbershop</title>

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
            Escolha o profissional, o serviço e o melhor horário para você.
          </p>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto bg-stone-50 border border-stone-200 rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-stone-800 mb-4 text-center">
            Dados do Agendamento
          </h2>

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

            {/* Profissional com imagem */}
            <div className="relative">
              <label className="block text-stone-800 font-medium mb-2">
                Profissional
              </label>

              <div
                onClick={() => setOpenProfissionais(!openProfissionais)}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none ${
                  errors.profissional
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:ring-amber-400"
                }`}
              >
                {profissionalSelecionado ? (
                  <div className="flex items-center gap-3">
                    <img
                      src={profissionalSelecionado.foto}
                      alt={profissionalSelecionado.nome}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{profissionalSelecionado.nome}</span>
                  </div>
                ) : (
                  <span className="text-stone-400">
                    Selecione o profissional
                  </span>
                )}
                <i className="fas fa-chevron-down text-stone-400"></i>
              </div>

              {openProfissionais && (
                <div className="absolute z-20 mt-2 w-full bg-white border border-stone-200 rounded-lg shadow-lg">
                  {profissionais.map((prof) => (
                    <div
                      key={prof.nome}
                      onClick={() => {
                        setProfissionalSelecionado(prof);
                        setOpenProfissionais(false);
                      }}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-amber-50 cursor-pointer"
                    >
                      <img
                        src={prof.foto}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span>{prof.nome}</span>
                    </div>
                  ))}
                </div>
              )}

              <input
                type="hidden"
                value={profissionalSelecionado?.nome || ""}
                {...register("profissional")}
              />

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
            </div>

            {/* Hora */}
            <div>
              <label
                className="block text-stone-800 font-medium mb-2"
              >
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
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full cursor-pointer mt-4 bg-amber-400 hover:bg-amber-500 text-stone-50 font-semibold py-4 rounded-lg"
              >
                Confirmar Agendamento
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
