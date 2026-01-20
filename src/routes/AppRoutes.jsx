import { Routes, Route } from "react-router-dom";
//Site
import Home from "../pages/site/Home";
import Sobre from "../pages/site/Sobre";
import Agendar from "../pages/site/Agendar";
import Servicos from "../pages/site/Servicos";
import Galeria from "../pages/site/Galeria";
import Contato from "../pages/site/Contato";
import NotFound from "../pages/site/NotFound";

//Auth
import Login from "../pages/auth/Login";
import Cadastrar from "../pages/auth/Cadastrar";
import EsqueceuSenha from "../pages/auth/EsqueceuSenha";

//Admin
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import AgendamentosAdmin from "../pages/admin/AgendamentosAdmin";
import ClientesAdmin from "../pages/admin/ClientesAdmin";
import ProfissionaisAdmin from "../pages/admin/ProfissionaisAdmin";
import ServicosAdmin from "../pages/admin/ServicosAdmin";
import GaleriaAdmin from "../pages/admin/GaleriaAdmin";
import PerfilAdmin from "../pages/admin/PerfilAdmin";
import NotificacoesAdmin from "../pages/admin/NotificacoesAdmin";
import NotFoundAdmin from "../pages/admin/NotFoundAdmin";

export default function AppRoutes() {
  return (
    <Routes>
      {/*Rotas do site */}
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/agendar" element={<Agendar />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<NotFound />} />

      {/*Rotas de auth */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/cadastrar" element={<Cadastrar />} />
      <Route path="/auth/esqueceu-senha" element={<EsqueceuSenha />} />

      {/*Rotas do dashboard admin */}
      <Route path="/dashboard/admin/">
        <Route path="" element={<DashboardAdmin />} />
        <Route path="agendamentos" element={<AgendamentosAdmin />} />
        <Route path="clientes" element={<AgendamentosAdmin />} />
        <Route path="profissionais" element={<AgendamentosAdmin />} />
        <Route path="servicos" element={<AgendamentosAdmin />} />
        <Route path="agendamentos" element={<AgendamentosAdmin />} />
        <Route path="galeria" element={<AgendamentosAdmin />} />
        <Route path="perfil" element={<AgendamentosAdmin />} />
        <Route path="notificacoes" element={<AgendamentosAdmin />} />
        <Route path="*" element={<NotFoundAdmin />} />
      </Route>
    </Routes>
  );
}
