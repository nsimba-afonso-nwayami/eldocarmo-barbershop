import { Link } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";

export default function NotFoundAdmin() {
  return (
    <>
      <title>Página não encontrada | Dashboard Admin</title>

      <AdminLayout title="Página não encontrada">
        <main className="flex flex-col items-center justify-center min-h-[70vh] bg-stone-50 px-6 text-center py-24">
          {/* Ícone animado */}
          <i className="fa-solid fa-user text-amber-400 text-5xl mb-4 fa-beat"></i>

          {/* Número 404 */}
          <h1 className="text-6xl font-extrabold text-amber-400 mb-4">404</h1>

          {/* Título */}
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-2">
            Oops! Página não encontrada
          </h2>

          {/* Descrição */}
          <p className="text-stone-500 mb-6 max-w-md text-sm md:text-base">
            A página que você está tentando acessar não existe ou foi movida.
            Verifique o endereço ou volte para o dashboard.
          </p>

          {/* Botão */}
          <Link
            to="/dashboard/admin"
            className="inline-block px-6 py-3 bg-amber-400 text-stone-50 font-semibold rounded-lg hover:bg-amber-500 transition cursor-pointer text-sm"
          >
            Voltar para o Dashboard
          </Link>
        </main>
      </AdminLayout>
    </>
  );
}
