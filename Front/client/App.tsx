import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PasswordRecovery from "./pages/PasswordRecovery";
import Peripherals from "./pages/Peripherals";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/recuperar-senha" element={<PasswordRecovery />} />
          <Route path="/perifericos" element={<Peripherals />} />
          <Route path="/produtos/:category" element={<ProductListing />} />
          <Route path="/produto/:id" element={<ProductDetails />} />
          <Route path="/sobre" element={<Placeholder title="Sobre" />} />
          <Route path="/ajuda" element={<Placeholder title="Ajuda" />} />
          <Route path="/contato" element={<Placeholder title="Contato" />} />
          <Route path="/politicas-de-privacidade" element={<Placeholder title="Políticas de Privacidade" />} />
          <Route path="/ofertas" element={<Placeholder title="Ofertas" />} />
          <Route path="/categoria/:name" element={<Placeholder title="Categoria" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
