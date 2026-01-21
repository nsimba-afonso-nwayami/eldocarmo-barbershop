import ProfissionalLayout from "./components/ProfissionalLayout";

export default function GaleriaProfissional() {
  const imagens = [
    "https://img.freepik.com/free-photo/barber-cutting-hair-man-barbershop_1303-20978.jpg",
    "https://img.freepik.com/free-photo/man-getting-his-haircut-barber-shop_1303-20980.jpg",
    "https://img.freepik.com/free-photo/barber-making-haircut-man_1303-20975.jpg",
    "https://img.freepik.com/free-photo/barber-shaving-beard-man-barbershop_1303-20977.jpg",
    "https://img.freepik.com/free-photo/hairdresser-cutting-hair-client-barbershop_1303-20981.jpg",
    "https://img.freepik.com/free-photo/barber-shop-tools-wooden-table_1303-20976.jpg",
    "https://img.freepik.com/free-photo/barber-styling-hair-man_1303-20982.jpg",
    "https://img.freepik.com/free-photo/barber-shop-interior-with-chairs-mirrors_1303-20979.jpg",
  ];

  return (
    <>
      <title>Galeria | Eldocarmo Barbershop</title>

      <ProfissionalLayout title="Galeria">
        {/* DESCRIÇÃO */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
          <h2 className="text-lg font-bold text-stone-800 mb-1">
            Trabalhos Realizados
          </h2>
          <p className="text-sm text-stone-500">
            Alguns dos cortes e estilos realizados na barbearia.
          </p>
        </div>

        {/* GALERIA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imagens.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-sm border border-stone-200 bg-white"
            >
              <img
                src={img}
                alt="Trabalho da barbearia"
                className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-sm font-semibold bg-amber-400/90 px-4 py-2 rounded-lg">
                  Ver detalhe
                </span>
              </div>
            </div>
          ))}
        </div>
      </ProfissionalLayout>
    </>
  );
}
