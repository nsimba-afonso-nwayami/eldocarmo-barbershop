import ClienteLayout from "./components/ClienteLayout";
import { Link } from "react-router-dom";

export default function DashboardCliente() {
  // Agendamentos do dia (outros clientes)
  const listaAgendamentos = [
    {
      cliente: "João Pereira",
      servico: "Corte Masculino",
      profissional: "Carlos Barber",
      hora: "09:00",
    },
    {
      cliente: "André Silva",
      servico: "Barba Completa",
      profissional: "Eldocarmo",
      hora: "11:30",
    },
    {
      cliente: "Maria Santos",
      servico: "Corte + Barba",
      profissional: "Paulo Hair",
      hora: "15:00",
    },
  ];

  return (
    <>
      <title>Dashboard Cliente | Eldocarmo Barbershop</title>

      <ClienteLayout title="Dashboard Cliente">
        {/* RESUMO RÁPIDO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-stone-500">Agendamentos Hoje</p>
                <h3 className="text-2xl font-bold text-neutral-900">
                  {listaAgendamentos.length}
                </h3>
              </div>
              <i className="fas fa-calendar-day text-amber-400 text-2xl"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-stone-500">Meus Agendamentos</p>
                <h3 className="text-2xl font-bold text-neutral-900">2</h3>
              </div>
              <i className="fas fa-calendar-check text-amber-400 text-2xl"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-stone-500">Notificações</p>
                <h3 className="text-2xl font-bold text-neutral-900">3</h3>
              </div>
              <i className="fas fa-bell text-amber-400 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* LISTA DE AGENDAMENTOS + AÇÕES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* LISTA DE AGENDAMENTOS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-stone-800 mb-4">
              Lista de Agendamentos
            </h2>

            <ul className="divide-y divide-stone-200">
              {listaAgendamentos.map((agendamento, idx) => (
                <li key={idx} className="py-3 flex justify-between">
                  <div>
                    <p className="font-medium text-neutral-900">
                      {agendamento.cliente}
                    </p>
                    <p className="text-sm text-stone-500">
                      {agendamento.servico} • {agendamento.profissional}
                    </p>
                  </div>
                  <span className="text-sm text-stone-500">
                    {agendamento.hora}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/dashboard/cliente/agendamentos"
              className="mt-4 inline-block text-sm font-semibold text-amber-400 hover:text-amber-500"
            >
              Ver agenda completa →
            </Link>
          </div>

          {/* AÇÕES RÁPIDAS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-stone-800 mb-4">
              Ações Rápidas
            </h2>

            <ul className="divide-y divide-stone-200">
              <li className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-neutral-900">
                    Meus Agendamentos
                  </p>
                  <p className="text-sm text-stone-500">
                    Veja e gerencie seus agendamentos
                  </p>
                </div>
                <Link
                  to="/dashboard/cliente/agendamentos"
                  className="px-3 py-1 text-sm bg-amber-400 hover:bg-amber-500 text-stone-900 rounded-lg font-semibold"
                >
                  Acessar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </ClienteLayout>
    </>
  );
}
