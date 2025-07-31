import Image from "next/image";
import logo from "../../src/assets/images/Digitar_Media_logo_White_Hexagon.png"


export const NewNav = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-2 shadow-2xl">
        <div className="flex items-center justify-between max-w-4xl">
          {/* Left Links */}
          <div className="flex items-center space-x-8">
            <a
              href="#services"
              className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Services
            </a>

            <a
              href="#about"
              className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105"
            >
              About
            </a>
          </div>

          {/* Center Logo */}
          <div className="mx-12">
            <div className="w-12 h-12 flex items-center justify-center transition-all duration-300 group">
              <Image src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            </div>
          </div>

          {/* Right Links */}
          <div className="flex items-center space-x-8">
            <a
              href="#blog"
              className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
