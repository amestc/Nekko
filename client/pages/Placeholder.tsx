import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <div className="min-h-screen flex flex-col nekko-gradient">
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/00836d553ab25606b3795c0bdfbc877d0530bd34?width=3846" 
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="text-center max-w-2xl">
            <h1 className="text-white font-pixel text-2xl md:text-4xl mb-6 text-stroke-black">
              {title}
            </h1>
            <p className="text-white font-pixel text-xs md:text-sm mb-8">
              Esta página está em construção.
            </p>
            <Link
              to="/"
              className="inline-block px-8 py-3 border border-nekko-blue-dark bg-gradient-to-r from-[#0055E6] to-[#002F80] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-white font-pixel text-sm hover:opacity-90 transition-opacity"
            >
              Voltar ao Início
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
