import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Peripherals() {
  const categories = [
    {
      name: "MOUSES",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ffa7ff69d380ff65e1703c4e47dc4d27894cbb41?width=436",
      link: "/produtos/mouses"
    },
    {
      name: "MONITORES",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ae0fbd0690b5a4014d276ec35004b85026d2350d?width=341",
      link: "/produtos/monitores"
    },
    {
      name: "TECLADOS",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0124919342a21407a248164e4dad5a85734fb1b6?width=421",
      link: "/produtos/teclados"
    },
    {
      name: "HEADSETS",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/36fc1416b134146611356bdf0ac384187ae0b7db?width=434",
      link: "/produtos/headsets"
    },
    {
      name: "SOM",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f6b846e458e0875edf0ac75fda630cd5d1376da7?width=474",
      link: "/produtos/som"
    },
    {
      name: "WEBCAMS",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3718e8585984458e4c89558eb8c6273ac776b376?width=355",
      link: "/produtos/webcams"
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
        src="https://api.builder.io/api/v1/image/assets/TEMP/f4efcb09bc7ebbd1494e1c0395b4836554615e0a?width=3846" 
        alt=""
        className="fixed inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative">
        <Header />

        {/* Page Title */}
        <div className="py-8 md:py-12">
          <h1 className="text-white text-stroke-black font-pixel text-2xl md:text-[36px] text-center">
            PERIFERICOS
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
                        className="text-white text-stroke-black font-pixel text-sm hover:underline block"
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
                {categories.map((category, idx) => (
                  <Link 
                    key={idx}
                    to={category.link}
                    className="group"
                  >
                    <div className="bg-white border-5 border-[#103C65] shadow-[4px_4px_0_0_rgba(0,0,0,0.25)] overflow-hidden hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.35)] transition-shadow">
                      {/* Category Name */}
                      <div className="p-4 text-center">
                        <h3 className="text-[#103C65] font-pixel text-base">
                          {category.name}
                        </h3>
                      </div>

                      {/* Category Image */}
                      <div className="flex items-center justify-center p-6 min-h-[200px]">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="max-w-full max-h-[180px] object-contain"
                        />
                      </div>

                      {/* View More Button */}
                      <div className="bg-[#103C65] py-3 flex items-center justify-center">
                        <span className="text-white text-stroke-black font-pixel text-[10px]">
                          ver mais
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mascot Decoration */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/62fa753313720c243987154b1f1772ca8e839e83?width=796" 
          alt=""
          className="fixed bottom-20 right-0 w-[200px] md:w-[398px] pointer-events-none opacity-80"
        />

        <Footer />
      </div>
    </div>
  );
}
