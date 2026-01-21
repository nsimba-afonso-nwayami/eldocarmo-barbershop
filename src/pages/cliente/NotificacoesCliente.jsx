import { useState } from "react";
import ClienteLayout from "./components/ClienteLayout";

export default function NotificacoesCliente() {
  // Estados dos switches
  const [agendamentos, setAgendamentos] = useState(true);
  const [promocoes, setPromocoes] = useState(true);
  const [mensagens, setMensagens] = useState(true);

  // Notificações dummy
  const notificacoes = [
    {
      id: 1,
      tipo: "Agendamento",
      descricao: "Seu agendamento foi confirmado para 21/01/2026 às 14:00.",
      data: "18/01/2026",
      icone: "fas fa-calendar-check",
      cor: "text-amber-400",
    },
    {
      id: 2,
      tipo: "Promoção",
      descricao: "Desconto de 20% em cortes masculinos neste fim de semana!",
      data: "19/01/2026",
      icone: "fas fa-tag",
      cor: "text-green-500",
    },
    {
      id: 3,
      tipo: "Mensagem",
      descricao: "Carlos Barber respondeu à sua dúvida sobre horários.",
      data: "20/01/2026",
      icone: "fas fa-envelope",
      cor: "text-blue-500",
    },
  ];

  return (
    <>
      <title>Notificações | Eldocarmo Barbershop</title>

      <ClienteLayout title="Notificações">
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
                  Receba alertas sobre seus agendamentos
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
                  className={`w-11 h-6 rounded-full transition-colors ${agendamentos ? "bg-amber-400" : "bg-stone-200"}`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${agendamentos ? "translate-x-5" : "translate-x-0"}`}
                ></div>
              </label>
            </div>

            {/* Promoções */}
            <div className="flex justify-between items-center border-b border-stone-200 pb-3">
              <div>
                <p className="font-medium text-stone-800">
                  Notificações de Promoções
                </p>
                <p className="text-sm text-stone-500">
                  Receba novidades e descontos especiais
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={promocoes}
                  onChange={() => setPromocoes(!promocoes)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${promocoes ? "bg-amber-400" : "bg-stone-200"}`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${promocoes ? "translate-x-5" : "translate-x-0"}`}
                ></div>
              </label>
            </div>

            {/* Mensagens */}
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-stone-800">
                  Notificações de Mensagens
                </p>
                <p className="text-sm text-stone-500">
                  Receba respostas e avisos da barbearia
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={mensagens}
                  onChange={() => setMensagens(!mensagens)}
                />
                <div
                  className={`w-11 h-6 rounded-full transition-colors ${mensagens ? "bg-amber-400" : "bg-stone-200"}`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${mensagens ? "translate-x-5" : "translate-x-0"}`}
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
      </ClienteLayout>
    </>
  );
}
