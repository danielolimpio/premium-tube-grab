import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANGS, LANG_META, useLang, useSwitchLang } from "@/i18n";
import chrome from "@/i18n/dict/chrome";
import { useT } from "@/i18n";

export default function LanguageSwitcher() {
  const lang = useLang();
  const switchLang = useSwitchLang();
  const t = useT(chrome);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label={t.selectLanguage}
          title={t.selectLanguage}
          className="flex items-center gap-1.5 p-2.5 rounded-xl hover:bg-secondary transition-premium text-muted-foreground hover:text-foreground border border-transparent hover:border-border/50"
        >
          <Globe className="w-[22px] h-[22px]" />
          <span className="text-sm font-bold">{LANG_META[lang].short}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[200px] rounded-2xl">
        {LANGS.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => switchLang(l)}
            className="text-base cursor-pointer rounded-xl"
          >
            <span className="w-8 text-xs font-bold text-muted-foreground">{LANG_META[l].short}</span>
            <span className="flex-1">{LANG_META[l].label}</span>
            {l === lang && <Check className="w-4 h-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
