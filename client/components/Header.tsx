import { Link } from "react-router-dom";
import { ShoppingCart, User, MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/c4e248836c235e2a2627ffff6c95d7a0c5b42fb2?width=200" 
            alt="NEKKO Mascot" 
            className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
          />
          <h1 className="text-[#0B2A3E] font-pixel text-base md:text-[32px] leading-none">
            NEKKO
          </h1>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-[647px] relative hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar peça, modelo ou marca..."
              className="w-full h-[57px] px-12 border border-black bg-[#E8E8E8] shadow-[1px_1px_0_0_rgba(0,0,0,0.25)] text-sm md:text-base text-[#0D3E5D] text-opacity-60 font-pixel placeholder:text-[#0D3E5D] placeholder:text-opacity-60"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/03327d498aff6eb01acbadf462707c4e35712273?width=86" 
              alt="Search"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-[43px] h-[54px]"
            />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/4dfa036504f4254bc4cc0f395327212caabb87cc?width=150" 
              alt="Cart"
              className="w-[40px] h-[50px] md:w-[75px] md:h-[94px]"
            />
          </button>
          <button className="p-2">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7a3fbfdd82d2d15f755aebe4ea7be30b8865e9ca?width=236" 
              alt="User"
              className="w-[60px] h-[75px] md:w-[118px] md:h-[147px]"
            />
          </button>
          <button className="p-2">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/55bdad8a595f98267c53e3802b4458751dc5ed05?width=212" 
              alt="Messages"
              className="w-[55px] h-[70px] md:w-[106px] md:h-[133px]"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
