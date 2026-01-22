import { Link, useNavigate } from "react-router-dom";

export default function SidebarAdmin({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <aside
        className={`
          bg-stone-800
          w-64 fixed top-0 left-0 h-screen p-6
          transition-transform duration-300 overflow-y-auto
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
          md:translate-x-0
          z-50 flex flex-col
        `}
      >
        {/* Botão fechar mobile */}
        <button
          className="md:hidden absolute top-4 right-4 text-2xl text-stone-50 hover:text-amber-400 transition"
          onClick={() => setSidebarOpen(false)}
          title="Fechar Menu"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Cabeçalho */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-1 tracking-wide mt-6 md:mt-0 text-stone-50">
            Eldo<span className="text-amber-400">Carmo</span>
          </h1>
          <p className="text-sm text-stone-400 mb-8 truncate">
            Painel Administrativo
          </p>

          {/* Navegação */}
          <nav className="space-y-3 text-sm">
            <Link
              to="/dashboard/admin"
              className="block p-3 rounded-lg text-stone-50 hover:bg-stone-700 transition font-medium"
            >
              <i className="fas fa-gauge-high mr-3 text-amber-400"></i>
              Dashboard
            </Link>

            <Link
              to="/dashboard/admin/agendamentos"
              className="block p-3 rounded-lg text-stone-50 hover:bg-stone-700 transition font-medium"
            >
              <i className="fas fa-calendar-check mr-3 text-amber-400"></i>
              Agendamentos
            </Link>

            <Link
              to="/dashboard/admin/clientes"
              className="block p-3 rounded-lg text-stone-50 hover:bg-stone-700 transition font-medium"
            >
              <i className="fas fa-users mr-3 text-amber-400"></i>
              Clientes
            </Link>

            <Link
              to="/dashboard/admin/profissionais"
              className="block p-3 rounded-lg text-stone-50 hover:bg-stone-700 transition font-medium"
            >
              <i className="fas fa-user-group mr-3 text-amber-400"></i>
              Profissionais
            </Link>

            <Link
              to="/dashboard/admin/servicos"
              className="block p-3 rounded-lg text-stone-50 hover:bg-stone-700 transition font-medium"
            >
              <i className="fas fa-scissors mr-3 text-amber-400"></i>
              Serviços
            </Link>

            <Link
              to="/dashboard/admin/galeria"
              className="block p-3 rounded-lg text-stone-50 hover:bg-stone-700 transition font-medium"
            >
              <i className="fas fa-images mr-3 text-amber-400"></i>
              Galeria
            </Link>

            <Link
              to="/dashboard/admin/relatorios"
              className="block p-3 rounded-lg text-stone-50 hover:bg-stone-700 transition font-medium"
            >
              <i className="fas fa-chart-line mr-3 text-amber-400"></i>
              Relatórios
            </Link>

            <Link
              to="/dashboard/admin/perfil"
              className="block p-3 rounded-lg text-stone-50 hover:bg-stone-700 transition font-medium"
            >
              <i className="fas fa-user mr-3 text-amber-400"></i>
              Meu perfil
            </Link>
          </nav>
        </div>

        {/* Logout */}
        <div className="pt-6 border-t border-stone-700">
          <button
            onClick={handleLogout}
            className="flex items-center cursor-pointer w-full p-3 rounded-lg text-stone-50 hover:bg-red-500/20 transition font-semibold"
          >
            <i className="fas fa-sign-out-alt mr-3"></i>
            Sair
          </button>
        </div>
      </aside>

      {/* Overlay mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
