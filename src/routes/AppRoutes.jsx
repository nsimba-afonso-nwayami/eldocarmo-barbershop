import { Routes, Route } from "react-router-dom";
//Site
import Home from "../pages/site/Home";
import Sobre from "../pages/site/Sobre";
import NotFound from "../pages/site/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/*Rotas do site */}
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
