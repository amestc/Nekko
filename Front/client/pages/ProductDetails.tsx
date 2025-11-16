import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const thumbnails = [
    "https://api.builder.io/api/v1/image/assets/TEMP/ab18e70a2efb142e7e5e3f2012fd270fa86e2102?width=204",
    "https://api.builder.io/api/v1/image/assets/TEMP/73697b96675481995c32feeb17d63275a869b026?width=204",
    "https://api.builder.io/api/v1/image/assets/TEMP/352efcd332395fec7b80326c99cf5789c0864d1f?width=164"
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "HEADSET",
      category: "PERIFERICOS",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b83c007301bc24df4c88690eb01f1fc71a7bd831?width=134",
      price: "R$ 679,90",
      status: "ATIVO"
    },
    {
      id: 2,
      name: "COOLER",
      category: "HARDWARE",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/5f70bdb1fe9474b991dd9f22119a71fa11c7bdb7?width=178",
      price: "R$ 559,99",
      status: "INATIVO"
    },
    {
      id: 3,
      name: "WEBCAM",
      category: "PERIFERICOS",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e70d71fb1a30f55d3aa335181d215162458703f7?width=100",
      price: "R$ 197,90",
      status: "ATIVO"
    },
    {
      id: 4,
      name: "MONITOR",
      category: "HARDWARE",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b01e2568f15ba16abaa6ccaeb6d858730a2b7d88?width=152",
      price: "R$ 629,99",
      status: "ATIVO"
    }
  ];

  return (
    <div className="min-h-screen nekko-gradient">
      {/* Background Pattern */}
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/b8b1ad6a6d53129be8a8f107c159c82dd2ca8494?width=3846" 
        alt=""
        className="fixed inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative">
        <Header />

        {/* Main Content */}
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Images */}
            <div className="w-full lg:w-[527px]">
              {/* Main Image */}
              <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#103C65] p-8 mb-4">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/25eddfa883daddbbfb09ebe212759e4b0cb42fb8?width=1044" 
                  alt="Product"
                  className="w-full aspect-square object-contain"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4">
                {thumbnails.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-1 bg-white border-4 border-black shadow-[4px_4px_0_0_#103C65] p-2 hover:shadow-[6px_6px_0_0_#103C65] transition-shadow ${selectedImage === idx ? "ring-2 ring-[#0055E6]" : ""}`}
                  >
                    <img 
                      src={thumb} 
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full aspect-square object-contain"
                    />
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-4">
                <button className="text-white font-pixel text-base hover:opacity-70">
                  {"<"}
                </button>
                <button className="text-white font-pixel text-base hover:opacity-70">
                  {">"}
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1">
              <h1 className="text-white font-['Inter'] text-2xl md:text-[30px] font-extrabold italic mb-6">
                Headset Sem Fio Logitech Zone Vibe 100, Drivers 40 mm, USB, Bluetooth, PC, Mobile, Branco - 981-001218
              </h1>

              <div className="mb-6">
                <h2 className="text-white font-pixel text-xl mb-4">
                  ! SOBRE O PRODUTO
                </h2>
                <div className="text-white font-['Inter'] text-base font-semibold italic space-y-4">
                  <p>
                    <strong>Tecnologia e Precisão:</strong> Drivers de 40mm para áudio imersivo, com cancelamento de ruído via beamforming e DSP.
                  </p>
                  <p>
                    <strong>Design e Ergonomia:</strong> Ultraleve com 185g, almofadas de memória e ajuste confortável para uso prolongado.
                  </p>
                  <p>
                    <strong>Conectividade:</strong> Bluetooth multiponto com alcance de até 30m, compatível com diversas plataformas e USB.
                  </p>
                  <p>
                    <strong>Recursos Especiais:</strong> Microfone com funcionalidade flip-to-mute, equalizador customizável via Logi Tune e até 20 horas de áudio.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-white font-pixel text-2xl md:text-[32px]">
                  R$ 611,91
                </p>
              </div>

              <button className="w-full max-w-[300px] bg-[#103C65] border border-white shadow-[4px_4px_0_0_rgba(0,0,0,0.25)] py-4 text-white font-pixel text-base hover:bg-opacity-90 transition-opacity">
                COMPRAR
              </button>
            </div>
          </div>

          {/* Related Products Table */}
          <div className="mt-16">
            <h2 className="text-white font-pixel text-2xl mb-6">
              PRODUTOS RELACIONADOS
            </h2>

            <div className="bg-[#103C65] border border-white overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-4 p-4 border-b border-white">
                <div className="text-white font-pixel text-lg">PRODUTO</div>
                <div className="text-white font-pixel text-lg">NOME</div>
                <div className="text-white font-pixel text-lg">CATEGORIA</div>
                <div className="text-white font-pixel text-lg">PREÇO</div>
                <div className="text-white font-pixel text-lg">STATUS</div>
              </div>

              {/* Table Rows */}
              {relatedProducts.map((product) => (
                <div 
                  key={product.id}
                  className="grid grid-cols-5 gap-4 p-4 border-b border-[#1C6CA1] items-center hover:bg-[#0D3E5D] transition-colors"
                >
                  <div className="bg-[#D7EFFF] border border-[#1C6CA1] shadow-[4px_4px_2px_0_rgba(0,0,0,0.25)] p-2">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full aspect-square object-contain"
                    />
                  </div>
                  <div className="text-white font-pixel text-sm">{product.name}</div>
                  <div className="text-white font-pixel text-sm">{product.category}</div>
                  <div className="text-white font-pixel text-sm">{product.price}</div>
                  <div className="text-white font-pixel text-sm">{product.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
