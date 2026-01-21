import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { esqueceuSenhaSchema } from "../../validations/esqueceuSenhaSchema";

export default function EsqueceuSenha() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(esqueceuSenhaSchema),
  });

  const onSubmit = async (data) => {
    const toastId = toast.loading("Processando...");
    try {
      // Simula envio para API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Link de redefinição enviado!", { id: toastId });
      // Opcional: redirecionar para login após sucesso
      navigate("/auth/login");
    } catch (err) {
      toast.error("Erro ao enviar o link. Tente novamente.", { id: toastId });
    }
  };

  return (
    <>
      <title>Recuperar conta | Eldocarmo Barbershop</title>

      <section className="min-h-screen flex items-center justify-center bg-stone-50 px-6 py-12">
        <div className="w-full max-w-md bg-stone-50 rounded-2xl p-8 shadow-lg border border-stone-200">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-amber-400 text-stone-50 rounded-full text-3xl shadow-lg">
              <i className="fas fa-key"></i>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-stone-800 text-center mb-6">
            Recuperar Senha
          </h2>

          <p className="text-stone-500 text-center mb-6">
            Informe seu email e enviaremos um link para redefinir sua senha.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="relative">
              <label className="block mb-2 text-stone-800 font-semibold">
                Email
              </label>
              <span className="absolute left-3 top-10.5 text-stone-400">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                placeholder="Digite seu email"
                className={`w-full pl-10 p-3 rounded-lg bg-stone-100 text-stone-900 focus:outline-none border ${
                  errors.email
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:border-amber-400"
                } transition`}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Botão Enviar */}
            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-xl font-bold bg-amber-400 hover:bg-amber-500 transition cursor-pointer text-stone-50 flex items-center justify-center gap-2"
            >
              Enviar Link
            </button>

            {/* Links de navegação */}
            <p className="mt-4 text-center text-sm text-stone-600">
              Lembrou da senha?{" "}
              <Link to="/auth/login" className="text-amber-400 hover:underline">
                Entrar
              </Link>
            </p>

            <p className="text-center text-sm text-stone-600">
              Não tem uma conta?{" "}
              <Link
                to="/auth/cadastrar"
                className="text-amber-400 hover:underline"
              >
                Cadastre-se
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
