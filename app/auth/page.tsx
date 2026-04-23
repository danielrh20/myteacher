"use client";

import { useState } from "react";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [role, setRole] = useState<"student" | "tutor" | null>(null);

  const handleAuth = () => {
  if (!role) return alert("Selecciona un rol");

  const user = {
    role, // "student" o "tutor"
  };

  localStorage.setItem("user", JSON.stringify(user));

  // redirección
  if (role === "student") {
    window.location.href = "/dashboard/student";
  } else {
    window.location.href = "/dashboard/tutor";
  }
};

  return (
    <PageTransition>
        <div className="min-h-screen grid md:grid-cols-2">

        {/* LEFT - Branding */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#144424] text-white p-10">
            <Image src="/Isotipo.svg" alt="logo" width={80} height={80} />
            
            <h2 className="mt-6 text-3xl font-bold text-center">
            Bienvenido a MyTeacher
            </h2>

            <p className="mt-4 text-sm text-center max-w-sm text-[#D3F954]">
            Conecta con expertos, aprende más rápido y lleva tu conocimiento al siguiente nivel.
            </p>
        </div>

        {/* RIGHT - Form */}
        <div className="flex justify-center items-center px-6 py-12 bg-[#EDF3EA]">

            <div className="
            w-full max-w-md
            bg-white
            p-8
            rounded-2xl
            border-2 border-black
            shadow-[6px_6px_0px_#000]
            ">

            <h1 className="text-2xl font-bold text-center text-[#1D1F1E]">
                {isRegister ? "Crear cuenta" : "Iniciar sesión"}
            </h1>

            {/* FORM */}
            <div className="mt-6 flex flex-col gap-4">

                <input
                type="email"
                placeholder="Correo electrónico"
                className="border-2 border-black rounded-xl px-4 py-2 outline-none text-[#1D1F1E]"
                />

                <input
                type="password"
                placeholder="Contraseña"
                className="border-2 border-black rounded-xl px-4 py-2 outline-none text-[#1D1F1E]"
                />

                {/* ROLE (solo registro) */}
                {isRegister && (
                <div className="mt-2">
                    <p className="text-sm mb-2 font-medium text-[#1D1F1E]">
                    ¿Cómo quieres usar MyTeacher?
                    </p>

                    <div className="flex gap-3">
                    
                    <button
                        onClick={() => setRole("student")}
                        className={`
                        flex-1 py-2 rounded-xl border-2 border-black font-bold text-[#1D1F1E]
                        ${role === "student" ? "bg-[#D3F954]" : "bg-white"}
                        `}
                    >
                        Estudiante
                    </button>

                    <button
                        onClick={() => setRole("tutor")}
                        className={`
                        flex-1 py-2 rounded-xl border-2 border-black font-bold text-[#1D1F1E]
                        ${role === "tutor" ? "bg-[#D3F954]" : "bg-white"}
                        `}
                    >
                        Tutor
                    </button>

                    </div>
                </div>
                )}

                {/* BUTTON */}
                <button onClick={handleAuth} className="
                mt-4
                bg-[#D3F954]
                py-3
                rounded-xl
                font-bold text-[#144424]

                border-2 border-black
                shadow-[4px_4px_0px_#000]

                transition
                hover:translate-x-[2px] hover:translate-y-[2px]
                hover:shadow-[2px_2px_0px_#000]

                active:translate-x-[4px] active:translate-y-[4px]
                active:shadow-none
                ">
                {isRegister ? "Registrarme" : "Entrar"}
                </button>

            </div>

            {/* SWITCH */}
            <p className="text-sm text-center mt-6 text-[#1D1F1E]">
                {isRegister ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
                <span
                onClick={() => setIsRegister(!isRegister)}
                className="font-bold cursor-pointer underline"
                >
                {isRegister ? "Inicia sesión" : "Regístrate"}
                </span>
            </p>

            </div>
        </div>
        </div>
    </PageTransition>
  );
}