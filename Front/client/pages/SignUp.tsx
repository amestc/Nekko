import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <div className="min-h-screen nekko-gradient relative">
      {/* Background Pattern */}
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/658802972858fe92672c8b5f859316633263db77?width=3846" 
        alt=""
        className="fixed inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Header */}
      <div className="relative bg-white h-[104px] flex items-center px-4">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/897a1a0cef66748a4e7b63f9b046628dfa9f5b67?width=200" 
            alt="NEKKO" 
            className="w-[100px] h-[100px]"
          />
          <h1 className="text-[#0B2A3E] font-pixel text-[32px]">NEKKO</h1>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-[1081px]">
          {/* Sign Up Modal */}
          <div className="bg-white border-2 border-[#A0A0A0] shadow-[2px_2px_0_0_#000] mb-8">
            {/* Modal Header */}
            <div className="bg-[#103C65] border-b-2 border-[#A0A0A0] shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-6 flex justify-between items-center">
              <h2 className="text-white font-pixel text-2xl">CRIAR CONTA</h2>
              <Link 
                to="/"
                className="w-[53px] h-[54px] border-3 border-[#3B3B3B] bg-[rgba(207,206,206,0.90)] flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <span className="text-[#5B5959] font-pixel text-xl">X</span>
              </Link>
            </div>

            {/* Modal Body */}
            <div className="p-8 md:p-12">
              <form className="max-w-[894px] mx-auto space-y-6">
                {/* Full Name */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Nome completo*"
                    className="w-full h-[57px] px-12 border border-black bg-[#E8E8E8] shadow-[4px_4px_0_0_rgba(0,0,0,0.25)] font-pixel text-[10px] placeholder:text-[rgba(11,42,62,0.5)] focus:outline-none focus:ring-2 focus:ring-[#0055E6]"
                  />
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/3df55ce32203e9e289c9c2b09b656b78bf4c9219?width=62" 
                    alt=""
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[31px] h-[38px]"
                  />
                </div>

                {/* CPF */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="CPF*"
                    className="w-full h-[57px] px-12 border border-black bg-[#E8E8E8] shadow-[4px_4px_0_0_rgba(0,0,0,0.25)] font-pixel text-[10px] placeholder:text-[rgba(11,42,62,0.5)] focus:outline-none focus:ring-2 focus:ring-[#0055E6]"
                  />
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/451dc2e1982e692b8893047a0f9abf6b88043ab1?width=106" 
                    alt=""
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[53px] h-[53px]"
                  />
                </div>

                {/* Birth Date */}
                <div className="relative">
                  <input
                    type="date"
                    placeholder="Data de nascimento*"
                    className="w-full h-[57px] px-12 border border-black bg-[#E8E8E8] shadow-[4px_4px_0_0_rgba(0,0,0,0.25)] font-pixel text-[10px] placeholder:text-[rgba(11,42,62,0.5)] focus:outline-none focus:ring-2 focus:ring-[#0055E6]"
                  />
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/ffcbfc84a3aa8da2a7c6f1502b44fefa31987386?width=68" 
                    alt=""
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[34px] h-[43px]"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Telefone*"
                    className="w-full h-[57px] px-12 border border-black bg-[#E8E8E8] shadow-[4px_4px_0_0_rgba(0,0,0,0.25)] font-pixel text-[10px] placeholder:text-[rgba(11,42,62,0.5)] focus:outline-none focus:ring-2 focus:ring-[#0055E6]"
                  />
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/58d4055c7fe9fb1dd94a62d8a63db5a017ea5a9e?width=110" 
                    alt=""
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[55px] h-[69px]"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    placeholder="E-mail*"
                    className="w-full h-[57px] px-12 border border-black bg-[#E8E8E8] shadow-[4px_4px_0_0_rgba(0,0,0,0.25)] font-pixel text-[10px] placeholder:text-[rgba(11,42,62,0.5)] focus:outline-none focus:ring-2 focus:ring-[#0055E6]"
                  />
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/fd506f0402644016e9f40d87584eafd72e24b739?width=136" 
                    alt=""
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[68px] h-[85px]"
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Criar senha*"
                    className="w-full h-[57px] px-12 border border-black bg-[#E8E8E8] shadow-[4px_4px_0_0_rgba(0,0,0,0.25)] font-pixel text-[10px] placeholder:text-[rgba(11,42,62,0.5)] focus:outline-none focus:ring-2 focus:ring-[#0055E6]"
                  />
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/ac4a96cd7077b11a086a721f7e350cc95a531043?width=146" 
                    alt=""
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[73px] h-[91px]"
                  />
                </div>

                {/* Required Fields Notice */}
                <p className="text-[#103C65] font-pixel text-[10px]">
                  (*)Campos obrigatórios
                </p>

                {/* Terms Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="w-[15px] h-[15px] border-2 border-[#103C65] bg-white mt-1"
                  />
                  <span className="text-[#103C65] font-pixel text-[10px] flex-1">
                    Li e estou de acordo com as{" "}
                    <Link to="/politicas-de-privacidade" className="underline">
                      políticas da empresa e políticas de privacidade
                    </Link>
                    .*
                  </span>
                </label>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <button
                    type="submit"
                    className="w-[232px] h-[56px] border border-black bg-[#103C65] shadow-[1px_1px_0_0_rgba(0,0,0,0.25)] text-white font-pixel text-base text-stroke-black hover:bg-opacity-90 transition-opacity"
                  >
                    CONTINUAR
                  </button>
                </div>

                {/* Login Link */}
                <p className="text-center pt-4">
                  <span className="text-white font-pixel text-base">
                    Já possui cadastro?{" "}
                  </span>
                  <Link 
                    to="/login"
                    className="text-[#103C65] font-pixel text-base underline hover:no-underline"
                  >
                    ENTRAR
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Mascot */}
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/429b90ab953e989844da66d8c3127f54b7c8e85b?width=1184" 
        alt=""
        className="fixed bottom-0 right-0 w-[300px] md:w-[592px] pointer-events-none opacity-80"
      />

      {/* Footer */}
      <div className="relative bg-[#103C65] py-4">
        <div className="max-w-[1440px] mx-auto px-4 flex flex-wrap justify-center md:justify-start gap-6 md:gap-12">
          <Link to="/sobre" className="text-white font-pixel text-sm md:text-[19px] hover:underline">
            Sobre
          </Link>
          <Link to="/ajuda" className="text-white font-pixel text-sm md:text-[19px] hover:underline">
            Ajuda
          </Link>
          <Link to="/contato" className="text-white font-pixel text-sm md:text-[19px] hover:underline">
            Contato
          </Link>
          <Link to="/politicas-de-privacidade" className="text-white font-pixel text-sm md:text-[19px] hover:underline">
            Politicas de privacidade
          </Link>
        </div>
      </div>
    </div>
  );
}
