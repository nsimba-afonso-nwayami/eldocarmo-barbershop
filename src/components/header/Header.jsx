import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-stone-50 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-stone-800">
          Eldo<span className="text-amber-400">Carmo</span> Barbershop
        </Link>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-2xl text-stone-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <i
            className={`fas transition-all duration-300 ease-in-out
              ${
                menuOpen
                  ? "fa-times rotate-90 scale-110 text-amber-400"
                  : "fa-bars rotate-0 scale-100"
              }
            `}
          ></i>
        </button>

        {/* Menu Único */}
        <nav
          className={`
            absolute md:static top-full left-0 w-full md:w-auto
            bg-stone-50 md:bg-transparent
            flex flex-col md:flex-row
            items-center gap-6
            px-6 md:p-0
            overflow-hidden
            transition-all duration-300 ease-in-out
            md:overflow-visible md:max-h-full md:opacity-100 md:translate-y-0
            ${menuOpen ? "max-h-250 opacity-100 translate-y-0 py-6" : "max-h-0 opacity-0 -translate-y-2 py-0"}
          `}
        >
          {/* Links principais */}
          <Link to="/" className="hover:text-amber-400 transition-colors">
            Início
          </Link>
          <Link to="/sobre" className="hover:text-amber-400 transition-colors">
            Sobre
          </Link>
          <Link
            to="/agendar"
            className="hover:text-amber-400 transition-colors"
          >
            Agendar
          </Link>
          <Link
            to="/servicos"
            className="hover:text-amber-400 transition-colors"
          >
            Serviços
          </Link>
          <Link
            to="/galeria"
            className="hover:text-amber-400 transition-colors"
          >
            Galeria
          </Link>
          <Link
            to="/contato"
            className="hover:text-amber-400 transition-colors"
          >
            Contato
          </Link>

          {/* Botões CTA */}
          <div className="flex flex-col md:flex-row w-full md:w-auto gap-4 mt-4 md:mt-0">
            <Link
              to="/login"
              className="border border-amber-400 text-amber-400 px-4 py-2 rounded-lg hover:bg-amber-400 hover:text-stone-900 transition flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <i className="fas fa-user"></i>
              Login
            </Link>

            <a
              href="https://wa.me/244000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 text-stone-50 px-4 py-2 rounded-lg hover:bg-amber-500 transition flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
