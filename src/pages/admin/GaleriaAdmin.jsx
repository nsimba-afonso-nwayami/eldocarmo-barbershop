import AdminLayout from "./components/AdminLayout";
import { useState } from "react";
import Modal from "./components/Modal";

export default function GaleriadAdmin() {
  const [openVisualizar, setOpenVisualizar] = useState(false);
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [openNovo, setOpenNovo] = useState(false);

  const imagens = [
    {
      id: 1,
      src: "https://img.freepik.com/fotos-gratis/barbearia-moderna_23-2149195473.jpg?w=740&t=st=1706231973~exp=1706232573~hmac=906c2d0b5d7fefefbc0914b2e0e171f013c72c9f3d8fcfda7d426e9e56a5d1c0",
      titulo: "Ambiente moderno",
    },
    {
      id: 2,
      src: "https://img.freepik.com/fotos-gratis/barbeiro-cortando-cabelo_23-2149195470.jpg?w=740&t=st=1706232034~exp=1706232634~hmac=65c5e51a12b60dff20d1f2a4f4d48d7f9dbd0e11d8e8460d09d1d8f1ed3c8e7f",
      titulo: "Barbeiro em ação",
    },
    {
      id: 3,
      src: "https://img.freepik.com/fotos-gratis/barbearia-interior_23-2149195467.jpg?w=740&t=st=1706232071~exp=1706232671~hmac=3d3e7a904aeb9b0f2e1c9d4e6a0d7cf2e5cfa0b7f4df9f7b0c50e1f8efb8a2c3",
      titulo: "Detalhes de corte",
    },
    {
      id: 4,
      src: "https://img.freepik.com/fotos-gratis/homens-cabelo-barba_23-2149195471.jpg?w=740&t=st=1706232112~exp=1706232712~hmac=13f3b7f66c3a7b4d07e7b6c3fae0a6db7f6d2b0f2c6c5e3e8f2f1f6a4b8c7a1c",
      titulo: "Estilo moderno",
    },
    {
      id: 5,
      src: "https://img.freepik.com/fotos-gratis/barbeiro-cortando-cabelo-jovem_23-2149195469.jpg?w=740&t=st=1706232150~exp=1706232750~hmac=8c5f0c6b0f5b4f7d3e2a1b4c6f7a8d3c2f1e4b6a7c3e1f8d7a6b5c4d2f1e0b3c",
      titulo: "Cliente satisfeito",
    },
    {
      id: 6,
      src: "https://img.freepik.com/fotos-gratis/barbearia_23-2149195472.jpg?w=740&t=st=1706232190~exp=1706232790~hmac=5f6b4c3a2d1e0f9c8b7a6d5e4f3c2b1a0d9c8e7f6a5b4c3d2e1f0a9b8c7d6e5f",
      titulo: "Corte clássico",
    },
  ];

  const abrirModal = (imagem) => {
    setImagemSelecionada(imagem);
    setOpenVisualizar(true);
  };

  return (
    <>
      <title>Galeria | Eldocarmo Barbershop</title>

      <AdminLayout title="Galeria">
        {/* Botão adicionar imagem */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setOpenNovo(true)}
            className="px-5 py-3 cursor-pointer bg-amber-400 hover:bg-amber-500 text-stone-900 rounded-lg font-semibold flex items-center gap-2"
          >
            <i className="fas fa-plus"></i>
            Nova Imagem
          </button>
        </div>

        {/* GRID DE IMAGENS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imagens.map((img) => (
            <div
              key={img.id}
              className="relative cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition"
              onClick={() => abrirModal(img)}
            >
              <img
                src={img.src}
                alt={img.titulo}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-sm p-2 text-center">
                {img.titulo}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL VISUALIZAR IMAGEM */}
        <Modal
          isOpen={openVisualizar}
          onClose={() => setOpenVisualizar(false)}
          title={imagemSelecionada?.titulo || "Imagem"}
          icon="fas fa-image"
        >
          {imagemSelecionada && (
            <div className="flex justify-center">
              <img
                src={imagemSelecionada.src}
                alt={imagemSelecionada.titulo}
                className="max-h-[70vh] object-contain rounded-xl"
              />
            </div>
          )}
        </Modal>

        {/* MODAL NOVA IMAGEM */}
        <Modal
          isOpen={openNovo}
          onClose={() => setOpenNovo(false)}
          title="Nova Imagem"
          icon="fas fa-plus"
        >
          <form className="max-w-3xl mx-auto space-y-6">
            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Título da Imagem
              </label>
              <input
                type="text"
                placeholder="Digite o título"
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">
                URL da Imagem
              </label>
              <input
                type="url"
                placeholder="Cole o link direto da imagem"
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={() => setOpenNovo(false)}
                className="px-6 py-3 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-stone-900 font-semibold rounded-lg cursor-pointer"
              >
                Adicionar Imagem
              </button>
            </div>
          </form>
        </Modal>
      </AdminLayout>
    </>
  );
}
