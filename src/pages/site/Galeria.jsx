import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import GaleriaImg1 from "../../assets/img/galeria1.jpg";
import GaleriaImg2 from "../../assets/img/galeria2.jpg";
import GaleriaImg3 from "../../assets/img/galeria3.jpg";
import GaleriaImg4 from "../../assets/img/galeria4.jpg";
import GaleriaImg5 from "../../assets/img/galeria5.jpg";
import GaleriaImg6 from "../../assets/img/galeria6.jpg";

export default function Galeria() {
  return (
    <>
      <title>Galeria | Eldocarmo Barbershop</title>

      {/* Header */}
      <Header />

      {/* Introdução */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-amber-400 text-stone-50">
            Galeria
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Nosso <span className="text-amber-400">Trabalho</span>
          </h1>

          <p className="text-lg text-stone-500">
            Veja de perto alguns dos cortes, estilos e transformações realizadas
            na Eldocarmo Barbershop. Qualidade, técnica e atenção aos detalhes.
          </p>
        </div>
      </section>

      {/* Galeria */}
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

      {/* CTA Agendamento */}
      <section className="py-20 bg-linear-to-r from-stone-900 to-stone-800 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-50 mb-6">
            Gostou do que viu?
            <br />
            <span className="text-amber-400">Agende seu horário agora</span>
          </h2>

          <p className="text-stone-300 text-lg md:text-xl mb-8">
            Transforme seu visual com profissionais experientes e serviços de
            alta qualidade na Eldocarmo Barbershop.
          </p>

          <Link
            to="/agendar"
            className="inline-block px-12 py-4 bg-amber-400 text-stone-900 font-bold uppercase rounded-lg text-lg shadow-lg hover:bg-amber-500 transition transform hover:-translate-y-1"
          >
            Agendar Agora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
