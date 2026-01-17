import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Servicos() {
  return (
    <>
      <title>Serviços | Eldocarmo Barbershop</title>

      {/* Header */}
      <Header />

      {/* Introdução */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-amber-400 text-stone-50">
            Serviços
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            O Melhor para o Seu Estilo
          </h1>

          <p className="text-lg text-stone-500">
            Na Eldocarmo Barbershop oferecemos serviços completos para cuidar do
            seu visual, unindo técnica, estilo e atenção aos detalhes.
          </p>
        </div>
      </section>

      {/* Seção Serviços */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          {/* Título da Seção */}
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Nossos <span className="text-amber-400">Serviços</span>
          </h2>

          {/* Descrição */}
          <p className="text-stone-500 mb-12 max-w-3xl mx-auto">
            Oferecemos uma variedade de serviços de alta qualidade para manter
            seu estilo impecável, desde cortes modernos e barba bem cuidada até
            tratamentos capilares e coloração personalizada.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Corte */}
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
        </div>
      </section>

      {/* Serviços Detalhados */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-stone-800 text-center mb-12">
            Tabela de <span className="text-amber-400">Serviços</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Item */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 flex justify-between items-center hover:shadow-lg transition">
              <div>
                <h4 className="text-xl font-semibold text-stone-800">
                  Corte Masculino
                </h4>
                <p className="text-stone-500 text-sm">
                  Corte moderno ou clássico com acabamento profissional
                </p>
              </div>
              <span className="text-amber-400 font-bold">4.000 Kz</span>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 flex justify-between items-center hover:shadow-lg transition">
              <div>
                <h4 className="text-xl font-semibold text-stone-800">Barba</h4>
                <p className="text-stone-500 text-sm">
                  Modelagem e tratamento completo da barba
                </p>
              </div>
              <span className="text-amber-400 font-bold">3.000 Kz</span>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 flex justify-between items-center hover:shadow-lg transition">
              <div>
                <h4 className="text-xl font-semibold text-stone-800">
                  Corte + Barba
                </h4>
                <p className="text-stone-500 text-sm">
                  Combo completo para um visual impecável
                </p>
              </div>
              <span className="text-amber-400 font-bold">6.000 Kz</span>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 flex justify-between items-center hover:shadow-lg transition">
              <div>
                <h4 className="text-xl font-semibold text-stone-800">
                  Tratamento Capilar
                </h4>
                <p className="text-stone-500 text-sm">
                  Hidratação e revitalização dos fios
                </p>
              </div>
              <span className="text-amber-400 font-bold">5.000 Kz</span>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-stone-800 mb-12">
            Por que escolher a <span className="text-amber-400">Eldocarmo</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-stone-200 p-6 rounded-xl hover:shadow-xl transition">
              <i className="fas fa-user-tie text-amber-400 text-4xl mb-4"></i>
              <h4 className="font-semibold text-stone-800 mb-2">
                Profissionais Experientes
              </h4>
              <p className="text-stone-500 text-sm">
                Barbeiros qualificados e atualizados com as tendências.
              </p>
            </div>

            <div className="bg-stone-200 p-6 rounded-xl hover:shadow-xl transition">
              <i className="fas fa-clock text-amber-400 text-4xl mb-4"></i>
              <h4 className="font-semibold text-stone-800 mb-2">
                Pontualidade
              </h4>
              <p className="text-stone-500 text-sm">
                Seu horário é respeitado do início ao fim.
              </p>
            </div>

            <div className="bg-stone-200 p-6 rounded-xl hover:shadow-xl transition">
              <i className="fas fa-spray-can text-amber-400 text-4xl mb-4"></i>
              <h4 className="font-semibold text-stone-800 mb-2">
                Produtos Premium
              </h4>
              <p className="text-stone-500 text-sm">
                Utilizamos produtos de alta qualidade.
              </p>
            </div>

            <div className="bg-stone-200 p-6 rounded-xl hover:shadow-xl transition">
              <i className="fas fa-star text-amber-400 text-4xl mb-4"></i>
              <h4 className="font-semibold text-stone-800 mb-2">
                Atendimento Premium
              </h4>
              <p className="text-stone-500 text-sm">
                Experiência completa do início ao fim.
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
