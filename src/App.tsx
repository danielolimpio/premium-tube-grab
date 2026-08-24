import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import { HtmlLangSync } from "@/i18n";
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
import GanharDinheiroYoutube from "./pages/GanharDinheiroYoutube.tsx";
import NotFound from "./pages/NotFound.tsx";
import BaixarVideosInstagram from "./pages/partners/BaixarVideosInstagram.tsx";
import BaixarVideosTiktok from "./pages/partners/BaixarVideosTiktok.tsx";
import BaixarVideosFacebook from "./pages/partners/BaixarVideosFacebook.tsx";
import BaixarVideosTwitter from "./pages/partners/BaixarVideosTwitter.tsx";
import BaixarVideosKwai from "./pages/partners/BaixarVideosKwai.tsx";

const queryClient = new QueryClient();

/** Rotas base (sem prefixo de idioma) */
const appRoutes: { path: string; element: JSX.Element }[] = [
  { path: "/", element: <Index /> },
  { path: "/videos", element: <Videos /> },
  { path: "/shorts", element: <Shorts /> },
  { path: "/audio", element: <Audio /> },
  { path: "/playlist", element: <Playlist /> },
  { path: "/canais", element: <Canais /> },
  { path: "/downloads", element: <Downloads /> },
  { path: "/uso-responsavel", element: <UsoResponsavel /> },
  { path: "/privacidade", element: <Privacidade /> },
  { path: "/termos", element: <Termos /> },
  { path: "/cookies", element: <Cookies /> },
  { path: "/dmca", element: <DMCA /> },
  { path: "/contato", element: <Contato /> },
  { path: "/sobre", element: <Sobre /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/como-ganhar-dinheiro-no-youtube", element: <GanharDinheiroYoutube /> },
  { path: "/baixar-videos-instagram", element: <BaixarVideosInstagram /> },
  { path: "/baixar-videos-tiktok", element: <BaixarVideosTiktok /> },
  { path: "/baixar-videos-facebook", element: <BaixarVideosFacebook /> },
  { path: "/baixar-videos-twitter", element: <BaixarVideosTwitter /> },
  { path: "/baixar-videos-kwai", element: <BaixarVideosKwai /> },
];

const renderRoutes = (prefix = "") =>
  appRoutes.map(({ path, element }) => (
    <Route
      key={`${prefix}${path}`}
      path={prefix && path === "/" ? prefix : `${prefix}${path}`}
      element={element}
    />
  ));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <HtmlLangSync />
          <Routes>
            {renderRoutes()}
            {renderRoutes("/en")}
            {renderRoutes("/es")}
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
