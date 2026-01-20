import ProfissionalLayout from "./components/ProfissionalLayout";
import { Link } from "react-router-dom";

export default function DashboardProfissional() {
  // Dados dummy
  const agendamentosHoje = [
    { cliente: "João Pereira", servico: "Corte Masculino", hora: "09:00" },
    { cliente: "Carlos Mendes", servico: "Barba Completa", hora: "11:30" },
    { cliente: "André Silva", servico: "Corte + Barba", hora: "15:00" },
  ];

  return (
    <>
      <title>Dashboard Profissional | Eldocarmo Barbershop</title>

      <ProfissionalLayout title="Dashboard Profissional">
        {/* RESUMO RÁPIDO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-stone-500">Agendamentos Hoje</p>
                <h3 className="text-2xl font-bold text-neutral-900">
                  {agendamentosHoje.length}
                </h3>
              </div>
              <i className="fas fa-calendar-day text-amber-400 text-2xl"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-stone-500">Clientes Atendidos</p>
                <h3 className="text-2xl font-bold text-neutral-900">32</h3>
              </div>
              <i className="fas fa-users text-amber-400 text-2xl"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-stone-500">Notificações</p>
                <h3 className="text-2xl font-bold text-neutral-900">5</h3>
              </div>
              <i className="fas fa-bell text-amber-400 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* PRÓXIMOS AGENDAMENTOS E AÇÕES RÁPIDAS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* PRÓXIMOS AGENDAMENTOS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-stone-800 mb-4">
              Próximos Agendamentos
            </h2>

            <ul className="divide-y divide-stone-200">
              {agendamentosHoje.map((agendamento, idx) => (
                <li key={idx} className="py-3 flex justify-between">
                  <div>
                    <p className="font-medium text-neutral-900">
                      {agendamento.cliente}
                    </p>
                    <p className="text-sm text-stone-500">
                      {agendamento.servico} • {agendamento.hora}
                    </p>
                  </div>
                  <span className="text-sm text-stone-500">Hoje</span>
                </li>
              ))}
            </ul>

            <Link
              to="/dashboard/profissional/agendamentos"
              className="mt-4 inline-block text-sm font-semibold text-amber-400 hover:text-amber-500"
            >
              Ver todos os agendamentos →
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
                  <p className="font-medium text-neutral-900">Meu Perfil</p>
                  <p className="text-sm text-stone-500">
                    Atualize suas informações pessoais
                  </p>
                </div>
                <Link
                  to="/dashboard/profissional/perfil"
                  className="px-3 py-1 text-sm bg-amber-400 hover:bg-amber-500 text-stone-900 rounded-lg font-semibold"
                >
                  Editar
                </Link>
              </li>

              <li className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-neutral-900">Galeria</p>
                  <p className="text-sm text-stone-500">
                    Atualize fotos e serviços realizados
                  </p>
                </div>
                <Link
                  to="/dashboard/profissional/galeria"
                  className="px-3 py-1 text-sm bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg font-semibold"
                >
                  Gerenciar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </ProfissionalLayout>
    </>
  );
}
