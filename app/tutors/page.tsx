const tutors = [
  {
    name: "Juan Pérez",
    subject: "Matemáticas",
    rating: 4.9,
    price: "$10/h",
  },
  {
    name: "Ana Gómez",
    subject: "Inglés",
    rating: 4.8,
    price: "$8/h",
  },
];

export default function TutorsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">
          Encuentra tu tutor
        </h1>

        <input
          placeholder="Buscar por materia..."
          className="w-full border-2 border-black rounded-xl px-4 py-3 outline-none"
        />
      </div>

      {/* FILTROS */}
      <div className="flex gap-4 mb-10 flex-wrap">
        <button className="px-4 py-2 border-2 border-black rounded-xl">
          Matemáticas
        </button>
        <button className="px-4 py-2 border-2 border-black rounded-xl">
          Inglés
        </button>
        <button className="px-4 py-2 border-2 border-black rounded-xl">
          Online
        </button>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {tutors.map((tutor, i) => (
          <div
            key={i}
            className="
              p-6
              border-2 border-black
              rounded-2xl
              shadow-[6px_6px_0px_#000]

              hover:translate-x-[2px] hover:translate-y-[2px]
              hover:shadow-[3px_3px_0px_#000]
              transition
            "
          >
            <h3 className="text-xl font-bold">{tutor.name}</h3>
            <p className="text-sm">{tutor.subject}</p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-sm">⭐ {tutor.rating}</span>
              <span className="font-bold">{tutor.price}</span>
            </div>

            <button className="
              mt-4 w-full
              bg-[#D3F954]
              py-2
              rounded-xl
              font-bold text-[#144424]

              border-2 border-black
              shadow-[4px_4px_0px_#000]

              hover:translate-x-[2px] hover:translate-y-[2px]
              hover:shadow-[2px_2px_0px_#000]
              transition
            ">
              Reservar
            </button>
          </div>
        ))}

      </div>

    </main>
  );
}