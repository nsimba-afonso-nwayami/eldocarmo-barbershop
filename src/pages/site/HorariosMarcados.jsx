import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";

export default function HorariosMarcados() {
  const [mostrarPesquisa, setMostrarPesquisa] = useState(false);
  const [horaAtual, setHoraAtual] = useState("");

  // RELÓGIO DIGITAL
  useEffect(() => {
    const interval = setInterval(() => {
      const agora = new Date();
      const hora = agora.toLocaleTimeString("pt-PT", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setHoraAtual(hora);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
  ];

  return (
    <>
      <title>Horários Marcados | Eldocarmo Barbershop</title>

      <Header />

      {/* TOPO: RELÓGIO + PESQUISA */}
      <section className="py-23 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* RELÓGIO */}
          <div className="bg-stone-800 text-amber-400 px-6 py-3 rounded-xl shadow-md font-mono text-2xl tracking-widest">
            {horaAtual}
          </div>

          {/* BOTÃO PESQUISA */}
          <button
            onClick={() => setMostrarPesquisa(!mostrarPesquisa)}
            className="w-12 h-12 cursor-pointer flex items-center justify-center rounded-full bg-amber-400 hover:bg-amber-500 text-stone-50 shadow-md transition"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </section>

      {/* FORM DE PESQUISA (ANIMADO) */}
      <section
        className={`overflow-hidden transition-all duration-500 ease-in-out bg-stone-50
         ${mostrarPesquisa ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
      `}
      >
        <div className="max-w-4xl mx-auto px-6">
          <form className="bg-stone-200 p-4 rounded-2xl shadow-md flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Pesquisar por nome do cliente"
              className="flex-1 p-3 rounded-lg bg-stone-50 border border-stone-300 focus:outline-none focus:border-amber-400"
            />

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
              Filtrar
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

      <Footer />
    </>
  );
}
