import { useState } from "react";
import ProfissionalLayout from "./components/ProfissionalLayout";
import Modal from "./components/Modal";

export default function AgendamentosProfissional() {
  const [filtroStatus, setFiltroStatus] = useState("");
  const [busca, setBusca] = useState("");
  const [openDetalhes, setOpenDetalhes] = useState(false);
  const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);

  const agendamentos = [
    {
      id: 1,
      cliente: "João Pereira",
      telefone: "+244 923 456 789",
      email: "joao@email.com",
      servico: "Corte Masculino",
      data: "20/01/2026",
      hora: "09:00",
      status: "Confirmado",
    },
    {
      id: 2,
      cliente: "Carlos Mendes",
      telefone: "+244 934 222 111",
      email: "carlos@email.com",
      servico: "Barba Completa",
      data: "20/01/2026",
      hora: "11:30",
      status: "Pendente",
    },
    {
      id: 3,
      cliente: "André Silva",
      telefone: "+244 991 333 444",
      email: "andre@email.com",
      servico: "Corte + Barba",
      data: "20/01/2026",
      hora: "15:00",
      status: "Concluído",
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

  const agendamentosFiltrados = agendamentos.filter((item) => {
    const matchBusca =
      item.cliente.toLowerCase().includes(busca.toLowerCase()) ||
      item.servico.toLowerCase().includes(busca.toLowerCase());

    const matchStatus = filtroStatus ? item.status === filtroStatus : true;

    return matchBusca && matchStatus;
  });

  const abrirDetalhes = (item) => {
    setAgendamentoSelecionado(item);
    setOpenDetalhes(true);
  };

  return (
    <>
      <title>Agendamentos | Eldocarmo Barbershop</title>

      <ProfissionalLayout title="Agendamentos">
        {/* FILTROS */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col lg:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por cliente ou serviço..."
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
        </div>

        {/* LISTA */}
        <div className="flex flex-col gap-4">
          {agendamentosFiltrados.map((item) => (
            <div
              key={item.id}
              className="bg-stone-50 border border-stone-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-stone-800">
                    {item.cliente}
                  </p>
                  <p className="text-stone-500 text-sm">
                    {item.servico}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                    item.status
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
                <button
                  onClick={() => abrirDetalhes(item)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1 text-sm"
                >
                  <i className="fas fa-eye"></i> Ver Detalhes
                </button>

                <div className="flex gap-2">
                  {item.status === "Pendente" && (
                    <button className="px-4 py-1 text-sm bg-amber-400 hover:bg-amber-500 text-stone-900 rounded-lg font-semibold">
                      Confirmar
                    </button>
                  )}

                  {item.status === "Confirmado" && (
                    <button className="px-4 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold">
                      Concluir
                    </button>
                  )}

                  <button className="px-4 py-1 text-sm bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg">
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
          {agendamentoSelecionado && (
            <div className="max-w-3xl mx-auto space-y-6">
              {/* CABEÇALHO */}
              <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-6">
                <h2 className="text-xl font-bold text-stone-800">
                  {agendamentoSelecionado.cliente}
                </h2>
                <p className="text-stone-500">Cliente</p>

                <span
                  className={`inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                    agendamentoSelecionado.status
                  )}`}
                >
                  {agendamentoSelecionado.status}
                </span>
              </div>

              {/* INFORMAÇÕES */}
              <div className="bg-white border border-stone-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-stone-500">Serviço</p>
                  <p className="font-semibold text-stone-800">
                    {agendamentoSelecionado.servico}
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

                <div>
                  <p className="text-sm text-stone-500">Telefone</p>
                  <p className="font-semibold text-stone-800">
                    {agendamentoSelecionado.telefone}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <p className="text-sm text-stone-500">Email</p>
                  <p className="font-semibold text-stone-800">
                    {agendamentoSelecionado.email}
                  </p>
                </div>
              </div>

              {/* FECHAR */}
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
      </ProfissionalLayout>
    </>
  );
}
