import { useState } from "react";
import ClienteLayout from "./components/ClienteLayout";
import Modal from "./components/Modal";

export default function AgendamentosCliente() {
  const [filtroStatus, setFiltroStatus] = useState("");
  const [busca, setBusca] = useState("");
  const [openDetalhes, setOpenDetalhes] = useState(false);
  const [openNovo, setOpenNovo] = useState(false);
  const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);

  const meusAgendamentos = [
    {
      id: 1,
      profissional: "Carlos Barber",
      servico: "Corte Masculino",
      data: "21/01/2026",
      hora: "09:00",
      status: "Confirmado",
    },
    {
      id: 2,
      profissional: "Eldocarmo",
      servico: "Barba Completa",
      data: "23/01/2026",
      hora: "14:00",
      status: "Pendente",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Confirmado":
        return "bg-green-600/20 text-green-800";
      case "Pendente":
        return "bg-amber-400/20 text-amber-700";
      case "Concluído":
        return "bg-blue-500/20 text-blue-700";
      case "Cancelado":
        return "bg-red-500/20 text-red-700";
      default:
        return "bg-stone-200 text-stone-700";
    }
  };

  const agendamentosFiltrados = meusAgendamentos.filter((item) => {
    const matchBusca =
      item.profissional.toLowerCase().includes(busca.toLowerCase()) ||
      item.servico.toLowerCase().includes(busca.toLower());

    const matchStatus = filtroStatus ? item.status === filtroStatus : true;

    return matchBusca && matchStatus;
  });

  const abrirDetalhes = (item) => {
    setAgendamentoSelecionado(item);
    setOpenDetalhes(true);
  };

  return (
    <>
      <title>Meus Agendamentos | Eldocarmo Barbershop</title>

      <ClienteLayout title="Meus Agendamentos">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col lg:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por serviço ou profissional..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="p-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full lg:flex-1"
          />

          <select
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
            className="p-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
          >
            <option value="">Todos os status</option>
            <option>Confirmado</option>
            <option>Pendente</option>
            <option>Concluído</option>
            <option>Cancelado</option>
          </select>

          <button
            onClick={() => setOpenNovo(true)}
            className="px-5 py-3 cursor-pointer bg-amber-400 hover:bg-amber-500 text-stone-900 rounded-lg font-semibold flex items-center gap-2"
          >
            <i className="fas fa-calendar-plus"></i> Novo Agendamento
          </button>
        </div>

        {/* LISTA DE AGENDAMENTOS */}
        <div className="flex flex-col gap-4">
          {agendamentosFiltrados.map((item) => (
            <div
              key={item.id}
              className="bg-stone-50 border border-stone-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-stone-800">{item.servico}</p>
                  <p className="text-stone-500 text-sm">{item.profissional}</p>
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

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => abrirDetalhes(item)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1 text-sm"
                >
                  <i className="fas fa-eye"></i> Ver Detalhes
                </button>
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
          {agendamentoSelecionado && (
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-6">
                <h2 className="text-xl font-bold text-stone-800">
                  {agendamentoSelecionado.servico}
                </h2>
                <p className="text-stone-500">Serviço</p>
                <span
                  className={`inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold ${getStatusStyle(agendamentoSelecionado.status)}`}
                >
                  {agendamentoSelecionado.status}
                </span>
              </div>

              <div className="bg-white border border-stone-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-stone-500">Profissional</p>
                  <p className="font-semibold text-stone-800">
                    {agendamentoSelecionado.profissional}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-stone-500">Data</p>
                  <p className="font-semibold text-stone-800">
                    {agendamentoSelecionado.data}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-stone-500">Horário</p>
                  <p className="font-semibold text-stone-800">
                    {agendamentoSelecionado.hora}
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setOpenDetalhes(false)}
                  className="px-6 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </Modal>

        {/* MODAL NOVO AGENDAMENTO */}
        <Modal
          isOpen={openNovo}
          onClose={() => setOpenNovo(false)}
          title="Novo Agendamento"
          icon="fas fa-calendar-plus"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-stone-800">
                Novo Agendamento
              </h2>
              <p className="text-stone-500 text-sm mt-1">
                Preencha os dados abaixo para agendar o atendimento
              </p>
            </div>

            <form className="grid gap-6 md:grid-cols-2">
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
                  onClick={() => setOpenNovo(false)}
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
      </ClienteLayout>
    </>
  );
}
