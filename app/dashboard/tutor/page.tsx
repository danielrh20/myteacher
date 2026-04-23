"use client";
import { useEffect } from "react";

export default function TutorDashboard() {
    useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (!user || user.role !== "tutor") {
      window.location.href = "/auth";
    }
  }, []);
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-[#1D1F1E]">
          Hola, Juan 👋
        </h1>

        <span className="
          px-4 py-2 rounded-xl text-sm font-bold
          bg-[#D3F954] text-[#144424]
          border-2 border-black
          shadow-[4px_4px_0px_#000]
        ">
          Disponible
        </span>
      </div>

      {/* AGENDA */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-[#144424]">Agenda de hoy</h2>

        <div className="grid md:grid-cols-2 gap-6 text-[#144424]">
          <div className="p-5 border-2 border-black rounded-xl shadow-[4px_4px_0px_#000]">
            <p className="font-bold">Matemáticas - Juan Pérez</p>
            <p className="text-sm">4:00 PM - 5:00 PM</p>
          </div>
        </div>
      </section>

      {/* SOLICITUDES */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-[#144424]">Solicitudes</h2>

        <div className="grid md:grid-cols-2 gap-6 text-[#144424]">
          <div className="p-5 border-2 border-black rounded-xl shadow-[4px_4px_0px_#000]">
            <p className="font-bold">Carlos Ruiz</p>
            <p className="text-sm mb-4">Quiere clase de Física</p>

            <div className="flex gap-3 ">
              <button className="bg-[#D3F954] px-4 py-2 rounded-xl border-2 border-black shadow-[3px_3px_0px_#000]">
                Aceptar
              </button>
              <button className="px-4 py-2 rounded-xl border-2 border-black">
                Rechazar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-[#144424]">Resumen</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[#144424]">

          <div className="p-4 border-2 border-black rounded-xl shadow-[4px_4px_0px_#000]">
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm">Sesiones</p>
          </div>

          <div className="p-4 border-2 border-black rounded-xl shadow-[4px_4px_0px_#000]">
            <p className="text-2xl font-bold">4.9</p>
            <p className="text-sm">Rating</p>
          </div>

          <div className="p-4 border-2 border-black rounded-xl shadow-[4px_4px_0px_#000]">
            <p className="text-2xl font-bold">$120</p>
            <p className="text-sm">Ingresos</p>
          </div>

        </div>
      </section>

    </main>
  );
}