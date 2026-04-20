import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#667D6E] text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + texto */}
        <div className="lg:col-span-1">
          <Image
            src="/Logotipo My Teacher2.svg"
            alt="MyTeacher"
            width={140}
            height={40}
          />

          <p className="text-sm mt-4 text-[#E5E7EB] leading-relaxed max-w-xs">
            The proper Footer on proper time can preserve you protection.
            We assist you make sure everybody forward.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-5">
            {["facebook", "twitter", "instagram", "youtube"].map((icon) => (
              <div
                key={icon}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#D3F954] hover:scale-105 transition"
              >
                <Image
                  src={`/${icon}.svg`}
                  alt={icon}
                  width={16}
                  height={16}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 inline-block">
            Quick Link
            <span className="block w-8 h-[2px] bg-[#D3F954] mt-1"></span>
          </h4>

          <ul className="text-sm text-[#E5E7EB] space-y-2 mt-4">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Product</li>
          </ul>
        </div>

        {/* Blog */}
        <div>
          <h4 className="font-semibold mb-4 inline-block">
            Blog
            <span className="block w-8 h-[2px] bg-[#D3F954] mt-1"></span>
          </h4>

          <div className="text-sm text-[#E5E7EB] space-y-4 mt-4">
            <div>
              <p>People Saying About Footer.</p>
              <span className="text-xs text-[#C7D0CC]">8 Nov, 2021</span>
            </div>

            <div>
              <p>People Saying About Footer.</p>
              <span className="text-xs text-[#C7D0CC]">8 Nov, 2021</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-4 inline-block">
            Newsletter
            <span className="block w-8 h-[2px] bg-[#D3F954] mt-1"></span>
          </h4>

          <div className="flex items-center bg-[#819c67] rounded-md px-3 py-2 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-sm flex-1 placeholder:text-[#D3F954]"
            />
            <Image
              src="/send.svg"
              alt="send"
              width={18}
              height={18}
            />
          </div>

          <p className="text-sm text-[#E5E7EB] mt-4 leading-relaxed">
            Subscribe to our newsletter and unlock a world of exclusive benefits.
            Be the first to know about our latest products, special promotions,
            and exciting updates.
          </p>
        </div>

      </div>

      <div className="text-center text-sm text-[#D1D5DB] pb-6">
        © 2026 MyTeacher | All rights reserved
      </div>
    </footer>
  );
}