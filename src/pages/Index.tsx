import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react";
import AppSidebar from "@/components/AppSidebar";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import VideoResults from "@/components/VideoResults";
import SEOHead from "@/components/SEOHead";
import { type VideoResult } from "@/lib/youtube";
import moneyArticle from "@/assets/ganhar-dinheiro-youtube.jpg";
import ytIcon from "@/assets/premium-hero-play.jpg";



const homeFaq = [
  { question: "Como baixar vídeos do YouTube grátis?", answer: "Basta copiar o link do vídeo do YouTube, colar na barra de pesquisa do nosso site e clicar em 'Baixar Vídeo'. Em segundos, você verá as opções de qualidade disponíveis para download. Todo o processo é 100% gratuito e sem necessidade de cadastro." },
  { question: "Como converter vídeo do YouTube para MP3?", answer: "Cole o link do vídeo do YouTube no nosso site e clique em 'Baixar'. Na lista de formatos, selecione a opção 'MP3' com a qualidade desejada (128kbps, 192kbps ou 320kbps). O áudio será extraído automaticamente do vídeo." },
  { question: "Funciona no celular Android e iPhone?", answer: "Sim! Nossa plataforma é totalmente responsiva e funciona perfeitamente em qualquer navegador em Android e iOS. Não é necessário instalar nenhum aplicativo." },
  { question: "O site é seguro para usar?", answer: "Sim, absolutamente seguro. Utilizamos conexão criptografada SSL/TLS (HTTPS), não armazenamos dados pessoais e não exigimos cadastro." },
  { question: "Posso baixar vídeos em 4K e 8K?", answer: "Sim! Se o vídeo original estiver disponível em 4K (2160p) ou 8K (4320p), essas opções aparecerão na lista de formatos para download." },
];

const homeHowTo = [
  { name: "Copie o link do YouTube", text: "Abra o YouTube, acesse o vídeo desejado e copie o link completo da barra de endereço ou toque em 'Compartilhar' e depois em 'Copiar link'." },
  { name: "Cole o link no campo de busca", text: "Volte ao Baixar Vídeo YouTube e cole o link do vídeo, Short ou playlist no campo principal da página inicial." },
  { name: "Escolha o formato e a qualidade", text: "Selecione entre MP4 (720p, 1080p Full HD, 4K, 8K) para vídeo ou MP3/M4A (até 320 kbps) para áudio, conforme sua necessidade." },
  { name: "Clique em Baixar e salve o arquivo", text: "Clique no botão de download da qualidade escolhida. O arquivo será salvo diretamente no seu dispositivo, sem cadastro e sem limite de downloads." },
];

const Index = () => {
  const [videoResult, setVideoResult] = useState<VideoResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-background">
      <SEOHead
        title="Baixar Vídeo YouTube - Download 4K/8K Grátis | MP4, MP3"
        description="Baixe vídeos do YouTube em 4K, 8K, 1080p Full HD, MP3 e MP4. Plataforma premium, rápida e segura para download de vídeos, Shorts, playlists e áudio. 100% grátis, sem cadastro."
        keywords="baixar video youtube, baixar video youtube 4k, baixar video youtube 8k, baixar video youtube 1080p, download youtube mp4, youtube mp3, baixar musica youtube, baixar shorts, baixar playlist youtube"
        breadcrumbs={[{ name: "Início", url: "https://baixarvideoyoutube.com/" }]}
        faqItems={homeFaq}
        howToSteps={homeHowTo}
        howToName="Como baixar vídeos do YouTube em 4K, 8K e MP3"
      />
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AppHeader />
        <main className="flex-1 overflow-y-auto">
          <HeroSection
            onResult={setVideoResult}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
          <VideoResults result={videoResult} />

          {!videoResult && (
            <>
              {/* Artigo destaque */}
              <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-cinematic opacity-70" />
                <div className="relative max-w-5xl mx-auto">
                  <div className="text-center mb-12">
                    <span className="eyebrow text-primary">Conteúdo Premium</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-extrabold gradient-text">Como Ganhar Dinheiro com Youtube em 2026</h2>
                  </div>
                  <motion.article
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65 }}
                    className="card-premium rounded-3xl overflow-hidden group relative"
                  >
                    <div className="relative">
                      <img
                        src={moneyArticle}
                        alt="Conheça todas as maneiras de ganhar dinheiro no YouTube"
                        loading="lazy"
                        width={1664}
                        height={936}
                        className="w-full h-auto object-cover scale-[1.02] group-hover:scale-105 transition-premium duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      <div className="cinematic-veil" />
                      <div className="absolute inset-x-0 bottom-0 p-7 flex justify-center">
                        <button
                          onClick={() => navigate("/como-ganhar-dinheiro-no-youtube")}
                          className="inline-flex items-center gap-2.5 px-9 py-4 rounded-2xl gradient-red text-primary-foreground font-bold text-base shadow-button hover:shadow-button-hover transition-premium"
                        >
                          Saber Mais
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                </div>
              </section>


              <FeaturesGrid />

              {/* Supported formats */}
              <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[360px] rounded-full bg-primary/10 blur-[140px]" />
                </div>
                <div className="relative max-w-4xl mx-auto text-center">
                  <div className="relative w-28 h-28 mx-auto mb-7 rounded-3xl overflow-hidden shadow-elevated ring-1 ring-border/50">
                    <img src={ytIcon} alt="Player de vídeo premium" loading="lazy" width={1408} height={896} className="w-full h-full object-cover" />
                  </div>
                  <span className="eyebrow text-primary">Compatibilidade</span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-extrabold gradient-text mb-4">Todos os formatos suportados</h2>
                  <p className="text-lg text-muted-foreground mb-9">MP4, WebM, MP3, M4A — Vídeos, Shorts, Playlists e Canais</p>
                  <div className="flex flex-wrap justify-center gap-3.5">
                    {["MP4", "WebM", "MP3", "M4A", "8K", "4K", "1080p", "720p", "Shorts", "Playlist"].map((tag) => (
                      <span key={tag} className="glass-card px-6 py-3 rounded-2xl text-base font-semibold text-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

            </>
          )}

          {/* FAQ Preview */}
          {!videoResult && (
            <section className="relative py-20 px-4">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-11">
                  <span className="eyebrow text-primary">Dúvidas</span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-extrabold gradient-text mb-3">Perguntas Frequentes</h2>
                  <p className="text-lg text-muted-foreground">Dúvidas mais comuns sobre download de vídeos do YouTube</p>
                </div>
                <div className="space-y-3.5">
                  {homeFaq.map((item, i) => (
                    <div key={i} className="card-premium rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        aria-expanded={openFaq === i}
                        className="w-full flex items-center justify-between px-7 py-6 text-left transition-premium hover:bg-secondary/40"
                      >
                        <span className="text-lg font-semibold text-foreground pr-4">{item.question}</span>
                        {openFaq === i ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
                      </button>
                      {openFaq === i && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-7 pb-6">
                          <div className="hairline mb-5" />
                          <p className="text-base text-muted-foreground leading-relaxed">{item.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-center mt-10">
                  <button
                    onClick={() => navigate("/faq")}
                    className="inline-flex items-center gap-2.5 px-9 py-4 rounded-2xl gradient-red text-primary-foreground font-bold text-base shadow-button hover:shadow-button-hover transition-premium"
                  >
                    Ver todas as perguntas
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </section>
          )}


          <AppFooter />
        </main>
      </div>
    </div>
  );
};

export default Index;
