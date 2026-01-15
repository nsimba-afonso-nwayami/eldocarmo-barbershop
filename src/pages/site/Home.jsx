import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroImg from "../../assets/img/hero.jpg";
import SobreImg from "../../assets/img/sobre.jpg";

export default function Home() {
  return (
    <>
      <title>Eldocarmo Barbershop</title>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroImg})`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-neutral-900/20 to-neutral-900/10"></div>

        <div className="relative z-10 px-4 md:px-0 max-w-full md:max-w-4xl lg:max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold text-stone-50 mb-6">
            Bem-vindo à{" "}
            <span className="text-amber-400">Eldocarmo Barbershop</span>
          </h1>
          <p className="text-stone-200 text-lg md:text-xl mb-8">
            Estilo, cuidado e confiança para o seu visual. Agende seu corte com
            nossos profissionais.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="/agendar"
              className="bg-amber-400 text-stone-50 px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 transition"
            >
              Agendar Corte
            </Link>

            <a
              href="https://wa.me/244000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 text-stone-50 px-6 py-3 rounded-lg font-semibold hover:bg-stone-800 transition flex items-center justify-center gap-2"
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Sobre Resumido */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8">
          {/* Imagem */}
          <div className="md:w-1/2">
            <img
              src={SobreImg}
              alt="Sobre Eldocarmo Barbershop"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Texto */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Sobre a{" "}
              <span className="text-amber-400">Eldocarmo Barbershop</span>
            </h2>
            <p className="text-stone-500 mb-6">
              Na Eldocarmo Barbershop, unimos tradição e modernidade para
              oferecer cortes e serviços de alta qualidade, com cuidado e estilo
              para cada cliente.
            </p>
            <Link
              to="/sobre"
              className="bg-amber-400 text-stone-50 px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 transition"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Serviços - Cards Modernos */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-12">
            Nossos <span className="text-amber-400">Serviços</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Corte de cabelo */}
            <div className="group bg-stone-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <i className="fas fa-cut text-amber-400 text-5xl mb-6 group-hover:text-amber-500 transition"></i>
              <h3 className="text-2xl font-semibold text-stone-800 mb-3 group-hover:text-amber-400 transition">
                Cortes
              </h3>
              <p className="text-stone-500">
                Cortes modernos e clássicos adaptados ao seu estilo e
                personalidade.
              </p>
            </div>

            {/* Barba */}
            <div className="group bg-stone-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <i className="fas fa-beard text-amber-400 text-5xl mb-6 group-hover:text-amber-500 transition"></i>
              <h3 className="text-2xl font-semibold text-stone-800 mb-3 group-hover:text-amber-400 transition">
                Barba
              </h3>
              <p className="text-stone-500">
                Modelagem, aparo e tratamentos de barba com atenção aos
                detalhes.
              </p>
            </div>

            {/* Tratamentos */}
            <div className="group bg-stone-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <i className="fas fa-spa text-amber-400 text-5xl mb-6 group-hover:text-amber-500 transition"></i>
              <h3 className="text-2xl font-semibold text-stone-800 mb-3 group-hover:text-amber-400 transition">
                Tratamentos
              </h3>
              <p className="text-stone-500">
                Hidratação, revitalização e cuidados para cabelo e couro
                cabeludo.
              </p>
            </div>

            {/* Coloração */}
            <div className="group bg-stone-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <i className="fas fa-tint text-amber-400 text-5xl mb-6 group-hover:text-amber-500 transition"></i>
              <h3 className="text-2xl font-semibold text-stone-800 mb-3 group-hover:text-amber-400 transition">
                Coloração
              </h3>
              <p className="text-stone-500">
                Tintura e mechas para quem quer um visual renovado com estilo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
