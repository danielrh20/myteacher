"use client";
import { useEffect } from "react";
import Link from "next/link";


export default function StudentDashboard() {
    useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (!user || user.role !== "student") {
      window.location.href = "/auth";
    }
  }, []);
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-[#1D1F1E]">
          Hola, Daniel 👋
        </h1>

        <Link href="/tutors">
          <button className="
            bg-[#D3F954]
            px-6 py-3
            rounded-xl
            font-bold text-[#144424]

            border-2 border-black
            shadow-[4px_4px_0px_#000]

            hover:translate-x-[2px] hover:translate-y-[2px]
            hover:shadow-[2px_2px_0px_#000]
            transition
          ">
            Buscar tutor
          </button>
        </Link>
      </div>

      {/* BUSCADOR */}
      <div className="mb-10">
        <input
          placeholder="Buscar por materia..."
          className="w-full border-2 border-black rounded-xl px-4 py-3 outline-none text-[#144424]"
        />
      </div>

      {/* PRÓXIMAS CLASES */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-[#144424]">Próximas clases</h2>

        <div className="grid md:grid-cols-2 gap-6 text-[#144424]">
          <div className="p-5 border-2 border-black rounded-xl shadow-[4px_4px_0px_#000]">
            <p className="font-bold">Matemáticas</p>
            <p className="text-sm">Hoy - 4:00 PM</p>
          </div>
        </div>
      </section>

      {/* RECOMENDADOS */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-[#144424]">Tutores recomendados</h2>

        <div className="grid md:grid-cols-3 gap-6 text-[#144424]">
          <div className="p-5 border-2 border-black rounded-xl shadow-[4px_4px_0px_#000]">
            <p className="font-bold">Juan Pérez</p>
            <p className="text-sm">Matemáticas</p>
          </div>
        </div>
      </section>

    </main>
  );
}