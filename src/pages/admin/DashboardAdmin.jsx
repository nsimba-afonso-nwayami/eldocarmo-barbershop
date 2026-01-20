import AdminLayout from "./components/AdminLayout";
import { Link } from "react-router-dom";

export default function DashboardAdmin() {
  return (
    <>
      <title>Dashboard Admin | Eldocarmo Barbershop</title>

      <AdminLayout title="Dashboard Admin">
        {/* RESUMO RÁPIDO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-stone-500">Agendamentos Hoje</p>
                <h3 className="text-2xl font-bold text-neutral-900">12</h3>
              </div>
              <i className="fas fa-calendar-day text-amber-400 text-2xl"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-stone-500">Clientes Ativos</p>
                <h3 className="text-2xl font-bold text-neutral-900">148</h3>
              </div>
              <i className="fas fa-users text-amber-400 text-2xl"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-stone-500">Profissionais</p>
                <h3 className="text-2xl font-bold text-neutral-900">6</h3>
              </div>
              <i className="fas fa-user-scissors text-amber-400 text-2xl"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-stone-500">Serviços Ativos</p>
                <h3 className="text-2xl font-bold text-neutral-900">10</h3>
              </div>
              <i className="fas fa-scissors text-amber-400 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* AÇÕES PRINCIPAIS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* PRÓXIMOS AGENDAMENTOS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-stone-800 mb-4">
              Próximos Agendamentos
            </h2>

            <ul className="divide-y divide-stone-200">
              <li className="py-3 flex justify-between">
                <div>
                  <p className="font-medium text-neutral-900">João Pereira</p>
                  <p className="text-sm text-stone-500">
                    Corte Masculino • 09:00
                  </p>
                </div>
                <span className="text-sm text-stone-500">Hoje</span>
              </li>

              <li className="py-3 flex justify-between">
                <div>
                  <p className="font-medium text-neutral-900">Carlos Mendes</p>
                  <p className="text-sm text-stone-500">
                    Barba Completa • 11:30
                  </p>
                </div>
                <span className="text-sm text-stone-500">Hoje</span>
              </li>

              <li className="py-3 flex justify-between">
                <div>
                  <p className="font-medium text-neutral-900">André Silva</p>
                  <p className="text-sm text-stone-500">
                    Corte + Barba • 15:00
                  </p>
                </div>
                <span className="text-sm text-stone-500">Hoje</span>
              </li>
            </ul>

            <Link
              to="/dashboard/admin/agendamentos"
              className="mt-4 inline-block text-sm font-semibold text-amber-400 hover:text-amber-500"
            >
              Ver todos os agendamentos →
            </Link>
          </div>

          {/* SOLICITAÇÕES / AÇÕES RÁPIDAS */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-stone-800 mb-4">
              Ações Rápidas
            </h2>

            <ul className="divide-y divide-stone-200">
              <li className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-neutral-900">Novo Cliente</p>
                  <p className="text-sm text-stone-500">
                    Cadastro recente no sistema
                  </p>
                </div>
                <Link
                  to="/dashboard/admin/clientes"
                  className="px-3 py-1 text-sm bg-amber-400 hover:bg-amber-500 text-stone-900 rounded-lg font-semibold"
                >
                  Ver
                </Link>
              </li>

              <li className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-neutral-900">Novo Serviço</p>
                  <p className="text-sm text-stone-500">
                    Atualizar tabela de serviços
                  </p>
                </div>
                <Link
                  to="/dashboard/admin/servicos"
                  className="px-3 py-1 text-sm bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg font-semibold"
                >
                  Gerenciar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
