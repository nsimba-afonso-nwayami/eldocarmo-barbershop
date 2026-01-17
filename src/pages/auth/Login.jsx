import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <title>Entrar | Eldocarmo Barbershop</title>

      <section className="min-h-screen flex items-center justify-center bg-stone-50 px-6 py-12">
        <div className="w-full max-w-md bg-stone-50 rounded-2xl p-8 shadow-lg border border-stone-200">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-amber-400 text-stone-50 rounded-full text-3xl shadow-lg">
              <i className="fas fa-scissors"></i>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-stone-800 text-center mb-6">
            Eldocarmo Login
          </h2>

          <form className="space-y-4">
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
                className="w-full pl-10 p-3 rounded-lg bg-stone-100 text-stone-900 focus:outline-none border border-stone-300 focus:border-amber-400 transition"
                required
              />
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
                className="w-full pl-10 pr-10 p-3 rounded-lg bg-stone-100 text-stone-900 focus:outline-none border border-stone-300 focus:border-amber-400 transition"
                required
              />
              {/* Ícone de olho */}
              <span
                className="absolute right-3 top-10.5 text-stone-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                ></i>
              </span>
            </div>

            {/* Botão Entrar */}
            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-xl font-bold bg-amber-400 hover:bg-amber-500 transition cursor-pointer text-stone-50 flex items-center justify-center gap-2"
            >
              Entrar
            </button>

            {/* Esqueceu senha */}
            <div className="text-right mt-2">
              <Link
                to="/auth/esqueceu-senha"
                className="text-sm text-amber-400 hover:underline"
              >
                Esqueceu a senha?
              </Link>
            </div>
          </form>

          {/* Link para cadastro */}
          <p className="mt-4 text-center text-sm text-stone-600">
            Não tem conta?{" "}
            <Link
              to="/auth/cadastrar"
              className="text-amber-400 hover:underline"
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
