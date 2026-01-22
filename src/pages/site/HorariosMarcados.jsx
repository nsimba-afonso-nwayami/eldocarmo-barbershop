import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function HorariosMarcados() {
  // DADOS MOCK (depois vem da API)
  const agendamentos = [
    {
      id: 1,
      nome: "João Pereira",
      servico: "Corte Masculino",
      data: "20/01/2026",
      hora: "09:00",
    },
    {
      id: 2,
      nome: "Carlos Mendes",
      servico: "Barba",
      data: "20/01/2026",
      hora: "10:30",
    },
    {
      id: 3,
      nome: "André Silva",
      servico: "Corte + Barba",
      data: "21/01/2026",
      hora: "14:00",
    },
  ];

  return (
    <>
      <title>Horários Marcados | Eldocarmo Barbershop</title>

      {/* Header */}
      <Header />

      {/* INTRODUÇÃO */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-amber-400 text-stone-50">
            Agendamentos
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Horários Marcados
          </h1>

          <p className="text-lg text-stone-500">
            Consulte os horários já agendados e acompanhe seus atendimentos na
            Eldocarmo Barbershop.
          </p>
        </div>
      </section>

      {/* PESQUISA */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <form className="bg-stone-200 p-6 rounded-2xl shadow-md flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Pesquisar por nome do cliente"
              className="flex-1 p-3 rounded-lg bg-stone-50 border border-stone-300 focus:outline-none focus:border-amber-400"
            />

            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-500 font-semibold text-stone-50 transition"
            >
              Pesquisar
            </button>
          </form>
        </div>
      </section>

      {/* LISTA DE HORÁRIOS */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-800 text-center mb-12">
            Lista de <span className="text-amber-400">Agendamentos</span>
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {agendamentos.map((item) => (
              <div
                key={item.id}
                className="bg-stone-50 border border-stone-200 rounded-xl p-6 flex justify-between items-center hover:shadow-lg transition"
              >
                <div>
                  <h3 className="text-xl font-semibold text-stone-800">
                    {item.nome}
                  </h3>
                  <p className="text-stone-500 text-sm">{item.servico}</p>
                  <p className="text-stone-500 text-sm">
                    {item.data} • {item.hora}
                  </p>
                </div>

                <i className="fas fa-clock text-amber-400 text-2xl"></i>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
