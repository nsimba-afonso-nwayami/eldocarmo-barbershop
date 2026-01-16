import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-stone-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo e descrição */}
        <div className="md:col-span-1">
          <h3 className="text-3xl font-bold text-amber-400 mb-4">Eldocarmo</h3>
          <p className="text-stone-500 leading-relaxed">
            Estilo, cuidado e confiança para o seu visual. Cortes modernos, barba e tratamentos de alta qualidade.
          </p>
          <div className="flex mt-6 space-x-4">
            {/* Redes sociais */}
            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 text-stone-500 bg-neutral-800 rounded-full border border-stone-700 shadow-md hover:text-stone-50 hover:bg-amber-400 hover:border-amber-400 hover:shadow-lg transform hover:scale-110 transition duration-300"
            >
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 text-stone-500 bg-neutral-800 rounded-full border border-stone-700 shadow-md hover:text-stone-50 hover:bg-amber-400 hover:border-amber-400 hover:shadow-lg transform hover:scale-110 transition duration-300"
            >
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 text-stone-500 bg-neutral-800 rounded-full border border-stone-700 shadow-md hover:text-stone-50 hover:bg-amber-400 hover:border-amber-400 hover:shadow-lg transform hover:scale-110 transition duration-300"
            >
              <i className="fab fa-linkedin-in text-lg"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 text-stone-500 bg-neutral-800 rounded-full border border-stone-700 shadow-md hover:text-stone-50 hover:bg-amber-400 hover:border-amber-400 hover:shadow-lg transform hover:scale-110 transition duration-300"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
          </div>
        </div>

        {/* Links rápidos */}
        <div>
          <h4 className="text-xl font-semibold text-amber-400 mb-4">Links Rápidos</h4>
          <ul className="space-y-2 text-stone-500">
            <li>
              <Link to="/" className="hover:text-amber-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/servicos" className="hover:text-amber-400 transition">Serviços</Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-amber-400 transition">Sobre</Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-amber-400 transition">Contato</Link>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-xl font-semibold text-amber-400 mb-4">Contato</h4>
          <div className="text-stone-500 space-y-3">
            <p>
              <i className="fas fa-map-marker-alt mr-2 text-amber-400"></i>
              Rua Exemplo, 123, Luanda, Angola
            </p>
            <p>
              <i className="fas fa-phone mr-2 text-amber-400"></i>
              <a href="tel:+244923000000" className="hover:text-amber-400 transition">
                +244 923 000 000
              </a>
            </p>
            <p>
              <i className="fas fa-envelope mr-2 text-amber-400"></i>
              <a href="mailto:contato@eldocarmobarbershop.com" className="hover:text-amber-400 transition">
                contato@eldocarmobarbershop.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Divisor */}
      <div className="border-t border-stone-700"></div>

      {/* Créditos e CTA */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center text-stone-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Eldocarmo Barbershop. Todos os direitos reservados.
        </p>
        <Link
          to="/agendar"
          className="mt-4 md:mt-0 inline-block bg-amber-400 text-stone-50 px-6 py-2 rounded-lg font-semibold hover:bg-amber-500 transition"
        >
          Agendar
        </Link>
      </div>
    </footer>
  );
}
