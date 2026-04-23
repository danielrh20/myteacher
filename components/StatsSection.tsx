export default function StatsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-[#D3F954] bg-[#144424] rounded-xl">
      
      {[
        { value: "+500", label: "Tutores" },
        { value: "+1200", label: "Estudiantes" },
        { value: "+3000", label: "Sesiones" },
        { value: "4.9", label: "Calificación" },
      ].map((item, index) => (
        
        <div
          key={index}
          className="group cursor-pointer transition transform hover:-translate-y-1 hover:scale-105"
        >
          <h3 className="text-4xl font-bold transition group-hover:text-white">
            {item.value}
          </h3>

          <p className="text-[#FBFBFB] text-sm opacity-80 group-hover:opacity-100 transition">
            {item.label}
          </p>
        </div>

      ))}
    </section>
  );
}