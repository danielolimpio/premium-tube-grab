import { Link } from "react-router-dom";
import { Shield, FileText, Cookie, Scale, Mail, Info, BookOpen, HelpCircle, Facebook, Instagram, Twitter, Music2, Video as VideoIcon, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const partnerLinks = [
  { icon: Facebook, label: "Baixar Facebook", path: "/baixar-videos-facebook", gradient: "from-blue-600 to-blue-500" },
  { icon: Instagram, label: "Baixar Instagram", path: "/baixar-videos-instagram", gradient: "from-purple-600 via-pink-500 to-orange-400" },
  { icon: Twitter, label: "Baixar Twitter (X)", path: "/baixar-videos-twitter", gradient: "from-slate-900 to-slate-700" },
  { icon: Music2, label: "Baixar TikTok", path: "/baixar-videos-tiktok", gradient: "from-slate-900 via-pink-500 to-cyan-400" },
  { icon: VideoIcon, label: "Baixar Kwai", path: "/baixar-videos-kwai", gradient: "from-orange-500 to-yellow-400" },
];

const legalLinks = [
  { label: "Política de Privacidade", path: "/privacidade", icon: Shield },
  { label: "Termos de Uso", path: "/termos", icon: FileText },
  { label: "Política de Cookies", path: "/cookies", icon: Cookie },
  { label: "DMCA", path: "/dmca", icon: Scale },
];

const siteLinks = [
  { label: "Sobre", path: "/sobre", icon: Info },
  { label: "Contato", path: "/contato", icon: Mail },
  { label: "Uso Responsável", path: "/uso-responsavel", icon: BookOpen },
  { label: "FAQ", path: "/faq", icon: HelpCircle },
];

const toolLinks = [
  { label: "Vídeos", path: "/videos" },
  { label: "Shorts", path: "/shorts" },
  { label: "Áudio/MP3", path: "/audio" },
  { label: "Playlists", path: "/playlist" },
  { label: "Canais", path: "/canais" },
  { label: "Downloads", path: "/downloads" },
];

export default function AppFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-cinematic">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-primary/12 blur-[140px]" />
        <div className="absolute inset-0 dot-grid opacity-[0.06]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-4">
              <img src={logo} alt="Baixar Vídeo YouTube" className="w-14 h-14 rounded-2xl shadow-button" />
              <div>
                <h3 className="text-lg font-extrabold text-foreground tracking-tight">Baixar Vídeo</h3>
                <p className="text-sm text-muted-foreground">Download 4K/8K Grátis</p>
              </div>
            </Link>
            <p className="text-base text-muted-foreground leading-relaxed">
              Plataforma gratuita e segura para download de vídeos, Shorts e áudio do YouTube em altíssima qualidade.
            </p>
            <div className="hairline" />
            <p className="eyebrow text-primary">Sem cadastro · Ilimitado</p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-5">Ferramentas</h4>
            <ul className="space-y-3.5">
              {toolLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="group inline-flex items-center gap-2 text-base text-muted-foreground hover:text-primary transition-premium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-premium" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-5">Legal</h4>
            <ul className="space-y-3.5">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-base text-muted-foreground hover:text-primary transition-premium flex items-center gap-2.5">
                    <link.icon className="w-[18px] h-[18px]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-5">Empresa</h4>
            <ul className="space-y-3.5">
              {siteLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-base text-muted-foreground hover:text-primary transition-premium flex items-center gap-2.5">
                    <link.icon className="w-[18px] h-[18px]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partner downloaders */}
        <div className="mt-14 pt-10 border-t border-border/30">
          <h4 className="eyebrow text-center text-muted-foreground mb-6">Outros Baixadores</h4>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partnerLinks.map((p) => (
              <Link
                key={p.label}
                to={p.path}
                className="card-premium group flex items-center gap-3 px-5 py-3.5 rounded-2xl"
              >
                <span className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${p.gradient} shadow-premium`}>
                  <p.icon className="w-5 h-5 text-white" strokeWidth={2.1} />
                </span>
                <span className="text-base font-semibold text-muted-foreground group-hover:text-foreground whitespace-nowrap">
                  {p.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-premium" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} baixarvideoyoutube.com — Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-premium">Privacidade</Link>
            <Link to="/termos" className="text-sm text-muted-foreground hover:text-primary transition-premium">Termos</Link>
            <Link to="/dmca" className="text-sm text-muted-foreground hover:text-primary transition-premium">DMCA</Link>
            <Link to="/contato" className="text-sm text-muted-foreground hover:text-primary transition-premium">Contato</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
