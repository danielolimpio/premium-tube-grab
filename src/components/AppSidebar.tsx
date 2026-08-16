import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home, Video, Smartphone, Music, FolderOpen, Users,
  Download, ChevronLeft, ChevronRight,
  History, HelpCircle,
  Facebook, Instagram, Twitter, Music2, Video as VideoIcon
} from "lucide-react";
import logo from "@/assets/logo.png";
import batepapoLogo from "@/assets/partners/batepapo-logo.png";
import batepapoGif from "@/assets/partners/batepapo.gif";
import { useLocalePath, useT, stripLang } from "@/i18n";
import chrome from "@/i18n/dict/chrome";

const menuItems = [
  { icon: Home, key: "home", path: "/" },
  { icon: Video, key: "videos", path: "/videos" },
  { icon: Smartphone, key: "shorts", path: "/shorts", badge: "NEW" },
  { icon: Music, key: "audio", path: "/audio" },
  { icon: FolderOpen, key: "playlists", path: "/playlist" },
  { icon: Users, key: "channels", path: "/canais" },
  { icon: History, key: "downloads", path: "/downloads" },
  { icon: HelpCircle, key: "faq", path: "/faq" },
] as const;

const partnerItems = [
  { icon: Facebook, key: "dlFacebook", path: "/baixar-videos-facebook", gradient: "from-blue-600 to-blue-500" },
  { icon: Instagram, key: "dlInstagram", path: "/baixar-videos-instagram", gradient: "from-purple-600 via-pink-500 to-orange-400" },
  { icon: Twitter, key: "dlTwitter", path: "/baixar-videos-twitter", gradient: "from-slate-900 to-slate-700" },
  { icon: Music2, key: "dlTikTok", path: "/baixar-videos-tiktok", gradient: "from-slate-900 via-pink-500 to-cyan-400" },
  { icon: VideoIcon, key: "dlKwai", path: "/baixar-videos-kwai", gradient: "from-orange-500 to-yellow-400" },
] as const;

export default function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const lp = useLocalePath();
  const t = useT(chrome);
  const basePath = stripLang(location.pathname);

  return (
    <motion.aside
      animate={{ width: collapsed ? 84 : 320 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="hidden lg:flex flex-col h-screen sticky top-0 bg-sidebar-background border-r border-border/50 overflow-hidden z-50"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-16 w-[280px] h-[280px] rounded-full bg-primary/10 blur-[110px]" />
      </div>

      {/* Logo */}
      <div className="relative flex items-center gap-3.5 px-5 py-6">
        <div
          className="relative flex-shrink-0 w-12 h-12 rounded-2xl overflow-hidden cursor-pointer shadow-button"
          onClick={() => navigate(lp("/"))}
        >
          <img src={logo} alt="Baixar Vídeo YouTube" className="w-full h-full object-cover" />
        </div>
        {!collapsed && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-hidden cursor-pointer" onClick={() => navigate(lp("/"))}>
            <span className="block text-lg font-extrabold text-foreground tracking-tight whitespace-nowrap">Baixar Vídeo</span>
            <p className="text-xs text-muted-foreground whitespace-nowrap">{t.brandTagline}</p>
          </motion.div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? t.expandMenu : t.collapseMenu}
          aria-expanded={!collapsed}
          className="ml-auto flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-premium border border-border/40"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      <div className="hairline mx-5" />

      {/* Unified scroll area (discrete, no visible scrollbar) */}
      <nav className="relative flex-1 py-4 px-3.5 space-y-1.5 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {menuItems.map((item) => {
          const isActive = basePath === item.path;
          const label = t[item.key];
          return (
            <motion.button
              key={item.key}
              whileHover={{ x: collapsed ? 0 : 4 }}
              onClick={() => navigate(lp(item.path))}
              title={label}
              className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl transition-premium group relative ${
                isActive
                  ? "gradient-red text-primary-foreground shadow-button"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-transparent hover:border-border/50"
              }`}
            >
              <item.icon className="w-[22px] h-[22px] flex-shrink-0" strokeWidth={isActive ? 2.2 : 1.9} />
              {!collapsed && (
                <span className="text-base font-semibold whitespace-nowrap">{label}</span>
              )}
              {!collapsed && "badge" in item && item.badge && (
                <span className="ml-auto px-2.5 py-1 text-[11px] font-bold rounded-full gradient-red text-primary-foreground">
                  {item.badge}
                </span>
              )}
            </motion.button>
          );
        })}

        {/* Partner downloaders */}
        <div className="pt-5 mt-5 border-t border-border/30 space-y-1.5">
          {!collapsed && (
            <p className="px-4 pb-2.5 eyebrow text-muted-foreground">
              {t.otherDownloaders}
            </p>
          )}
          {partnerItems.map((item) => {
            const isActive = basePath === item.path;
            const label = t[item.key];
            return (
              <motion.button
                key={item.key}
                onClick={() => navigate(lp(item.path))}
                whileHover={{ x: collapsed ? 0 : 4 }}
                className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl transition-premium group ${
                  isActive
                    ? "bg-secondary text-foreground border border-border/60"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-transparent hover:border-border/50"
                }`}
                title={label}
              >
                <span className={`flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br ${item.gradient} shadow-premium flex-shrink-0`}>
                  <item.icon className="w-4 h-4 text-white" strokeWidth={2.2} />
                </span>
                {!collapsed && (
                  <span className="text-base font-semibold whitespace-nowrap">{label}</span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Bate Papo promo */}
        {!collapsed && (
          <div className="pt-5 mt-5 border-t border-border/30">
            <motion.a
              href="https://batepapogratis.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col items-center px-2 py-2 rounded-2xl transition-premium"
            >
              <img
                src={batepapoLogo}
                alt="Bate Papo"
                className="w-36 h-36 object-contain drop-shadow-md transition-premium group-hover:scale-[1.02] group-hover:brightness-[1.06] group-hover:drop-shadow-[0_4px_20px_rgba(59,130,246,0.15)] -mb-1"
              />
              <img
                src={batepapoGif}
                alt="Bate Papo chat"
                className="w-16 h-16 object-contain transition-premium group-hover:scale-[1.03] group-hover:brightness-[1.06] group-hover:drop-shadow-[0_4px_16px_rgba(249,115,22,0.15)]"
              />
            </motion.a>
          </div>
        )}

        {/* 100% Grátis */}
        {!collapsed && (
          <div className="pt-5 mt-5 border-t border-border/30 space-y-3.5">
            <div className="card-premium rounded-2xl p-4">
              <div className="flex items-center gap-2.5 mb-3">
                <Download className="w-5 h-5 text-yt-green" />
                <span className="text-base font-bold text-foreground">{t.freeTitle}</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-yt-green" style={{ width: "100%" }} />
              </div>
              <p className="text-sm text-muted-foreground mt-2.5">{t.unlimited}</p>
            </div>
            <p className="text-xs text-muted-foreground text-center">{t.versionFree}</p>
          </div>
        )}
      </nav>
    </motion.aside>
  );
}
