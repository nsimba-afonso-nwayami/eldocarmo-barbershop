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

//Profissional
import DashboardProfissional from "../pages/profissional/DashboardProfissional";
import AgendamentosProfissional from "../pages/profissional/AgendamentosProfissional";
import GaleriaProfissional from "../pages/profissional/GaleriaProfissional";
import PerfilProfissional from "../pages/profissional/PerfilProfissional";
import NotificacoesProfissional from "../pages/profissional/NotificacoesProfissional";
import NotFoundProfissional from "../pages/profissional/NotFoundProfissional";

//Cliente
import DashboardCliente from "../pages/cliente/DashboardCliente";
import AgendamentosCliente from "../pages/cliente/AgendamentosCliente";
import PerfilCliente from "../pages/cliente/PerfilCliente";
import NotificacoesCliente from "../pages/cliente/NotificacoesCliente";
import NotFoundCliente from "../pages/cliente/NotFoundCliente";

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
        <Route path="clientes" element={<ClientesAdmin />} />
        <Route path="profissionais" element={<ProfissionaisAdmin />} />
        <Route path="servicos" element={<ServicosAdmin />} />
        <Route path="galeria" element={<GaleriaAdmin />} />
        <Route path="perfil" element={<PerfilAdmin />} />
        <Route path="notificacoes" element={<NotificacoesAdmin />} />
        <Route path="*" element={<NotFoundAdmin />} />
      </Route>

      {/*Rotas do dashboard profissional */}
      <Route path="/dashboard/profissional/">
        <Route path="" element={<DashboardProfissional />} />
        <Route path="agendamentos" element={<AgendamentosProfissional />} />
        <Route path="galeria" element={<GaleriaProfissional />} />
        <Route path="perfil" element={<PerfilProfissional />} />
        <Route path="notificacoes" element={<NotificacoesProfissional />} />
        <Route path="*" element={<NotFoundProfissional  />} />
      </Route>

      {/*Rotas do dashboard cliente */}
      <Route path="/dashboard/cliente/">
        <Route path="" element={<DashboardCliente />} />
        <Route path="agendamentos" element={<AgendamentosCliente />} />
        <Route path="perfil" element={<PerfilCliente />} />
        <Route path="notificacoes" element={<NotificacoesCliente />} />
        <Route path="*" element={<NotFoundCliente  />} />
      </Route>
    </Routes>
  );
}
