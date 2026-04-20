import Image from "next/image";

const subjects = [
  {
    name: "Matemáticas Avanzadas",
    color: "bg-[#D3F954]",
    textColor: "text-[#1D1F1E]",
    image: "/math.svg",
    iconColor: "text-[#1D1F1E]",
  },
  {
    name: "Física Aplicada",
    color: "bg-[#144424]",
    textColor: "text-white",
    image: "/physics.svg",
    iconColor: "text-[#d3f954]",
  },
  {
    name: "Química Farmaceútica",
    color: "bg-[#667d6e]",
    textColor: "text-[#FBFBFB]",
    image: "/math.svg",
    iconColor: "text-[#FBFBFB]",
  },
  {
    name: "Ingles Conversacional",
    color: "bg-[#edf3ea]",
    textColor: "text-[#1D1F1E]",
    image: "/physics.svg",
    iconColor: "text-[#1D1F1E]",
  },
  {
    name: "Programación Web",
    color: "bg-[#e4e9d5]",
    textColor: "text-[#1D1F1E]",
    image: "/math.svg",
    iconColor: "text-[#1D1F1E]",
  },
  {
    name: "Ciencias Naturales",
    color: "bg-[#191a23]",
    textColor: "text-[#FBFBFB]",
    image: "/physics.svg",
    iconColor: "text-[#FBFBFB]",
  },
];

export default function SubjectsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 text-center">
      
      {/* Título */}
      <h2 className="mt-4 text-5xl md:text-6xl font-bold text-[#1D1F1E] max-w-5xl mx-auto">
        Convierte cada materia en una oportunidad para crecer y mejorar
      </h2>

      {/* Descripción */}
      <p className="text-[#1D1F1E] mt-4 mb-15 text-lg max-w-4xl mx-auto">
        Millones de estudiantes. Más de 100.000 profesores. Progresa de manera personal (y demostrada).
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {subjects.map((subject, index) => (
            <div
            key={index}
            className={`
                ${subject.color}
                ${subject.textColor}
                rounded-3xl
                border-2 border-black
                shadow-[6px_6px_0px_#000]
                p-6
                flex justify-between items-center
                hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_#000]
                transition
            `}
            >
            
            {/* LEFT */}
            <div className="flex flex-col justify-between h-full">
                <h3 className="text-xl font-semibold max-w-[160px] text-left">
                {subject.name}
                </h3>

                <div className="flex items-center gap-2 mt-6 group cursor-pointer">

                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    
                    <svg
                    className={`w-5 h-5 ${subject.iconColor} group-hover:translate-x-1 transition`}
                    fill="none"
                    viewBox="0 0 24 24"
                    >
                    <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>

                </div>

                <span className="text-sm font-medium">Learn more</span>

                </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-32 h-32 relative">
                <Image
                src={subject.image}
                alt={subject.name}
                fill
                className="object-contain"
                />
            </div>

            </div>
        ))}
        </div>

    </section>
  );
}