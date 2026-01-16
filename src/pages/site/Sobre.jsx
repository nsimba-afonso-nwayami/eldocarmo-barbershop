import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SobreImg from "../../assets/img/sobre.jpg";

export default function Sobre() {
  return (
    <>
      <title>Sobre | Eldocarmo Barbershop</title>

      {/* Header */}
      <Header />

      {/* Hero da página Sobre */}
      <section
        className="relative h-96 md:h-125 flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${SobreImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-neutral-900/50"></div>

        <div className="relative z-10 px-4 md:px-0">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-50">
            Sobre a <span className="text-amber-400">Eldocarmo Barbershop</span>
          </h1>
          <p className="text-stone-200 mt-4 text-lg md:text-xl">
            Estilo, cuidado e confiança para transformar o seu visual.
          </p>
        </div>
      </section>

      {/* Conteúdo Sobre */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12">
          {/* Imagem */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={SobreImg}
              alt="Sobre Eldocarmo Barbershop"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
              Nossa História
            </h2>
            <p className="text-stone-500 mb-6 leading-relaxed">
              Fundada com paixão e dedicação, a Eldocarmo Barbershop nasceu para
              oferecer cortes modernos, barba bem cuidada e tratamentos de alta
              qualidade. Nosso objetivo é proporcionar um atendimento
              personalizado e transformar o visual de cada cliente.
            </p>
            <p className="text-stone-500 mb-6 leading-relaxed">
              Com uma equipa de profissionais experientes, utilizamos técnicas
              avançadas e produtos de excelência para garantir que cada cliente
              saia satisfeito, confiante e estiloso.
            </p>

            <Link
              to="/agendar"
              className="inline-block bg-amber-400 text-stone-50 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition"
            >
              Agendar Corte
            </Link>
          </div>
        </div>
      </section>

      {/* Diferenciais ou Valores */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-12">
            Nossos <span className="text-amber-400">Diferenciais</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Experiência */}
            <div className="group bg-stone-200 p-8 rounded-2xl shadow-lg transition transform hover:shadow-2xl hover:-translate-y-2">
              <i className="fas fa-user-tie text-amber-400 text-5xl mb-6 group-hover:text-amber-500 transition"></i>
              <h3 className="text-2xl font-semibold text-stone-800 mb-3 group-hover:text-amber-400 transition">
                Profissionais Experientes
              </h3>
              <p className="text-stone-500">
                Nossa equipe é treinada e qualificada, garantindo cortes e
                tratamentos de alta qualidade.
              </p>
            </div>

            {/* Atendimento */}
            <div className="group bg-stone-200 p-8 rounded-2xl shadow-lg transition transform hover:shadow-2xl hover:-translate-y-2">
              <i className="fas fa-handshake text-amber-400 text-5xl mb-6 group-hover:text-amber-500 transition"></i>
              <h3 className="text-2xl font-semibold text-stone-800 mb-3 group-hover:text-amber-400 transition">
                Atendimento Personalizado
              </h3>
              <p className="text-stone-500">
                Cada cliente é único e recebe atenção especial para atender suas
                expectativas.
              </p>
            </div>

            {/* Qualidade */}
            <div className="group bg-stone-200 p-8 rounded-2xl shadow-lg transition transform hover:shadow-2xl hover:-translate-y-2">
              <i className="fas fa-gem text-amber-400 text-5xl mb-6 group-hover:text-amber-500 transition"></i>
              <h3 className="text-2xl font-semibold text-stone-800 mb-3 group-hover:text-amber-400 transition">
                Produtos de Qualidade
              </h3>
              <p className="text-stone-500">
                Utilizamos apenas produtos premium para garantir o melhor
                cuidado para cabelo e barba.
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
