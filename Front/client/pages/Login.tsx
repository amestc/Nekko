import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen nekko-gradient relative">
      {/* Background Pattern */}
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/d1c479501689950cc47c4835300a36d1873ff032?width=3846" 
        alt=""
        className="fixed inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Header */}
      <div className="relative bg-white h-[104px] flex items-center px-4">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/c4e248836c235e2a2627ffff6c95d7a0c5b42fb2?width=200" 
            alt="NEKKO" 
            className="w-[100px] h-[100px]"
          />
          <h1 className="text-[#0B2A3E] font-pixel text-[32px]">NEKKO</h1>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-[1081px]">
          {/* Login Modal */}
          <div className="bg-white border-2 border-[#A0A0A0] shadow-[2px_2px_0_0_#000]">
            {/* Modal Header */}
            <div className="bg-[#103C65] border-b-2 border-[#A0A0A0] shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-6 flex justify-between items-center">
              <h2 className="text-white font-pixel text-2xl">LOGIN</h2>
              <Link 
                to="/"
                className="w-[53px] h-[56px] border-3 border-[#3B3B3B] bg-[rgba(207,206,206,0.90)] flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <span className="text-[#5B5959] font-pixel text-xl">X</span>
              </Link>
            </div>

            {/* Modal Body */}
            <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
              {/* Mascot */}
              <div className="flex-shrink-0">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1e39fe1da2f2b4f01be7f056b737228e381733d2?width=672" 
                  alt="NEKKO Mascot"
                  className="w-[250px] md:w-[336px]"
                />
              </div>

              {/* Form */}
              <div className="flex-1 w-full max-w-[715px]">
                <form className="space-y-6">
                  {/* Email */}
                  <div>
                    <label className="block text-black font-pixel text-xl mb-4">
                      E-MAIL
                    </label>
                    <input
                      type="email"
                      className="w-full h-[72px] px-4 border border-black bg-[#E8E8E8] shadow-[1px_1px_0_0_rgba(0,0,0,0.25)] font-pixel text-base focus:outline-none focus:ring-2 focus:ring-[#0055E6]"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-black font-pixel text-xl mb-4">
                      SENHA
                    </label>
                    <input
                      type="password"
                      className="w-full h-[72px] px-4 border border-black bg-[#E8E8E8] shadow-[1px_1px_0_0_rgba(0,0,0,0.25)] font-pixel text-base focus:outline-none focus:ring-2 focus:ring-[#0055E6]"
                    />
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-[21px] h-[23px] border-3 border-[#103C65] bg-white"
                      />
                      <span className="text-black font-pixel text-xs">
                        LEMBRAR MEUS DADOS
                      </span>
                    </label>
                    <Link 
                      to="/recuperar-senha"
                      className="text-black font-pixel text-xs hover:underline"
                    >
                      ESQUECEU A SENHA?
                    </Link>
                  </div>

                  {/* Enter Button */}
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      className="w-[238px] h-[57px] border border-black bg-[#E8E8E8] shadow-[1px_1px_0_0_rgba(0,0,0,0.25)] text-black font-pixel text-xl hover:bg-gray-300 transition-colors"
                    >
                      ENTRAR
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-4 py-4">
                    <div className="flex-1 h-[1px] bg-black"></div>
                    <span className="text-black font-pixel text-xl">OU</span>
                    <div className="flex-1 h-[1px] bg-black"></div>
                  </div>

                  {/* Social & Sign Up Buttons */}
                  <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                    <button
                      type="button"
                      className="w-[238px] h-[57px] border border-black bg-[#E8E8E8] shadow-[1px_1px_0_0_rgba(0,0,0,0.25)] flex items-center justify-center gap-3 hover:bg-gray-300 transition-colors"
                    >
                      <img 
                        src="https://api.builder.io/api/v1/image/assets/TEMP/1677414ff463628c9a543ce37588396d8946fb7a?width=262" 
                        alt="Google"
                        className="w-8 h-8"
                      />
                      <span className="text-black font-pixel text-base">GOOGLE</span>
                    </button>
                    <Link
                      to="/cadastro"
                      className="w-[238px] h-[57px] border border-black bg-[#E8E8E8] shadow-[1px_1px_0_0_rgba(0,0,0,0.25)] flex items-center justify-center text-black font-pixel text-base hover:bg-gray-300 transition-colors"
                    >
                      CADASTRE-SE
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

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
