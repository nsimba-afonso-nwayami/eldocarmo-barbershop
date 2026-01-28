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
      barbeiro: "Carlos",
      data: "20/01/2026",
      hora: "09:00",
    },
    {
      id: 5,
      nome: "Lucas Fernandes",
      servico: "Corte Masculino",
      barbeiro: "Miguel",
      data: "22/01/2026",
      hora: "09:30",
    },
    {
      id: 8,
      nome: "Bianca Rocha",
      servico: "Corte + Penteado",
      barbeiro: "Miguel",
      data: "23/01/2026",
      hora: "10:00",
    },
    {
      id: 2,
      nome: "Carlos Mendes",
      servico: "Barba",
      barbeiro: "André",
      data: "20/01/2026",
      hora: "10:30",
    },
    {
      id: 4,
      nome: "Mariana Costa",
      servico: "Corte Feminino",
      barbeiro: "Carlos",
      data: "21/01/2026",
      hora: "11:00",
    },
    {
      id: 6,
      nome: "Fernanda Lima",
      servico: "Penteado",
      barbeiro: "André",
      data: "22/01/2026",
      hora: "13:00",
    },
    {
      id: 3,
      nome: "André Silva",
      servico: "Corte + Barba",
      barbeiro: "Miguel",
      data: "21/01/2026",
      hora: "14:00",
    },
    {
      id: 9,
      nome: "Pedro Alves",
      servico: "Corte Masculino",
      barbeiro: "André",
      data: "24/01/2026",
      hora: "14:30",
    },
    {
      id: 7,
      nome: "Rafael Gomes",
      servico: "Barba",
      barbeiro: "Carlos",
      data: "23/01/2026",
      hora: "15:30",
    },
  ];

  return (
    <>
      <title>Horários Marcados | Eldocarmo Barbershop</title>

      {/* Header */}
      <Header />

      {/* INTRODUÇÃO */}
      <section className="py-10 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-amber-400 text-stone-50">
            Horários Marcados
          </span>
        </div>
      </section>

      {/* PESQUISA */}
      <section className="py-6 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <form className="bg-stone-200 p-4 rounded-2xl shadow-md flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Pesquisar por nome do cliente"
              className="flex-1 p-3 rounded-lg bg-stone-50 border border-stone-300 focus:outline-none focus:border-amber-400"
            />

            {/* FILTRO DE BARBEIROS */}
            <select className="p-3 rounded-lg bg-stone-50 border border-stone-300 focus:outline-none focus:border-amber-400">
              <option value="">Todos os barbeiros</option>
              <option value="Carlos">Carlos</option>
              <option value="André">André</option>
              <option value="Miguel">Miguel</option>
            </select>

            <button
              type="submit"
              className="px-6 py-3 cursor-pointer rounded-lg bg-amber-400 hover:bg-amber-500 font-semibold text-stone-50 transition"
            >
              Pesquisar
            </button>
          </form>
        </div>
      </section>

      {/* LISTA DE HORÁRIOS */}
      <section className="py-8 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-4">
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
                    Barbeiro:{" "}
                    <span className="font-medium text-stone-700">
                      {item.barbeiro}
                    </span>
                  </p>

                  <p className="text-stone-500 text-sm">
                    {item.data} • {item.hora}
                  </p>
                </div>

                <i className="fas fa-user-clock text-amber-400 text-2xl"></i>
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
