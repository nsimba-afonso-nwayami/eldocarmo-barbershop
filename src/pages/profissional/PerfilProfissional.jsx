import ProfissionalLayout from "./components/ProfissionalLayout";

export default function PerfilProfissional() {
  return (
    <>
      <title>Perfil | Eldocarmo Barbershop</title>

      <ProfissionalLayout title="Meu Perfil">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* ===== Informações do Profissional ===== */}
          <section className="bg-white border border-stone-200 rounded-xl shadow-sm p-6 md:p-8 space-y-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Foto */}
              <div className="shrink-0">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm5a0MZ8p5nPzZ6KX3FJv9xDkM7Q0W0H7W8Q&usqp=CAU"
                  alt="Profissional"
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-amber-400 object-cover"
                />
              </div>

              {/* Informações */}
              <div className="flex-1 space-y-1">
                <h2 className="text-2xl md:text-3xl font-bold text-stone-800">
                  João Barbeiro
                </h2>
                <p className="text-sm md:text-base text-stone-500">
                  Profissional registrado desde: 10/06/2023
                </p>
                <p className="text-sm md:text-base text-stone-500">
                  Email: joao@eldocarmo.com
                </p>
                <p className="text-sm md:text-base text-stone-500">
                  Telefone: +244 923 111 222
                </p>
                <p className="text-sm md:text-base text-stone-500">
                  Especialidade: Corte masculino e barba
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
                    placeholder="João Barbeiro"
                    className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-stone-700 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="joao@eldocarmo.com"
                    className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-stone-700 font-medium mb-1">
                    Telefone
                  </label>
                  <input
                    type="text"
                    placeholder="+244 923 111 222"
                    className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-stone-700 font-medium mb-1">
                    Especialidade
                  </label>
                  <input
                    type="text"
                    placeholder="Corte masculino e barba"
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
      </ProfissionalLayout>
    </>
  );
}
