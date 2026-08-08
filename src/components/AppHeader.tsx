import { Search, Bell, Globe, Menu, Sun, Moon, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";

export default function AppHeader({ onMenuToggle }: { onMenuToggle?: () => void }) {
  const [searchFocused, setSearchFocused] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 h-20 flex items-center px-4 md:px-7 border-b border-border/40 bg-background/75 backdrop-blur-2xl">
      <button
        onClick={onMenuToggle}
        aria-label="Abrir menu de navegação"
        className="lg:hidden mr-3 p-2.5 rounded-xl hover:bg-secondary transition-premium text-muted-foreground"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Search */}
      <div className="flex-1 max-w-xl mx-auto">
        <label htmlFor="header-search" className="sr-only">Pesquisar no site</label>
        <div className={`flex items-center h-12 rounded-2xl border transition-premium ${
          searchFocused ? "border-primary/60 glow-red bg-card" : "border-border/60 bg-secondary/50 hover:border-primary/30"
        }`}>
          <Search className="w-5 h-5 ml-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
          <input
            id="header-search"
            type="text"
            placeholder="Pesquisar..."
            aria-label="Pesquisar no site"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="flex-1 bg-transparent border-none outline-none px-3.5 text-base text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>


      {/* Actions */}
      <div className="flex items-center gap-2 ml-4">
        <button
          onClick={() => navigate("/faq")}
          aria-label="Abrir perguntas frequentes"
          className="p-2.5 rounded-xl hover:bg-secondary transition-premium text-muted-foreground hover:text-foreground border border-transparent hover:border-border/50"
          title="FAQ"
        >
          <HelpCircle className="w-[22px] h-[22px]" />
        </button>
        <button
          aria-label="Selecionar idioma"
          className="p-2.5 rounded-xl hover:bg-secondary transition-premium text-muted-foreground hover:text-foreground border border-transparent hover:border-border/50"
        >
          <Globe className="w-[22px] h-[22px]" />
        </button>
        <button
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
          className="p-2.5 rounded-xl hover:bg-secondary transition-premium text-muted-foreground hover:text-foreground border border-transparent hover:border-border/50"
          title={theme === "dark" ? "Modo Claro" : "Modo Escuro"}
        >
          {theme === "dark" ? <Sun className="w-[22px] h-[22px]" /> : <Moon className="w-[22px] h-[22px]" />}
        </button>
      </div>

    </header>
  );
}
