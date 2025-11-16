import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#103C65] w-full mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 py-3">
        <nav className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 lg:gap-16">
          <Link 
            to="/sobre" 
            className="text-white font-pixel text-xs md:text-[19px] hover:opacity-80 transition-opacity"
          >
            Sobre
          </Link>
          <Link 
            to="/ajuda" 
            className="text-white font-pixel text-xs md:text-[19px] hover:opacity-80 transition-opacity"
          >
            Ajuda
          </Link>
          <Link 
            to="/contato" 
            className="text-white font-pixel text-xs md:text-[19px] hover:opacity-80 transition-opacity"
          >
            Contato
          </Link>
          <Link 
            to="/politicas-de-privacidade" 
            className="text-white font-pixel text-xs md:text-[19px] hover:opacity-80 transition-opacity"
          >
            Politicas de privacidade
          </Link>
        </nav>
      </div>
    </footer>
  );
}
