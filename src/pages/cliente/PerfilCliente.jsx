import ClienteLayout from "./components/ClienteLayout";
import { useState } from "react";

export default function PerfilCliente() {
  const [foto, setFoto] = useState(null);
  const [nome, setNome] = useState("João da Silva");
  const [email, setEmail] = useState("joao@email.com");
  const [telefone, setTelefone] = useState("+244 923 111 222");
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleFotoChange = (e) => {
    setFoto(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <title>Perfil | Eldocarmo Barbershop</title>

      <ClienteLayout title="Meu Perfil">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* ===== Informações do Cliente ===== */}
          <section className="bg-white border border-stone-200 rounded-xl shadow-sm p-6 md:p-8 space-y-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Foto */}
              <div className="shrink-0">
                <img
                  src={
                    foto ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  }
                  alt="Cliente"
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-amber-400 object-cover"
                />
              </div>

              {/* Informações */}
              <div className="flex-1 space-y-1">
                <h2 className="text-2xl md:text-3xl font-bold text-stone-800">
                  {nome}
                </h2>
                <p className="text-sm md:text-base text-stone-500">
                  Cliente registrado desde: 10/06/2023
                </p>
                <p className="text-sm md:text-base text-stone-500">
                  Email: {email}
                </p>
                <p className="text-sm md:text-base text-stone-500">
                  Telefone: {telefone}
                </p>
              </div>
            </div>
          </section>

          {/* ===== Formulário de Editar Perfil ===== */}
          <div className="bg-white border border-stone-200 rounded-xl shadow-sm p-6 md:p-8 space-y-4">
            <h3 className="text-xl font-semibold text-amber-400 mb-4">
              Editar Perfil
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm text-stone-700 font-medium mb-1">
                  Foto de Perfil
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFotoChange}
                  className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-stone-700 font-medium mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-stone-700 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-stone-700 font-medium mb-1">
                    Telefone
                  </label>
                  <input
                    type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-2 bg-amber-400 hover:bg-amber-500 text-stone-900 font-semibold rounded-lg transition"
              >
                Salvar Alterações
              </button>
            </form>
          </div>

          {/* ===== Formulário Alterar Senha ===== */}
          <div className="bg-white border border-stone-200 rounded-xl shadow-sm p-6 md:p-8 space-y-4">
            <h3 className="text-xl font-semibold text-amber-400 mb-4">
              Alterar Senha
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm text-stone-700 font-medium mb-1">
                  Senha Atual
                </label>
                <input
                  type="password"
                  value={senhaAtual}
                  onChange={(e) => setSenhaAtual(e.target.value)}
                  placeholder="********"
                  className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-sm text-stone-700 font-medium mb-1">
                  Nova Senha
                </label>
                <input
                  type="password"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                  placeholder="********"
                  className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-sm text-stone-700 font-medium mb-1">
                  Confirmar Nova Senha
                </label>
                <input
                  type="password"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  placeholder="********"
                  className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2 bg-amber-400 hover:bg-amber-500 text-stone-900 font-semibold rounded-lg transition"
              >
                Alterar Senha
              </button>
            </form>
          </div>
        </div>
      </ClienteLayout>
    </>
  );
}
