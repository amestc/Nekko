import { Link } from "react-router-dom";

export default function PasswordRecovery() {
  return (
    <div className="min-h-screen nekko-gradient relative">
      {/* Background Pattern */}
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/2b216c817136f4d38606ef717d4da55457ec1d1b?width=3846" 
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
      <div className="relative flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-[1081px]">
          {/* Recovery Modal */}
          <div className="bg-white border-2 border-[#A0A0A0] shadow-[2px_2px_0_0_#000]">
            {/* Modal Header */}
            <div className="bg-[#103C65] border-b-2 border-[#A0A0A0] shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-6 flex justify-between items-center">
              <h2 className="text-white font-pixel text-xl md:text-2xl">
                RECUPERAR SENHA
              </h2>
              <Link 
                to="/"
                className="w-[53px] h-[54px] border-3 border-[#3B3B3B] bg-[rgba(207,206,206,0.90)] flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <span className="text-[#5B5959] font-pixel text-xl">X</span>
              </Link>
            </div>

            {/* Modal Body */}
            <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
              {/* Mascot */}
              <div className="flex-shrink-0">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ff236dafd8d9887dcdebe3f9d63575f4192ffc53?width=690" 
                  alt="NEKKO Mascot"
                  className="w-[250px] md:w-[345px]"
                />
              </div>

              {/* Form */}
              <div className="flex-1 w-full max-w-[676px]">
                <form className="space-y-6">
                  <p className="text-black font-pixel text-base mb-6">
                    Digite seu e-mail para receber o link de recuperação
                  </p>

                  {/* Email Input */}
                  <input
                    type="email"
                    placeholder="seu e-mail cadastrado"
                    className="w-full h-[69px] px-4 border border-black bg-[#E8E8E8] shadow-[4px_4px_0_0_rgba(0,0,0,0.25)] font-pixel text-base placeholder:text-[rgba(0,0,0,0.7)] focus:outline-none focus:ring-2 focus:ring-[#0055E6]"
                  />

                  {/* reCAPTCHA Placeholder */}
                  <div className="h-[84px] border border-black bg-[#E8E8E8] shadow-[4px_4px_0_0_rgba(0,0,0,0.25)] flex items-center justify-center">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/c05ec5237f9692ef8ca3650846d7145c930360b9?width=700" 
                      alt="reCAPTCHA"
                      className="w-full h-full object-cover rounded-[10px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      className="w-[241px] h-[43px] border-3 border-black bg-[#103C65] shadow-[4px_4px_0_0_rgba(0,0,0,0.25)] text-white font-pixel text-base hover:bg-opacity-90 transition-opacity"
                    >
                      enviar link
                    </button>
                  </div>

                  {/* Back to Login */}
                  <div className="text-center pt-4">
                    <Link 
                      to="/login"
                      className="text-black font-pixel text-xs underline hover:no-underline"
                    >
                      voltar ao login
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
