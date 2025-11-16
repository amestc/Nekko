import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductListing() {
  const products = [
    {
      id: 1,
      name: "Headset Sem Fio Logitech Zone 300",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/197bf2535b23791eac02f9eb2362a6847f46c95e?width=424",
      price: "R$ 431,91"
    },
    {
      id: 2,
      name: "Headset Comunicador Profissional Com Bluetooth E Microfone K750w Edifier",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6f51d0418d70b17ae1689498658d1fab618f9ef4?width=352",
      price: "R$ 299,00"
    },
    {
      id: 3,
      name: "Headset Gamer TGT Diver V2, Rainbow, Drivers 40mm",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/450a602b91bc66c6098dc81a39dcff47020ded4b?width=358",
      price: "R$ 49,99"
    },
    {
      id: 4,
      name: "Headset Gamer Havit H2015d, Multiplataforma, Drivers 50mm, HVGMH.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/c6b949cc68c4e1f5f2d62530fff84211eccb319f?width=370",
      price: "R$ 149,99"
    },
    {
      id: 5,
      name: "Headset Sem Fio Logitech Zone Vibe 100, Drivers 40 mm, USB.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1e7ea112967463cec17429edc6ce78af15741e2b?width=440",
      price: "R$ 611,91"
    },
    {
      id: 6,
      name: "Razer Blackshark V2 X Com Fio 7.1 Surround Sound - Preto",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/580939a2bb0a35664cf252c1f546807073b533c1?width=326",
      price: "R$ 1079,10"
    }
  ];

  const priceRanges = [
    "R$ 0-100",
    "R$ 100-200",
    "R$ 200-400",
    "Acima de 500"
  ];

  return (
    <div className="min-h-screen nekko-gradient">
      {/* Background Pattern */}
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/bab92cd11234aab99c0e2cb6ca61968b6930433a?width=3846" 
        alt=""
        className="fixed inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative">
        <Header />

        {/* Page Title */}
        <div className="py-8 md:py-12">
          <h1 className="text-white text-stroke-black font-pixel text-2xl md:text-[32px] text-center">
            HEADSET
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-[1440px] mx-auto px-4 pb-16">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <aside className="w-full md:w-[225px] flex-shrink-0">
              <div className="border-3 border-[#0B2A3E] bg-[#103C65] p-6">
                {/* Categories */}
                <h2 className="text-white text-stroke-black font-pixel text-base underline mb-4">
                  CATEGORIAS
                </h2>
                <ul className="space-y-3 mb-8">
                  {["mouses", "monitores", "teclados", "headsets", "caixas de som", "webcams"].map((cat, idx) => (
                    <li key={idx}>
                      <Link 
                        to={`/produtos/${cat}`}
                        className={`text-white text-stroke-black font-pixel text-sm hover:underline block ${cat === "headsets" ? "underline decoration-wavy" : ""}`}
                      >
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Price Filters */}
                <h2 className="text-white text-stroke-black font-pixel text-base underline mb-4">
                  PREÇOS
                </h2>
                <div className="space-y-3">
                  {priceRanges.map((range, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="w-[15px] h-[14px] border-3 border-white"
                      />
                      <span className="text-[#F1F1F1] text-stroke-black font-pixel text-sm">
                        {range}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div 
                    key={product.id}
                    className="group"
                  >
                    <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#103C65] overflow-hidden hover:shadow-[6px_6px_0_0_#103C65] transition-shadow flex flex-col h-full">
                      {/* Product Image */}
                      <div className="flex items-center justify-center p-6 min-h-[250px] bg-white">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="max-w-full max-h-[200px] object-contain"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="bg-[#103C65] p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-white text-stroke-black font-pixel text-[8px] leading-tight mb-3 min-h-[40px]">
                            {product.name}
                          </h3>
                          <p className="text-white text-stroke-black font-pixel text-xs mb-3">
                            {product.price}
                          </p>
                        </div>
                        
                        <Link
                          to={`/produto/${product.id}`}
                          className="w-full bg-[#16537B] border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.25)] py-2 text-white text-stroke-black font-pixel text-xs text-center hover:bg-opacity-90 transition-opacity block"
                        >
                          COMPRAR
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
