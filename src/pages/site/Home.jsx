import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import HeroImg from "../../assets/img/hero.jpg";
import SobreImg from "../../assets/img/sobre.jpg";
import GaleriaImg1 from "../../assets/img/galeria1.jpg";
import GaleriaImg2 from "../../assets/img/galeria2.jpg";
import GaleriaImg3 from "../../assets/img/galeria3.jpg";
import GaleriaImg4 from "../../assets/img/galeria4.jpg";
import GaleriaImg5 from "../../assets/img/galeria5.jpg";
import GaleriaImg6 from "../../assets/img/galeria6.jpg";
import ParallaxImg from "../../assets/img/parallax.jpg";

export default function Home() {
  return (
    <>
      <title>Eldocarmo Barbershop</title>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section
        className="relative bg-fixed h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroImg})`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b bg-black/50"></div>

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

      {/* Seção Serviços */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          {/* Título da Seção */}
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Nossos <span className="text-amber-400">Serviços</span>
          </h2>

          {/* Descrição geral da seção */}
          <p className="text-stone-500 mb-12 max-w-3xl mx-auto">
            Oferecemos uma variedade de serviços de alta qualidade para manter
            seu estilo impecável, desde cortes modernos e barba bem cuidada até
            tratamentos capilares e coloração personalizada.
          </p>

          {/* Cards de serviços */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
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
              <i className="fas fa-bars text-amber-400 text-5xl mb-6 group-hover:text-amber-500 transition"></i>
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

          {/* Botão Ver Mais */}
          <Link
            to="/servicos"
            className="inline-block bg-amber-400 text-stone-50 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition"
          >
            Ver Mais
          </Link>
        </div>
      </section>

      {/* Seção Galeria */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Nossa <span className="text-amber-400">Galeria</span>
          </h2>
          <p className="text-stone-500 mb-12 max-w-3xl mx-auto">
            Confira alguns dos cortes, estilos e tratamentos que oferecemos.
            Inspiração e qualidade em cada detalhe.
          </p>

          {/* LightGallery */}
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {/* Imagem 1 */}
            <a
              href={GaleriaImg1}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={GaleriaImg1}
                alt="Galeria 1"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <i className="fas fa-plus text-amber-400 text-8xl"></i>
              </div>
            </a>

            {/* Imagem 2 */}
            <a
              href={GaleriaImg2}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={GaleriaImg2}
                alt="Galeria 2"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <i className="fas fa-plus text-amber-400 text-8xl"></i>
              </div>
            </a>

            {/* Imagem 3 */}
            <a
              href={GaleriaImg3}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={GaleriaImg3}
                alt="Galeria 3"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <i className="fas fa-plus text-amber-400 text-8xl"></i>
              </div>
            </a>

            {/* Imagem 4 */}
            <a
              href={GaleriaImg4}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={GaleriaImg4}
                alt="Galeria 4"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <i className="fas fa-plus text-amber-400 text-8xl"></i>
              </div>
            </a>

            {/* Imagem 5 */}
            <a
              href={GaleriaImg5}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={GaleriaImg5}
                alt="Galeria 5"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <i className="fas fa-plus text-amber-400 text-8xl"></i>
              </div>
            </a>

            {/* Imagem 6 */}
            <a
              href={GaleriaImg6}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={GaleriaImg6}
                alt="Galeria 6"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <i className="fas fa-plus text-amber-400 text-8xl"></i>
              </div>
            </a>
          </LightGallery>
        </div>
      </section>

      {/* Seção Parallax */}
      <section
        className="relative h-96 md:h-125 bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${ParallaxImg})` }}
      >
        {/* Overlay suave */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Conteúdo */}
        <div className="relative z-10 text-center px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-50 mb-4">
            Experiência e <span className="text-amber-400">Estilo</span>
          </h2>
          <p className="text-stone-200 text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Transformamos seu visual com cortes, barba e tratamentos de alta
            qualidade.
          </p>

          {/* Botão Agendar */}
          <a
            href="/agendar"
            className="inline-block bg-amber-400 text-stone-50 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition"
          >
            Agendar
          </a>
        </div>
      </section>

      {/* Seção Contato / Localização */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Contato & <span className="text-amber-400">Localização</span>
          </h2>
          <p className="text-stone-500 mb-12 max-w-3xl mx-auto">
            Entre em contato ou visite nossa barbearia. Estamos prontos para
            transformar seu visual com estilo e cuidado.
          </p>

          {/* Contato e localização */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Telefone / WhatsApp */}
            <div className="group bg-stone-200 p-8 rounded-2xl shadow-lg flex flex-col items-center transition transform hover:shadow-2xl hover:-translate-y-2">
              <i className="fas fa-phone text-amber-400 text-4xl mb-4 group-hover:text-amber-500 transition"></i>
              <h3 className="text-xl font-semibold text-stone-800 mb-2 group-hover:text-amber-400 transition">
                Telefone / WhatsApp
              </h3>
              <a
                href="https://wa.me/244925184386"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-amber-400 transition"
              >
                +244 925 184 386
              </a>
            </div>

            {/* Endereço */}
            <div className="group bg-stone-200 p-8 rounded-2xl shadow-lg flex flex-col items-center transition transform hover:shadow-2xl hover:-translate-y-2">
              <i className="fas fa-map-marker-alt text-amber-400 text-4xl mb-4 group-hover:text-amber-500 transition"></i>
              <h3 className="text-xl font-semibold text-stone-800 mb-2 group-hover:text-amber-400 transition">
                Endereço
              </h3>
              <p className="text-stone-500">
                Centralidade do Kilamba, Bloco V17 (Barbearia) / W19
                (caleireiro) <br />
                Luanda, Angola
              </p>
            </div>

            {/* Horário de Funcionamento */}
            <div className="group bg-stone-200 p-8 rounded-2xl shadow-lg flex flex-col items-center transition transform hover:shadow-2xl hover:-translate-y-2">
              <i className="fas fa-clock text-amber-400 text-4xl mb-4 group-hover:text-amber-500 transition"></i>
              <h3 className="text-xl font-semibold text-stone-800 mb-2 group-hover:text-amber-400 transition">
                Horário
              </h3>
              <p className="text-stone-500">
                Seg - Sex: 09:00 - 19:00 <br />
                Sáb: 09:00 - 14:00
              </p>
            </div>
          </div>

          {/* Mapa de Luanda */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Mapa Eldocarmo Barbershop - Luanda"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.123456789!2d13.2345678!3d-8.8361234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5223456789abcd%3A0xabcdef1234567890!2sLuanda!5e0!3m2!1spt-PT!2sao!4v1699999999999!5m2!1spt-PT!2sao"
              className="w-full h-64 md:h-96 border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Seção CTA Final */}
      <section className="py-20 bg-linear-to-r from-amber-400 to-amber-500 text-stone-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para transformar seu visual?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Entre em contato agora e agende seu corte ou tratamento com nossos
            profissionais.
          </p>

          <a
            href="/agendar"
            className="inline-block px-12 py-4 bg-stone-50 text-amber-400 font-bold uppercase rounded-lg text-lg shadow-lg hover:bg-stone-200 hover:text-amber-500 transition"
          >
            Agendar Agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
