import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import Videos from "./pages/Videos.tsx";
import Shorts from "./pages/Shorts.tsx";
import Audio from "./pages/Audio.tsx";
import Playlist from "./pages/Playlist.tsx";
import Canais from "./pages/Canais.tsx";
import Downloads from "./pages/Downloads.tsx";
import UsoResponsavel from "./pages/UsoResponsavel.tsx";
import Privacidade from "./pages/Privacidade.tsx";
import Termos from "./pages/Termos.tsx";
import Cookies from "./pages/Cookies.tsx";
import DMCA from "./pages/DMCA.tsx";
import Contato from "./pages/Contato.tsx";
import Sobre from "./pages/Sobre.tsx";
import FAQ from "./pages/FAQ.tsx";
import NotFound from "./pages/NotFound.tsx";
import BaixarVideosInstagram from "./pages/partners/BaixarVideosInstagram.tsx";
import BaixarVideosTiktok from "./pages/partners/BaixarVideosTiktok.tsx";
import BaixarVideosFacebook from "./pages/partners/BaixarVideosFacebook.tsx";
import BaixarVideosTwitter from "./pages/partners/BaixarVideosTwitter.tsx";
import BaixarVideosKwai from "./pages/partners/BaixarVideosKwai.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/audio" element={<Audio />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/canais" element={<Canais />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/uso-responsavel" element={<UsoResponsavel />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/dmca" element={<DMCA />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/baixar-videos-instagram" element={<BaixarVideosInstagram />} />
            <Route path="/baixar-videos-tiktok" element={<BaixarVideosTiktok />} />
            <Route path="/baixar-videos-facebook" element={<BaixarVideosFacebook />} />
            <Route path="/baixar-videos-twitter" element={<BaixarVideosTwitter />} />
            <Route path="/baixar-videos-kwai" element={<BaixarVideosKwai />} />
            {/* Legacy URL redirects (fix Google Search Console 404s) */}
            <Route path="/Principal" element={<Navigate to="/" replace />} />
            <Route path="/principal" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
