import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-[#EDF3EA] border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-[#1D1F1E] font-bold">
        
        {/* Logo */}
        <Image src="/Isotipo.svg" alt="MyTeacher" width={70} height={40} />

        {/* Menu */}
        <nav className="flex items-center gap-6">
            
          <button className="text-sm">Buscar</button>
          <button className="bg-[#D3F954] px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 text-[#144424]">
        <Image 
            src="/Icon_Sign_In.svg" 
            alt="icon" 
            width={16} 
            height={16} 
        />
        Iniciar sesión
        </button>
        </nav>

      </div>
    </header>
  );
}