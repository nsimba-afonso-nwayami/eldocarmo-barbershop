import AdminLayout from "./components/AdminLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function ServicosAdmin() {
  const [openNovo, setOpenNovo] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [openDetalhes, setOpenDetalhes] = useState(false);

  const servicos = [
    {
      id: 1,
      nome: "Corte Masculino",
      duracao: "30 min",
      preco: "15.000 Kz",
      status: "Ativo",
    },
    {
      id: 2,
      nome: "Barba Completa",
      duracao: "20 min",
      preco: "10.000 Kz",
      status: "Ativo",
    },
    {
      id: 3,
      nome: "Corte + Barba",
      duracao: "50 min",
      preco: "22.000 Kz",
      status: "Inativo",
    },
    {
      id: 4,
      nome: "Tratamento Capilar",
      duracao: "60 min",
      preco: "25.000 Kz",
      status: "Ativo",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Ativo":
        return "bg-green-600/20 text-green-800";
      case "Inativo":
        return "bg-stone-200 text-stone-700";
      default:
        return "bg-stone-200 text-stone-700";
    }
  };

  return (
    <>
      <title>Serviços | Eldocarmo Barbershop</title>

      <AdminLayout title="Serviços">
        {/* FILTROS E BOTÃO NOVO */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col lg:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar serviço por nome..."
            className="p-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full lg:flex-1"
          />
          <select className="p-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm">
            <option>Status</option>
            <option>Ativo</option>
            <option>Inativo</option>
          </select>

          <button
            onClick={() => setOpenNovo(true)}
            className="px-5 py-3 cursor-pointer bg-amber-400 hover:bg-amber-500 text-stone-900 rounded-lg font-semibold flex items-center gap-2"
          >
            <i className="fas fa-plus"></i>
            Novo Serviço
          </button>
        </div>

        {/* LISTA DE SERVIÇOS */}
        <div className="flex flex-col gap-4">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="bg-stone-50 border border-stone-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-stone-800">{servico.nome}</p>
                  <p className="text-stone-500 text-sm">
                    Duração: {servico.duracao} • Preço: {servico.preco}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                    servico.status,
                  )}`}
                >
                  {servico.status}
                </span>
              </div>

              {/* AÇÕES */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setOpenDetalhes(true)}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer flex items-center gap-1"
                >
                  <i className="fas fa-eye"></i> Ver Detalhes
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => setOpenEditar(true)}
                    className="px-4 py-1 text-sm bg-amber-400 hover:bg-amber-500 text-stone-900 rounded-lg cursor-pointer font-semibold"
                  >
                    Editar
                  </button>
                  <button className="px-4 py-1 text-sm bg-red-500 hover:bg-red-600 text-stone-50 rounded-lg cursor-pointer font-semibold">
                    Desativar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DETALHES */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes do Serviço"
          icon="fas fa-concierge-bell"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-6">
              <h2 className="text-xl font-bold text-stone-800">
                Corte Masculino
              </h2>
              <p className="text-stone-500">Serviço • Ativo</p>
              <span className="inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold bg-green-600/20 text-green-800">
                Ativo
              </span>
            </div>

            <div className="bg-white border border-stone-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-stone-500">Duração</p>
                <p className="font-semibold text-stone-800">30 min</p>
              </div>
              <div>
                <p className="text-sm text-stone-500">Preço</p>
                <p className="font-semibold text-stone-800">15.000 Kz</p>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setOpenDetalhes(false)}
                className="px-6 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </Modal>

        {/* MODAL EDITAR */}
        <Modal
          isOpen={openEditar}
          onClose={() => setOpenEditar(false)}
          title="Editar Serviço"
          icon="fas fa-edit"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <form className="grid gap-6 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="block text-stone-700 font-medium mb-1">
                  Nome do Serviço
                </label>
                <input
                  type="text"
                  defaultValue="Corte Masculino"
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Duração
                </label>
                <input
                  type="text"
                  defaultValue="30 min"
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Preço
                </label>
                <input
                  type="text"
                  defaultValue="15.000 Kz"
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Status
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none">
                  <option>Ativo</option>
                  <option>Inativo</option>
                </select>
              </div>

              <div className="md:col-span-2 flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setOpenEditar(false)}
                  className="px-6 py-3 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-stone-900 font-semibold rounded-lg cursor-pointer"
                >
                  Salvar Alterações
                </button>
              </div>
            </form>
          </div>
        </Modal>

        {/* MODAL NOVO SERVIÇO */}
        <Modal
          isOpen={openNovo}
          onClose={() => setOpenNovo(false)}
          title="Novo Serviço"
          icon="fas fa-plus"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <form className="grid gap-6 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="block text-stone-700 font-medium mb-1">
                  Nome do Serviço
                </label>
                <input
                  type="text"
                  placeholder="Digite o nome do serviço"
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Duração
                </label>
                <input
                  type="text"
                  placeholder="Ex: 30 min"
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Preço
                </label>
                <input
                  type="text"
                  placeholder="Ex: 15.000 Kz"
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Status
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none">
                  <option>Ativo</option>
                  <option>Inativo</option>
                </select>
              </div>

              <div className="md:col-span-2 flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setOpenNovo(false)}
                  className="px-6 py-3 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-stone-900 font-semibold rounded-lg cursor-pointer"
                >
                  Cadastrar Serviço
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </AdminLayout>
    </>
  );
}
