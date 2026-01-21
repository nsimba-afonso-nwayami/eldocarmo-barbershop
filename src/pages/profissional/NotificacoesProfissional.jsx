import { useState } from "react";
import ProfissionalLayout from "./components/ProfissionalLayout";

export default function NotificacoesProfissional() {
  // Estados dos switches
  const [agendamentos, setAgendamentos] = useState(true);
  const [clientes, setClientes] = useState(true);
  const [documentos, setDocumentos] = useState(false);

  // Notificações dummy
  const notificacoes = [
    {
      id: 1,
      tipo: "Agendamento",
      descricao: "Novo agendamento confirmado para 20/01/2026 às 10:00.",
      data: "18/01/2026",
      icone: "fas fa-calendar-check",
      cor: "text-amber-400",
    },
    {
      id: 2,
      tipo: "Cliente",
      descricao: "João Pereira agendou um novo serviço.",
      data: "19/01/2026",
      icone: "fas fa-user",
      cor: "text-green-500",
    },
    {
      id: 3,
      tipo: "Documento",
      descricao: "Relatório semanal de atendimentos disponível.",
      data: "15/01/2026",
      icone: "fas fa-file-alt",
      cor: "text-red-500",
    },
  ];

  return (
    <>
      <title>Notificações | Eldocarmo Barbershop</title>

      <ProfissionalLayout title="Notificações">
        {/* CONFIGURAÇÕES DE NOTIFICAÇÃO */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
          <h2 className="text-xl font-bold text-amber-400 mb-4">
            Configurações de Notificação
          </h2>
          <p className="text-stone-500 mb-6">
            Ative ou desative os tipos de notificações que deseja receber.
          </p>

          <div className="grid gap-4">
            {/* Agendamentos */}
            <div className="flex justify-between items-center border-b border-stone-200 pb-3">
              <div>
                <p className="font-medium text-stone-800">
                  Notificações de Agendamentos
                </p>
                <p className="text-sm text-stone-500">
                  Receba alertas sobre novos agendamentos
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={agendamentos}
                  onChange={() => setAgendamentos(!agendamentos)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${
                    agendamentos ? "bg-amber-400" : "bg-stone-200"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    agendamentos ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </label>
            </div>

            {/* Clientes */}
            <div className="flex justify-between items-center border-b border-stone-200 pb-3">
              <div>
                <p className="font-medium text-stone-800">
                  Notificações de Clientes
                </p>
                <p className="text-sm text-stone-500">
                  Receba alertas quando clientes fizerem agendamentos
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={clientes}
                  onChange={() => setClientes(!clientes)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${
                    clientes ? "bg-amber-400" : "bg-stone-200"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    clientes ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </label>
            </div>

            {/* Documentos */}
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-stone-800">
                  Notificações de Documentos
                </p>
                <p className="text-sm text-stone-500">
                  Receba alertas sobre relatórios e documentos
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={documentos}
                  onChange={() => setDocumentos(!documentos)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${
                    documentos ? "bg-amber-400" : "bg-stone-200"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                    documentos ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </label>
            </div>
          </div>
        </div>

        {/* LISTA DE NOTIFICAÇÕES */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-amber-400 mb-4">
            Notificações Recentes
          </h2>
          <ul className="divide-y divide-stone-200">
            {notificacoes.map((noti) => (
              <li
                key={noti.id}
                className="flex justify-between items-center py-4"
              >
                <div className="flex gap-4 items-start">
                  <i className={`${noti.icone} ${noti.cor} text-lg mt-1`}></i>
                  <div>
                    <p className="font-medium text-stone-800">{noti.tipo}</p>
                    <p className="text-stone-500 text-sm">{noti.descricao}</p>
                  </div>
                </div>
                <span className="text-sm text-stone-500">{noti.data}</span>
              </li>
            ))}
          </ul>
        </div>
      </ProfissionalLayout>
    </>
  );
}
