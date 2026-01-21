import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { cadastrarSchema } from "../../validations/cadastrarSchema";

export default function Cadastrar() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(cadastrarSchema),
  });

  const onSubmit = async (data) => {
    const toastId = toast.loading("Processando cadastro...");
    try {
      // Simula envio para API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Cadastro realizado com sucesso!", { id: toastId });
      reset();
      navigate("/dashboard/cliente");
    } catch (err) {
      toast.error("Erro ao cadastrar. Tente novamente.", { id: toastId });
    }
  };

  return (
    <>
      <title>Cadastrar-se | Eldocarmo Barbershop</title>

      <section className="min-h-screen flex items-center justify-center bg-stone-50 px-6 py-12">
        <div className="w-full max-w-md bg-stone-50 rounded-2xl p-8 shadow-lg border border-stone-200">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-amber-400 text-stone-50 rounded-full text-3xl shadow-lg">
              <i className="fas fa-scissors"></i>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-stone-800 text-center mb-6">
            Cadastrar-se
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Nome */}
            <div className="relative">
              <label className="block mb-2 text-stone-800 font-semibold">
                Nome Completo
              </label>
              <span className="absolute left-3 top-10.5 text-stone-400">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                placeholder="Digite seu nome"
                className={`w-full pl-10 p-3 rounded-lg bg-stone-100 text-stone-900 focus:outline-none border ${
                  errors.nome
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:border-amber-400"
                } transition`}
                {...register("nome")}
              />
              {errors.nome && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nome.message}
                </p>
              )}
            </div>

            {/* Sexo */}
            <div className="relative">
              <label className="block mb-2 text-stone-800 font-semibold">
                Sexo
              </label>
              <select
                className={`w-full pl-3 pr-3 p-3 rounded-lg bg-stone-100 text-stone-900 focus:outline-none border ${
                  errors.sexo
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:border-amber-400"
                } transition`}
                {...register("sexo")}
              >
                <option value="">Selecione seu sexo</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
              {errors.sexo && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.sexo.message}
                </p>
              )}
            </div>

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

            {/* Telefone */}
            <div className="relative">
              <label className="block mb-2 text-stone-800 font-semibold">
                Telefone
              </label>
              <span className="absolute left-3 top-10.5 text-stone-400">
                <i className="fas fa-phone"></i>
              </span>
              <input
                type="tel"
                placeholder="Ex: 923 456 789"
                className={`w-full pl-10 p-3 rounded-lg bg-stone-100 text-stone-900 focus:outline-none border ${
                  errors.telefone
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:border-amber-400"
                } transition`}
                {...register("telefone")}
              />
              {errors.telefone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.telefone.message}
                </p>
              )}
            </div>

            {/* Senha */}
            <div className="relative">
              <label className="block mb-2 text-stone-800 font-semibold">
                Senha
              </label>
              <span className="absolute left-3 top-10.5 text-stone-400">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                className={`w-full pl-10 pr-10 p-3 rounded-lg bg-stone-100 text-stone-900 focus:outline-none border ${
                  errors.senha
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:border-amber-400"
                } transition`}
                {...register("senha")}
              />
              <span
                className="absolute right-3 top-10.5 text-stone-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                ></i>
              </span>
              {errors.senha && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.senha.message}
                </p>
              )}
            </div>

            {/* Confirmar Senha */}
            <div className="relative">
              <label className="block mb-2 text-stone-800 font-semibold">
                Confirmar Senha
              </label>
              <span className="absolute left-3 top-10.5 text-stone-400">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirme sua senha"
                className={`w-full pl-10 pr-10 p-3 rounded-lg bg-stone-100 text-stone-900 focus:outline-none border ${
                  errors.confirmarSenha
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:border-amber-400"
                } transition`}
                {...register("confirmarSenha")}
              />
              <span
                className="absolute right-3 top-10.5 text-stone-400 cursor-pointer"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                <i
                  className={`fas ${showConfirm ? "fa-eye-slash" : "fa-eye"}`}
                ></i>
              </span>
              {errors.confirmarSenha && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmarSenha.message}
                </p>
              )}
            </div>

            {/* Botão Cadastrar */}
            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-xl font-bold bg-amber-400 hover:bg-amber-500 transition cursor-pointer text-stone-50 flex items-center justify-center gap-2"
            >
              Cadastrar
            </button>

            {/* Link para login */}
            <p className="mt-4 text-center text-sm text-stone-600">
              Já tem uma conta?{" "}
              <Link to="/auth/login" className="text-amber-400 hover:underline">
                Entrar
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
