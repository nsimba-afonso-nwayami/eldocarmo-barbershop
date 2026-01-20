import AdminLayout from "./components/AdminLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function ClientesAdmin() {
  const [openDetalhes, setOpenDetalhes] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);

  const clientes = [
    {
      id: 1,
      nome: "João da Silva",
      email: "joao.silva@email.com",
      telefone: "+244 923456700",
      status: "Ativo",
      ultimoAgendamento: "20/01/2026",
    },
    {
      id: 2,
      nome: "Maria Oliveira",
      email: "maria.oliveira@email.com",
      telefone: "+244 923456701",
      status: "Ativo",
      ultimoAgendamento: "21/01/2026",
    },
    {
      id: 3,
      nome: "Carlos Mendes",
      email: "carlos.mendes@email.com",
      telefone: "+244 923456702",
      status: "Inativo",
      ultimoAgendamento: "10/01/2026",
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
      <title>Clientes | Eldocarmo Barbershop</title>

      <AdminLayout title="Clientes">
        {/* FILTROS DE PESQUISA */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col lg:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por nome, email ou telefone..."
            className="p-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full lg:flex-1"
          />

          <select className="p-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm">
            <option>Status</option>
            <option>Ativo</option>
            <option>Inativo</option>
          </select>
        </div>

        {/* LISTA DE CLIENTES */}
        <div className="flex flex-col gap-4">
          {clientes.map((cliente) => (
            <div
              key={cliente.id}
              className="bg-stone-50 border border-stone-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-stone-800">{cliente.nome}</p>
                  <p className="text-stone-500 text-sm">
                    {cliente.email} • {cliente.telefone}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                    cliente.status,
                  )}`}
                >
                  {cliente.status}
                </span>
              </div>

              <p className="text-stone-600 text-sm">
                Último Agendamento: <strong>{cliente.ultimoAgendamento}</strong>
              </p>

              {/* AÇÕES */}
              <div className="flex justify-between items-center mt-4">
                {/* VER DETALHES */}
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
                    Deletar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DETALHES DO CLIENTE */}
        <Modal
          isOpen={openDetalhes}
          onClose={() => setOpenDetalhes(false)}
          title="Detalhes do Cliente"
          icon="fas fa-user"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-6">
              <h2 className="text-xl font-bold text-stone-800">
                João da Silva
              </h2>
              <p className="text-stone-500">Cliente • Ativo</p>
              <span className="inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold bg-green-600/20 text-green-800">
                Ativo
              </span>
            </div>

            <div className="bg-white border border-stone-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-stone-500">Email</p>
                <p className="font-semibold text-stone-800">
                  joao.silva@email.com
                </p>
              </div>
              <div>
                <p className="text-sm text-stone-500">Telefone</p>
                <p className="font-semibold text-stone-800">+244 923456700</p>
              </div>
              <div>
                <p className="text-sm text-stone-500">Último Agendamento</p>
                <p className="font-semibold text-stone-800">20/01/2026</p>
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

        {/* MODAL EDITAR CLIENTE */}
        <Modal
          isOpen={openEditar}
          onClose={() => setOpenEditar(false)}
          title="Editar Cliente"
          icon="fas fa-user-edit"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <form className="grid gap-6 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="block text-stone-700 font-medium mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  defaultValue="João da Silva"
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="joao.silva@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  defaultValue="+244 923456700"
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

              {/* BOTÕES */}
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
      </AdminLayout>
    </>
  );
}
