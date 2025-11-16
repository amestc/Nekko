import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  const categories = [
    {
      name: "Hardware",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b468b0b329d5094ac352ee7b78bed670a849d284?width=306",
    },
    {
      name: "Periféricos",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/957ee892e0796795bf6bf4c09d9b9081ea0a05e8?width=426",
    },
    {
      name: "Computadores",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/cde10017bf7ece2ac9c830c941ead8a6481dcb4c?width=440",
    },
    {
      name: "Monitores",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f508278ffc2f552910648f720f23713608332b45?width=280",
    },
    {
      name: "Eletronicos",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e5d4ced3d6e5aceded5032e630d6a94ab9a116d9?width=270",
    },
    {
      name: "Outros",
      text: "...",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col nekko-gradient">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/00836d553ab25606b3795c0bdfbc877d0530bd34?width=3846" 
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="bg-nekko-blue-dark py-8 md:py-16">
          <div className="max-w-[1440px] mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-white font-pixel text-xl md:text-[36px] leading-tight mb-6 md:mb-8">
                  As melhores peças de PC em um só lugar!
                </h2>
                <Link
                  to="/ofertas"
                  className="inline-block px-8 py-3 md:px-12 md:py-4 border border-nekko-blue-dark bg-gradient-to-r from-[#0055E6] to-[#002F80] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-white font-pixel text-sm md:text-[20px] hover:opacity-90 transition-opacity"
                >
                  VER OFERTAS
                </Link>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f9a6c9ab51e9501c2d543ff61c32471b1267da3a?width=688" 
                  alt="NEKKO Mascot"
                  className="w-[200px] h-[200px] md:w-[344px] md:h-[344px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-8 md:py-12">
          <div className="max-w-[1440px] mx-auto px-4">
            <h3 className="text-white font-pixel text-base md:text-[20px] mb-4 md:mb-6">
              CATEGORIAS
            </h3>
            <div className="h-[2px] w-[200px] bg-white mb-6 md:mb-8"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={`/categoria/${category.name.toLowerCase()}`}
                  className="group"
                >
                  <div className="bg-[#E8E8E8] border-r-2 border-black aspect-square flex items-center justify-center hover:bg-white transition-colors relative overflow-hidden">
                    {category.image ? (
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-contain p-2"
                      />
                    ) : (
                      <span className="text-nekko-blue-dark font-pixel text-4xl md:text-[48px]">
                        {category.text}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-nekko-blue-dark font-pixel text-xs md:text-[15px]">
                      {category.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-8 md:py-12 pb-16 md:pb-24">
          <div className="max-w-[1440px] mx-auto px-4">
            <h3 className="text-white font-pixel text-base md:text-[20px] mb-4 md:mb-6">
              PRODUTOS EM DESTAQUE
            </h3>
            <div className="h-[2px] w-[400px] max-w-full bg-white mb-6 md:mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[500px]">
              {[1, 2].map((item) => (
                <div key={item} className="bg-[#E8E8E8] border-r border-black">
                  <div className="bg-nekko-blue-dark w-[78px] h-[73px] mx-auto mt-4"></div>
                  <div className="p-4 space-y-2">
                    <div className="h-[2px] bg-black"></div>
                    <div className="h-[2px] bg-black w-2/3"></div>
                    <div className="h-[2px] bg-black w-1/2"></div>
                    <button className="w-full bg-nekko-blue-dark text-white font-pixel text-[4px] py-2 mt-4 hover:bg-opacity-90 transition-opacity">
                      ADICIONAR AO CARRINHO
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
