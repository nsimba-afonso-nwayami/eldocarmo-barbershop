import AdminLayout from "./components/AdminLayout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

const CHART_COLORS = ["#f59e0b", "#d97706", "#92400e", "#78716c", "#44403c"];

export default function RelatoriosAdmin() {
  // DADOS MOCK (API depois)
  const faturamentoMensal = [
    { mes: "Jan", total: 450000 },
    { mes: "Fev", total: 380000 },
    { mes: "Mar", total: 520000 },
    { mes: "Abr", total: 610000 },
    { mes: "Mai", total: 570000 },
  ];

  const agendamentosPorMes = [
    { mes: "Jan", total: 120 },
    { mes: "Fev", total: 98 },
    { mes: "Mar", total: 150 },
    { mes: "Abr", total: 170 },
    { mes: "Mai", total: 140 },
  ];

  const servicosMaisUsados = [
    { name: "Corte", value: 420 },
    { name: "Barba", value: 310 },
    { name: "Corte + Barba", value: 260 },
    { name: "Outros", value: 90 },
  ];

  const profissionaisAgendamentos = [
    { nome: "Carlos", total: 180 },
    { nome: "João", total: 150 },
    { nome: "André", total: 120 },
    { nome: "Miguel", total: 90 },
  ];

  const profissionaisFaturamento = [
    { nome: "Carlos", total: 320000 },
    { nome: "João", total: 280000 },
    { nome: "André", total: 210000 },
    { nome: "Miguel", total: 160000 },
  ];

  return (
    <>
      <title>Relatórios | Eldocarmo Barbershop</title>

      <AdminLayout title="Relatórios">
        {/* CARDS RESUMO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <ResumoCard
            label="Faturamento Mensal"
            value="Kz 570.000"
            icon="fa-money-bill-wave"
          />
          <ResumoCard
            label="Agendamentos Totais"
            value="678"
            icon="fa-calendar-check"
          />
          <ResumoCard label="Clientes Ativos" value="148" icon="fa-users" />
          <ResumoCard
            label="Ticket Médio"
            value="Kz 6.200"
            icon="fa-chart-line"
          />
        </div>

        {/* GRÁFICOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* FATURAMENTO MENSAL */}
          <Card title="Faturamento Mensal (Kz)">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={faturamentoMensal}>
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip formatter={(v) => `Kz ${v.toLocaleString()}`} />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke={CHART_COLORS[0]}
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* AGENDAMENTOS POR MÊS */}
          <Card title="Agendamentos por Mês">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={agendamentosPorMes}>
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill={CHART_COLORS[1]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* SERVIÇOS MAIS REALIZADOS */}
          <Card title="Serviços Mais Realizados">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={servicosMaisUsados}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {servicosMaisUsados.map((_, index) => (
                    <Cell
                      key={index}
                      fill={CHART_COLORS[index % CHART_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* PROFISSIONAIS COM MAIS AGENDAMENTOS */}
          <Card title="Profissionais com Mais Agendamentos">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={profissionaisAgendamentos} layout="vertical">
                <XAxis type="number" />
                <YAxis dataKey="nome" type="category" />
                <Tooltip />
                <Bar dataKey="total" fill={CHART_COLORS[2]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* PROFISSIONAIS COM MAIOR FATURAMENTO */}
          <Card title="Profissionais com Maior Faturamento (Kz)">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={profissionaisFaturamento} layout="vertical">
                <XAxis type="number" />
                <YAxis dataKey="nome" type="category" />
                <Tooltip formatter={(v) => `Kz ${v.toLocaleString()}`} />
                <Bar dataKey="total" fill={CHART_COLORS[0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </AdminLayout>
    </>
  );
}

/* COMPONENTES AUXILIARES */

function ResumoCard({ label, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-stone-500">{label}</p>
          <h3 className="text-2xl font-bold text-neutral-900">{value}</h3>
        </div>
        <i className={`fas ${icon} text-amber-400 text-2xl`}></i>
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-bold text-stone-800 mb-4">{title}</h2>
      {children}
    </div>
  );
}
