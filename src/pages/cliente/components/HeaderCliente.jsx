import { Link } from "react-router-dom";

export default function HeaderCliente({ sidebarOpen, setSidebarOpen, title }) {
  return (
    <header
      className="
        bg-stone-800
        fixed top-0 right-0 left-0 md:left-64
        h-16 flex items-center justify-between
        px-4 sm:px-6
        z-30
      "
    >
      <button
        className="md:hidden text-2xl text-stone-50 hover:text-amber-400 transition"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>

      <h2 className="text-lg sm:text-xl font-bold text-stone-50">{title}</h2>

      <div className="flex items-center gap-4">
        <Link
          to="/dashboard/cliente/notificacoes"
          className="relative text-xl text-stone-50 hover:text-amber-400 transition"
        >
          <i className="fas fa-bell"></i>
          <span className="absolute -top-1 -right-1 bg-amber-400 text-stone-900 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            3
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-sm text-stone-200 hidden sm:block">Cliente</span>
          <Link
            to="/dashboard/cliente/perfil"
            className="w-9 h-9 bg-amber-400 rounded-full flex items-center justify-center"
          >
            <i className="fas fa-user text-stone-900"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}
