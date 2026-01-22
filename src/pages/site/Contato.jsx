import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { contatoSchema } from "../../validations/contatoSchema"; // Crie este arquivo com o schema yup

export default function Contato() {
  // Dentro do componente Contato(), substitua o <form> antigo por este:
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contatoSchema),
  });

  const onSubmit = async (data) => {
    const toastId = toast.loading("Processando...");
    try {
      // Simula envio assíncrono, aqui você chamaria sua API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Mensagem enviada:", data);

      toast.success("Mensagem enviada com sucesso!", { id: toastId });
      reset();
    } catch (err) {
      toast.error("Erro ao enviar mensagem. Tente novamente.", { id: toastId });
    }
  };

  return (
    <>
      <title>Contato | Eldocarmo Barbershop</title>

      {/* Header */}
      <Header />

      {/* Introdução */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-amber-400 text-stone-50">
            Contato
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Fale com a <span className="text-amber-400">Eldocarmo</span>
          </h1>

          <p className="text-lg text-stone-500">
            Entre em contato conosco, tire suas dúvidas ou venha nos visitar.
            Estamos prontos para cuidar do seu estilo.
          </p>
        </div>
      </section>

      {/* Contato / Localização */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {/* Telefone */}
            <div className="group bg-stone-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center">
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
            <div className="group bg-stone-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center">
              <i className="fas fa-map-marker-alt text-amber-400 text-4xl mb-4 group-hover:text-amber-500 transition"></i>
              <h3 className="text-xl font-semibold text-stone-800 mb-2 group-hover:text-amber-400 transition">
                Endereço
              </h3>
              <p className="text-stone-500 text-center">
                Centralidade do Kilamba, Bloco V17 (Barbearia) / W19
                (caleireiro) <br />
                Luanda, Angola
              </p>
            </div>

            {/* Horário */}
            <div className="group bg-stone-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center">
              <i className="fas fa-clock text-amber-400 text-4xl mb-4 group-hover:text-amber-500 transition"></i>
              <h3 className="text-xl font-semibold text-stone-800 mb-2 group-hover:text-amber-400 transition">
                Horário
              </h3>
              <p className="text-stone-500 text-center">
                Seg - Sex: 09:00 - 19:00 <br />
                Sáb: 09:00 - 14:00
              </p>
            </div>
          </div>

          {/* Mapa */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Mapa Eldocarmo Barbershop"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.67415850549!2d13.27439547414212!3d-9.00209989270509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a521de302ac3f89%3A0x8737da70b83c0ff4!2sEldocarmo%20Barbershop!5e0!3m2!1spt-PT!2sao!4v1769084937386!5m2!1spt-PT!2sao"
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-72 md:h-96 border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-stone-50 border border-stone-200 rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-stone-800 mb-4 text-center">
            Envie uma Mensagem
          </h2>
          <p className="text-stone-500 mb-10 text-center">
            Preencha o formulário abaixo e entraremos em contato o mais breve
            possível.
          </p>

          <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Nome */}
            <div>
              <label className="block text-stone-800 font-medium mb-2">
                Nome
              </label>
              <input
                type="text"
                placeholder="Seu nome"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none ${
                  errors.nome
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:ring-amber-400"
                }`}
                {...register("nome")}
              />
              {errors.nome && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nome.message}
                </p>
              )}
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-stone-800 font-medium mb-2">
                Telefone
              </label>
              <input
                type="tel"
                placeholder="Seu telefone"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none ${
                  errors.telefone
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:ring-amber-400"
                }`}
                {...register("telefone")}
              />
              {errors.telefone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.telefone.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-stone-800 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Seu email"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none ${
                  errors.email
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:ring-amber-400"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Assunto */}
            <div>
              <label className="block text-stone-800 font-medium mb-2">
                Assunto
              </label>
              <input
                type="text"
                placeholder="Assunto da mensagem"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none ${
                  errors.assunto
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:ring-amber-400"
                }`}
                {...register("assunto")}
              />
              {errors.assunto && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.assunto.message}
                </p>
              )}
            </div>

            {/* Mensagem */}
            <div>
              <label className="block text-stone-800 font-medium mb-2">
                Mensagem
              </label>
              <textarea
                rows="5"
                placeholder="Digite sua mensagem"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none resize-none ${
                  errors.mensagem
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:ring-amber-400"
                }`}
                {...register("mensagem")}
              ></textarea>
              {errors.mensagem && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mensagem.message}
                </p>
              )}
            </div>

            {/* Botão */}
            <div>
              <button
                type="submit"
                className="w-full mt-4 bg-amber-400 hover:bg-amber-500 text-stone-50 font-semibold py-4 rounded-lg transition cursor-pointer"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-linear-to-r from-stone-900 to-stone-800 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-50 mb-6">
            Pronto para mudar seu visual?
          </h2>

          <p className="text-stone-300 text-lg md:text-xl mb-8">
            Agende agora e viva a experiência Eldocarmo Barbershop.
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
