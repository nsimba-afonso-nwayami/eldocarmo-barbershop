import AdminLayout from "./components/AdminLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function AgendamentosAdmin() {
  const [openDetalhes, setOpenDetalhes] = useState(false);
  const [openNovo, setOpenNovo] = useState(false);

  const agendamentos = [
    {
      id: 1,
      cliente: "João da Silva",
      servico: "Corte Masculino",
      profissional: "Carlos Barber",
      data: "20/01/2026",
      hora: "14:00",
      status: "Confirmado",
    },
    {
      id: 2,
      cliente: "Maria Oliveira",
      servico: "Barba Completa",
      profissional: "André Barber",
      data: "21/01/2026",
      hora: "10:30",
      status: "Pendente",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Confirmado":
        return "bg-green-600/20 text-green-800";
      case "Pendente":
        return "bg-amber-400/20 text-amber-700";
      case "Cancelado":
        return "bg-red-500/20 text-red-700";
      default:
        return "bg-stone-200 text-stone-700";
    }
  };

  return (
    <>
      <title>Agendamentos | Eldocarmo Barbershop</title>

      <AdminLayout title="Agendamentos">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col lg:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por cliente ou serviço..."
            className="p-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full lg:flex-1"
          />

          <select className="p-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm">
            <option>Status</option>
            <option>Confirmado</option>
            <option>Pendente</option>
            <option>Cancelado</option>
          </select>

          <button
            onClick={() => setOpenNovo(true)}
            className="px-5 py-3 cursor-pointer bg-amber-400 hover:bg-amber-500 text-stone-900 rounded-lg font-semibold flex items-center gap-2"
          >
            <i className="fas fa-calendar-plus"></i>
            Novo Agendamento
          </button>
        </div>

        {/* LISTA DE AGENDAMENTOS */}
        <div className="flex flex-col gap-4">
          {agendamentos.map((item) => (
            <div
              key={item.id}
              className="bg-stone-50 border border-stone-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-stone-800">{item.cliente}</p>
                  <p className="text-stone-500 text-sm">
                    {item.servico} • {item.profissional}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                    item.status,
                  )}`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-stone-600 text-sm">
                {item.data} às <strong>{item.hora}</strong>
              </p>

              {/* AÇÕES */}
              <div className="flex justify-between items-center mt-4">
                {/* VER DETALHES */}
                <button
                  onClick={() => setOpenDetalhes(true)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1"
                >
                  <i className="fas fa-eye"></i> Ver Detalhes
                </button>

                {/* AÇÕES */}
                <div className="flex gap-2">
                  <button className="px-4 py-1 text-sm bg-amber-400 hover:bg-amber-500 text-stone-900 rounded-lg cursor-pointer font-semibold">
                    Confirmar
                  </button>

                  <button className="px-4 py-1 text-sm bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg cursor-pointer">
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DETALHES */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes do Agendamento"
          icon="fas fa-calendar-check"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            {/* CABEÇALHO */}
            <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-6">
              <h2 className="text-xl font-bold text-stone-800">
                João da Silva
              </h2>
              <p className="text-stone-500">Cliente • Agendamento confirmado</p>

              <span className="inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold bg-green-600/20 text-green-800">
                Confirmado
              </span>
            </div>

            {/* INFORMAÇÕES */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-stone-500">Serviço</p>
                <p className="font-semibold text-stone-800">Corte Masculino</p>
              </div>

              <div>
                <p className="text-sm text-stone-500">Profissional</p>
                <p className="font-semibold text-stone-800">Carlos Barber</p>
              </div>

              <div>
                <p className="text-sm text-stone-500">Data</p>
                <p className="font-semibold text-stone-800">20/01/2026</p>
              </div>

              <div>
                <p className="text-sm text-stone-500">Horário</p>
                <p className="font-semibold text-stone-800">14:00</p>
              </div>
            </div>

            {/* AÇÕES */}
            <div className="flex justify-end">
              <button
                onClick={() => setOpenDetalhes(false)}
                className="px-6 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </Modal>

        {/* MODAL NOVO AGENDAMENTO */}
        <Modal
          isOpen={openNovo}
          onClose={() => setOpenNovo(false)}
          title="Novo Agendamento"
          icon="fas fa-calendar-plus"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            {/* TÍTULO */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-stone-800">
                Novo Agendamento
              </h2>
              <p className="text-stone-500 text-sm mt-1">
                Preencha os dados abaixo para agendar o atendimento
              </p>
            </div>

            {/* FORMULÁRIO */}
            <form className="grid gap-6 md:grid-cols-2">
              {/* Nome */}
              <div className="md:col-span-2">
                <label className="block text-stone-700 font-medium mb-1">
                  Nome do Cliente
                </label>
                <input
                  type="text"
                  placeholder="Digite o nome completo"
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  placeholder="9XX XXX XXX"
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@exemplo.com"
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              {/* Serviço */}
              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Serviço
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none">
                  <option value="">Selecione o serviço</option>
                  <option>Corte Masculino</option>
                  <option>Barba</option>
                  <option>Corte + Barba</option>
                  <option>Tratamento Capilar</option>
                </select>
              </div>

              {/* Profissional */}
              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Profissional
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none">
                  <option value="">Selecione o profissional</option>
                  <option>Eldocarmo</option>
                  <option>Ricardo</option>
                  <option>Lucas</option>
                  <option>Miguel</option>
                </select>
              </div>

              {/* Data */}
              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Data
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              {/* Horário */}
              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Horário
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              {/* AÇÕES */}
              <div className="md:col-span-2 flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setOpenAgendar(false)}
                  className="px-6 py-3 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg cursor-pointer"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-stone-900 font-semibold rounded-lg cursor-pointer"
                >
                  Confirmar Agendamento
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </AdminLayout>
    </>
  );
}
