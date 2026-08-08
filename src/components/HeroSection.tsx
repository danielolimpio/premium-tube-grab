import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Clipboard, X, Music, Smartphone, FolderOpen, Play, Loader2, ShieldCheck, Sparkles, Infinity as InfinityIcon } from "lucide-react";
import { fetchVideoInfo, type VideoResult } from "@/lib/youtube";
import { toast } from "@/hooks/use-toast";
import Disclaimer from "@/components/Disclaimer";
import heroCinematic from "@/assets/premium-hero-play.jpg";

interface HeroSectionProps {
  onResult: (result: VideoResult) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export default function HeroSection({ onResult, isLoading, setIsLoading }: HeroSectionProps) {
  const [url, setUrl] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch {
      toast({ title: "Erro", description: "Não foi possível acessar a área de transferência", variant: "destructive" });
    }
  };

  const handleDownload = async (type?: string) => {
    const targetUrl = url.trim();
    if (!targetUrl) {
      toast({ title: "Erro", description: "Cole um link do YouTube primeiro", variant: "destructive" });
      return;
    }

    setIsLoading(true);
    try {
      const result = await fetchVideoInfo(targetUrl, type);
      if (result.success) {
        onResult(result);
        toast({ title: "Sucesso!", description: `"${result.title}" encontrado com sucesso` });
      } else {
        toast({ title: "Erro", description: result.error || "Falha ao processar o vídeo", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Erro", description: "Falha na conexão com o servidor", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden bg-cinematic">
      {/* Cinematic background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={heroCinematic}
          alt=""
          aria-hidden="true"
          width={1408}
          height={896}
          className="absolute inset-0 w-full h-full object-cover opacity-[0.22] dark:opacity-[0.38]"
          style={{ animation: "slow-zoom 26s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute inset-0 dot-grid opacity-[0.12]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full bg-primary/15 blur-[150px]" />
        <div className="cinematic-veil" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 mb-8 px-5 py-2.5 rounded-full glass-card eyebrow text-foreground/80"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          Download 4K · 8K · MP3
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text tracking-tight mb-7"
        >
          Baixar Vídeos do YouTube
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
        >
          A plataforma premium mais avançada para download de vídeos, Shorts e áudio do YouTube.
          Qualidade 4K/8K sem perdas, 100% grátis.
        </motion.p>

        {/* Input */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div
            className={`flex items-center h-[4.5rem] rounded-[1.5rem] border transition-premium ${
              inputFocused
                ? "border-primary/60 glow-red -translate-y-1"
                : "border-border/60 hover:border-primary/35 shadow-elevated"
            } bg-card/90 backdrop-blur-xl`}
          >
            <div className="pl-6 pr-3 flex-shrink-0">
              <span className="flex items-center justify-center w-11 h-11 rounded-2xl gradient-red shadow-button">
                <Play className="w-5 h-5 text-primary-foreground fill-current" />
              </span>
            </div>
            <label htmlFor="hero-url" className="sr-only">Link do vídeo do YouTube</label>
            <input
              id="hero-url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              onKeyDown={(e) => e.key === 'Enter' && handleDownload()}
              placeholder="Cole o link do YouTube aqui..."
              aria-label="Link do vídeo do YouTube"
              className="flex-1 min-w-0 bg-transparent border-none outline-none text-foreground text-lg placeholder:text-muted-foreground px-2"
              disabled={isLoading}
            />
            {url.trim() ? (
              <button
                onClick={() => setUrl("")}
                disabled={isLoading}
                aria-label="Limpar link"
                className="flex items-center gap-2 mr-4 px-5 py-3 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive text-base font-semibold hover:bg-destructive/15 transition-premium flex-shrink-0 disabled:opacity-50"
              >
                <X className="w-5 h-5" />
                <span className="hidden sm:inline">Limpar</span>
              </button>
            ) : (
              <button
                onClick={handlePaste}
                disabled={isLoading}
                aria-label="Colar link da área de transferência"
                className="flex items-center gap-2 mr-4 px-5 py-3 rounded-2xl bg-primary/10 border border-primary/25 text-primary text-base font-semibold hover:bg-primary/15 transition-premium flex-shrink-0 disabled:opacity-50"
              >
                <Clipboard className="w-5 h-5" />
                <span className="hidden sm:inline">Colar</span>
              </button>
            )}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          whileHover={isLoading ? {} : { y: -4 }}
          whileTap={isLoading ? {} : { y: -1 }}
          onClick={() => handleDownload()}
          disabled={isLoading}
          className="gradient-red text-primary-foreground px-12 py-5 rounded-[1.4rem] text-lg font-bold tracking-wide shadow-button hover:shadow-button-hover transition-premium inline-flex items-center gap-3 mb-10 disabled:opacity-70"
        >
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Loader2 className="w-6 h-6 animate-spin" />
              </motion.div>
            ) : (
              <motion.div key="download" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Download className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
          {isLoading ? "Processando..." : "Baixar Vídeo"}
        </motion.button>

        {/* Quick actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3.5"
        >
          {[
            { icon: Smartphone, label: "Shorts", type: "short" },
            { icon: Music, label: "Extrair MP3", type: "audio" },
            { icon: FolderOpen, label: "Playlist", type: "playlist" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => handleDownload(item.type)}
              disabled={isLoading || !url.trim()}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl glass-card text-foreground/80 text-base font-semibold hover:text-foreground hover:border-primary/40 transition-premium disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <item.icon className="w-5 h-5 text-primary" />
              {item.label}
            </button>
          ))}
        </motion.div>

        {/* Trust strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-base text-muted-foreground">
          <span className="inline-flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-yt-green" /> Sem cadastro</span>
          <span className="inline-flex items-center gap-2"><InfinityIcon className="w-5 h-5 text-primary" /> Downloads ilimitados</span>
          <span className="inline-flex items-center gap-2"><Sparkles className="w-5 h-5 text-yt-blue" /> Até 8K Ultra HD</span>
        </div>

        <Disclaimer />
      </div>
    </section>
  );
}
