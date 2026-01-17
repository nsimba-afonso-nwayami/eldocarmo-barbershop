import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function NotFound() {
  return (
    <>
      <title>Página não encontrada | Eldocarmo Barbershop</title>

      {/* Header */}
      <Header />

      {/* 404 */}
      {/* 404 */}
      <section className="min-h-[80vh] flex items-center justify-center bg-linear-to-r from-stone-900 to-stone-800 px-6">
        <div className="max-w-3xl text-center">
          <span className="inline-block mb-6 px-5 py-2 text-xs font-semibold rounded-full bg-amber-400 text-stone-900">
            Erro 404
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-stone-50 mb-4">
            Página não encontrada
          </h1>

          <p className="text-stone-300 text-base md:text-lg mb-8">
            Ops! A página que você está procurando não existe ou foi movida. Mas
            não se preocupe, seu estilo continua garantido.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/"
              className="px-8 py-3 bg-amber-400 text-stone-900 font-bold uppercase rounded-lg text-base shadow-lg hover:bg-amber-500 transition transform hover:-translate-y-1"
            >
              Voltar para Home
            </Link>

            <Link
              to="/agendar"
              className="px-8 py-3 border-2 border-amber-400 text-amber-400 font-bold uppercase rounded-lg text-base hover:bg-amber-400 hover:text-stone-900 transition transform hover:-translate-y-1"
            >
              Agendar Corte
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
