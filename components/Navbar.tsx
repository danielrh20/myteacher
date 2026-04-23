import Image from "next/image";
import Link from "next/link";

const logout = () => {
  localStorage.removeItem("user");
  window.location.href = "/";
};

export default function Navbar() {
  return (
    <header className="w-full bg-[#EDF3EA] border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-[#1D1F1E]">
        
        {/* Logo */}
        <Link href="/" className="cursor-pointer">
          <Image 
            src="/Isotipo.svg" 
            alt="MyTeacher" 
            width={70} 
            height={40} 
          />
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-6">

          {/* 🔍 BUSCADOR */}
          <div className="
            flex items-center
            bg-white
            border-2
            rounded-full
            px-4 py-2
            w-64
          ">
            <svg
              className="w-4 h-4 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M21 21L16.65 16.65M11 18A7 7 0 1 1 11 4a7 7 0 0 1 0 14Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <input
              type="text"
              placeholder="Buscar tutor..."
              className="outline-none text-sm w-full bg-transparent"
            />
          </div>

          {/* 🔐 LOGIN */}
          <Link href="/auth">
          <button className="
            flex items-center gap-2
            bg-[#D3F954]
            px-4 py-2
            rounded-xl
            text-sm font-bold text-[#144424]

            border-2 border-black

            transition
            hover:translate-x-[2px] hover:translate-y-[2px]
            hover:shadow-[2px_2px_0px_#000]

            active:translate-x-[4px] active:translate-y-[4px]
            active:shadow-none
          ">
            <Image 
              src="/Icon_Sign_In.svg" 
              alt="login" 
              width={16} 
              height={16} 
            />
            Iniciar sesión
          </button>
        </Link>
        </nav>
      </div>
    </header>
  );
}