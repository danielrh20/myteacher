import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
      
      {/* Texto */}
      <div>
        <h1 className="text-[#1D1F1E] text-4xl md:text-5xl leading-tight">
        <span className="font-medium">Conecta con </span>
        <span className="bg-[#D3F954] px-2 rounded-xl font-bold">
            expertos
        </span>
        <span className="font-medium"> y aprende de </span>
        <span className="bg-[#D3F954] px-2 rounded-xl font-bold">
            verdad
        </span>

        </h1>

        <p className="text-[#1D1F1E] mt-6 font-regular leading-tight text-lg">
          Encuentra tutores verificados, agenda sesiones en minutos y
          empieza a mejorar desde la primera clase. 
          Sin complicaciones, sin perder tiempo,
          solo aprendizaje efectivo.
        </p>

        <button className="
          mt-6
          bg-[#D3F954]
          px-8 py-4
          rounded-xl
          font-bold
          text-[#144424]
          text-lg

          border-2 border-black

          transition
          hover:translate-x-[2px] hover:translate-y-[2px]
          hover:shadow-[3px_3px_0px_#000]

          active:translate-x-[6px] active:translate-y-[6px]
          active:shadow-none
        ">
          Reservar mi clase
        </button>
      </div>

      {/* Imagen */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/hero.jpg"
          alt="Tutor"
          fill
          className="object-cover rounded-xl"
        />
      </div>

    </section>
  );
}
