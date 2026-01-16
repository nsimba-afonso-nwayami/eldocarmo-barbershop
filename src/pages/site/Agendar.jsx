import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Agendar() {
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

          <form className="grid gap-6 md:grid-cols-2 md:gap-8">
            {/* Nome */}
            <div className="md:col-span-2">
              <label className="block text-stone-800 font-medium mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                placeholder="Digite seu nome completo"
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                required
              />
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-stone-800 font-medium mb-2">
                Telefone
              </label>
              <input
                type="tel"
                placeholder="Ex: 9XX XXX XXX"
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-stone-800 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Digite seu email"
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
            </div>

            {/* Seleção de Serviço */}
            <div>
              <label className="block text-stone-800 font-medium mb-2">
                Serviço
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                required
              >
                <option value="">Selecione o serviço</option>
                <option>Corte de Cabelo</option>
                <option>Barba</option>
                <option>Tratamentos Capilares</option>
                <option>Coloração</option>
              </select>
            </div>

            {/* Seleção de Profissional */}
            <div>
              <label className="block text-stone-800 font-medium mb-2">
                Profissional
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                required
              >
                <option value="">Selecione o profissional</option>
                <option>Eldocarmo</option>
                <option>Ricardo</option>
                <option>Lucas</option>
                <option>Miguel</option>
              </select>
            </div>

            {/* Data */}
            <div>
              <label className="block text-stone-800 font-medium mb-2">
                Data
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                required
              />
            </div>

            {/* Horário */}
            <div>
              <label className="block text-stone-800 font-medium mb-2">
                Horário
              </label>
              <input
                type="time"
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                required
              />
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
