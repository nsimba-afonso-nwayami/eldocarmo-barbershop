import { Routes, Route } from "react-router-dom";
//Site
import Home from "../pages/site/Home";
import Sobre from "../pages/site/Sobre";
import Agendar from "../pages/site/Agendar";
import Servicos from "../pages/site/Servicos";
import Galeria from "../pages/site/Galeria";
import Contato from "../pages/site/Contato";
import NotFound from "../pages/site/NotFound";

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
    </Routes>
  );
}
