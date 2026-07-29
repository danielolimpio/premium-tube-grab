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

const menuItems = [
  { icon: Home, label: "Início", path: "/" },
  { icon: Video, label: "Vídeos", path: "/videos" },
  { icon: Smartphone, label: "Shorts", path: "/shorts", badge: "NEW" },
  { icon: Music, label: "Áudio/MP3", path: "/audio" },
  { icon: FolderOpen, label: "Playlists", path: "/playlist" },
  { icon: Users, label: "Canais", path: "/canais" },
  { icon: History, label: "Downloads", path: "/downloads" },
  { icon: HelpCircle, label: "FAQ", path: "/faq" },
];

const partnerItems = [
  { icon: Facebook, label: "Baixar Facebook", path: "/baixar-videos-facebook", gradient: "from-blue-600 to-blue-500" },
  { icon: Instagram, label: "Baixar Instagram", path: "/baixar-videos-instagram", gradient: "from-purple-600 via-pink-500 to-orange-400" },
  { icon: Twitter, label: "Baixar Twitter (X)", path: "/baixar-videos-twitter", gradient: "from-slate-900 to-slate-700" },
  { icon: Music2, label: "Baixar TikTok", path: "/baixar-videos-tiktok", gradient: "from-slate-900 via-pink-500 to-cyan-400" },
  { icon: VideoIcon, label: "Baixar Kwai", path: "/baixar-videos-kwai", gradient: "from-orange-500 to-yellow-400" },
];

export default function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 280 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="hidden lg:flex flex-col h-screen sticky top-0 bg-sidebar-background border-r border-border/50 overflow-hidden z-50"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-border/30">
        <div
          className="relative flex-shrink-0 w-10 h-10 rounded-xl overflow-hidden cursor-pointer shadow-button"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="Baixar Vídeo YouTube" className="w-full h-full object-cover" />
        </div>
        {!collapsed && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-hidden cursor-pointer" onClick={() => navigate("/")}>
            <span className="block text-lg font-bold text-foreground tracking-tight whitespace-nowrap">Baixar Vídeo</span>
            <p className="text-xs text-muted-foreground whitespace-nowrap">YouTube Download 4K/8K</p>
          </motion.div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expandir menu lateral" : "Recolher menu lateral"}
          aria-expanded={!collapsed}
          className="ml-auto flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-premium"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Unified scroll area (discrete, no visible scrollbar) */}
      <nav className="flex-1 py-3 px-3 space-y-1 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <motion.button
              key={item.label}
              whileHover={{ x: collapsed ? 0 : 4 }}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-premium group relative ${
                isActive
                  ? "gradient-red text-primary-foreground shadow-button"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && (
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              )}
              {!collapsed && item.badge && (
                <span className="ml-auto px-2 py-0.5 text-[10px] font-bold rounded-full gradient-red text-primary-foreground">
                  {item.badge}
                </span>
              )}
            </motion.button>
          );
        })}

        {/* Partner downloaders */}
        <div className="pt-4 mt-4 border-t border-border/30 space-y-1">
          {!collapsed && (
            <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Outros Baixadores
            </p>
          )}
          {partnerItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <motion.button
                key={item.label}
                onClick={() => navigate(item.path)}
                whileHover={{ x: collapsed ? 0 : 4 }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-premium group ${
                  isActive
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
                title={item.label}
              >
                <span className={`flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br ${item.gradient} shadow-sm flex-shrink-0`}>
                  <item.icon className="w-4 h-4 text-white" strokeWidth={2.2} />
                </span>
                {!collapsed && (
                  <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Bate Papo promo */}
        {!collapsed && (
          <div className="pt-4 mt-4 border-t border-border/30">
            <motion.a
              href="https://batepapogratis.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col items-center px-2 py-2 rounded-xl transition-premium"
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
          <div className="pt-4 mt-4 border-t border-border/30 space-y-3">
            <div className="glass-card rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <Download className="w-4 h-4 text-green-500" />
                <span className="text-xs font-semibold text-foreground">100% Grátis</span>
              </div>
              <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: "100%" }} />
              </div>
              <p className="text-[11px] text-muted-foreground mt-1.5">Download Ilimitado</p>
            </div>
            <p className="text-[10px] text-muted-foreground text-center">v2.0.1 Grátis</p>
          </div>
        )}
      </nav>
    </motion.aside>
  );
}
