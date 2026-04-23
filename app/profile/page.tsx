export default function ProfilePage() {
  const role = "tutor"; // cambia a "student" para probar

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">

      {/* HEADER */}
      <div className="flex items-center gap-4 mb-10">
        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>

        <div>
          <h1 className="text-2xl font-bold">Juan Pérez</h1>
          <p className="text-sm text-gray-600">juan@email.com</p>
        </div>
      </div>

      {/* FORM */}
      <div className="flex flex-col gap-4">

        <input
          placeholder="Nombre"
          className="border-2 border-black rounded-xl px-4 py-2"
        />

        <input
          placeholder="Correo"
          className="border-2 border-black rounded-xl px-4 py-2"
        />

        <input
          placeholder="Contraseña"
          type="password"
          className="border-2 border-black rounded-xl px-4 py-2"
        />

        {/* SOLO TUTOR */}
        {role === "tutor" && (
          <>
            <input
              placeholder="Materia"
              className="border-2 border-black rounded-xl px-4 py-2"
            />

            <input
              placeholder="Precio por hora"
              className="border-2 border-black rounded-xl px-4 py-2"
            />

            <textarea
              placeholder="Bio / experiencia"
              className="border-2 border-black rounded-xl px-4 py-2"
            />
          </>
        )}

        {/* BUTTON */}
        <button className="
          mt-4
          bg-[#D3F954]
          py-3
          rounded-xl
          font-bold text-[#144424]

          border-2 border-black
          shadow-[4px_4px_0px_#000]

          hover:translate-x-[2px] hover:translate-y-[2px]
          hover:shadow-[2px_2px_0px_#000]
          transition
        ">
          Guardar cambios
        </button>

      </div>

    </main>
  );
}