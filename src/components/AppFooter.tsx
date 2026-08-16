import { Link } from "react-router-dom";
import { Shield, FileText, Cookie, Scale, Mail, Info, BookOpen, HelpCircle, Facebook, Instagram, Twitter, Music2, Video as VideoIcon, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLocalePath, useT } from "@/i18n";
import chrome from "@/i18n/dict/chrome";

const partnerLinks = [
  { icon: Facebook, key: "dlFacebook", path: "/baixar-videos-facebook", gradient: "from-blue-600 to-blue-500" },
  { icon: Instagram, key: "dlInstagram", path: "/baixar-videos-instagram", gradient: "from-purple-600 via-pink-500 to-orange-400" },
  { icon: Twitter, key: "dlTwitter", path: "/baixar-videos-twitter", gradient: "from-slate-900 to-slate-700" },
  { icon: Music2, key: "dlTikTok", path: "/baixar-videos-tiktok", gradient: "from-slate-900 via-pink-500 to-cyan-400" },
  { icon: VideoIcon, key: "dlKwai", path: "/baixar-videos-kwai", gradient: "from-orange-500 to-yellow-400" },
] as const;

const legalLinks = [
  { key: "privacyPolicy", path: "/privacidade", icon: Shield },
  { key: "termsOfUse", path: "/termos", icon: FileText },
  { key: "cookiePolicy", path: "/cookies", icon: Cookie },
  { key: "dmca", path: "/dmca", icon: Scale },
] as const;

const siteLinks = [
  { key: "about", path: "/sobre", icon: Info },
  { key: "contact", path: "/contato", icon: Mail },
  { key: "responsibleUse", path: "/uso-responsavel", icon: BookOpen },
  { key: "faq", path: "/faq", icon: HelpCircle },
] as const;

const toolLinks = [
  { key: "videos", path: "/videos" },
  { key: "shorts", path: "/shorts" },
  { key: "audio", path: "/audio" },
  { key: "playlists", path: "/playlist" },
  { key: "channels", path: "/canais" },
  { key: "downloads", path: "/downloads" },
] as const;

export default function AppFooter() {
  const lp = useLocalePath();
  const t = useT(chrome);

  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-cinematic">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-primary/12 blur-[140px]" />
        <div className="absolute inset-0 dot-grid opacity-[0.06]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <Link to={lp("/")} className="flex items-center gap-4">
              <img src={logo} alt="Baixar Vídeo YouTube" className="w-14 h-14 rounded-2xl shadow-button" />
              <div>
                <h3 className="text-lg font-extrabold text-foreground tracking-tight whitespace-nowrap">Baixar Vídeo</h3>
                <p className="text-sm text-muted-foreground whitespace-nowrap">{t.footerBrandTagline}</p>
              </div>
            </Link>
            <p className="text-base text-muted-foreground leading-relaxed">
              {t.footerAbout}
            </p>
            <div className="hairline" />
            <p className="eyebrow text-primary">{t.footerBadge}</p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-5">{t.tools}</h4>
            <ul className="space-y-3.5">
              {toolLinks.map((link) => (
                <li key={link.path}>
                  <Link to={lp(link.path)} className="group inline-flex items-center gap-2 text-base text-muted-foreground hover:text-primary transition-premium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-premium" />
                    {t[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-5">{t.legal}</h4>
            <ul className="space-y-3.5">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={lp(link.path)} className="text-base text-muted-foreground hover:text-primary transition-premium flex items-center gap-2.5">
                    <link.icon className="w-[18px] h-[18px]" />
                    {t[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-5">{t.company}</h4>
            <ul className="space-y-3.5">
              {siteLinks.map((link) => (
                <li key={link.path}>
                  <Link to={lp(link.path)} className="text-base text-muted-foreground hover:text-primary transition-premium flex items-center gap-2.5">
                    <link.icon className="w-[18px] h-[18px]" />
                    {t[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partner downloaders */}
        <div className="mt-14 pt-10 border-t border-border/30">
          <h4 className="eyebrow text-center text-muted-foreground mb-6">{t.otherDownloaders}</h4>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partnerLinks.map((p) => (
              <Link
                key={p.key}
                to={lp(p.path)}
                className="card-premium group flex items-center gap-3 px-5 py-3.5 rounded-2xl"
              >
                <span className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${p.gradient} shadow-premium`}>
                  <p.icon className="w-5 h-5 text-white" strokeWidth={2.1} />
                </span>
                <span className="text-base font-semibold text-muted-foreground group-hover:text-foreground whitespace-nowrap">
                  {t[p.key]}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-premium" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} baixarvideoyoutube.com — {t.rights}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to={lp("/privacidade")} className="text-sm text-muted-foreground hover:text-primary transition-premium">{t.privacyShort}</Link>
            <Link to={lp("/termos")} className="text-sm text-muted-foreground hover:text-primary transition-premium">{t.termsShort}</Link>
            <Link to={lp("/dmca")} className="text-sm text-muted-foreground hover:text-primary transition-premium">{t.dmca}</Link>
            <Link to={lp("/contato")} className="text-sm text-muted-foreground hover:text-primary transition-premium">{t.contact}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
