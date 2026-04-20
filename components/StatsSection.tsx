export default function StatsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-[#D3F954] bg-[#144424] rounded-xl">
      
      <div>
        <h3 className="text-4xl font-bold">+500</h3>
        <p className="text-[#FBFBFB] text-sm">Tutores</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold">+1200</h3>
        <p className="text-[#FBFBFB] text-sm">Estudiantes</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold">+3000</h3>
        <p className="text-[#FBFBFB] text-sm">Sesiones</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold">4.9</h3>
        <p className="text-[#FBFBFB] text-sm">Calificación</p>
      </div>

    </section>
  );
}