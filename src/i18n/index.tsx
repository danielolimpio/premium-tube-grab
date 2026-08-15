// i18n core — 3 idiomas: pt (raiz), en (/en), es (/es)
import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type Lang = "pt" | "en" | "es";

export const LANGS: Lang[] = ["pt", "en", "es"];

export const LANG_META: Record<
  Lang,
  { label: string; short: string; htmlLang: string; ogLocale: string; hreflang: string }
> = {
  pt: { label: "Português (BR)", short: "PT", htmlLang: "pt-BR", ogLocale: "pt_BR", hreflang: "pt-BR" },
  en: { label: "English", short: "EN", htmlLang: "en", ogLocale: "en_US", hreflang: "en" },
  es: { label: "Español", short: "ES", htmlLang: "es", ogLocale: "es_ES", hreflang: "es" },
};

/** Idioma a partir do pathname ("/en/videos" -> "en") */
export function langFromPath(pathname: string): Lang {
  const seg = pathname.split("/")[1];
  return seg === "en" || seg === "es" ? seg : "pt";
}

/** Remove o prefixo de idioma: "/en/videos" -> "/videos" */
export function stripLang(pathname: string): string {
  const lang = langFromPath(pathname);
  if (lang === "pt") return pathname || "/";
  const rest = pathname.slice(3);
  return rest === "" ? "/" : rest;
}

/** Aplica prefixo de idioma a um caminho base */
export function withLang(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === "pt") return clean;
  return clean === "/" ? `/${lang}` : `/${lang}${clean}`;
}

export function useLang(): Lang {
  const { pathname } = useLocation();
  return langFromPath(pathname);
}

/** lp("/videos") -> "/videos" | "/en/videos" | "/es/videos" */
export function useLocalePath() {
  const lang = useLang();
  return useCallback((path: string) => withLang(path, lang), [lang]);
}

export function useSwitchLang() {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  return useCallback(
    (next: Lang) => {
      navigate(`${withLang(stripLang(pathname), next)}${search}${hash}`);
    },
    [pathname, search, hash, navigate],
  );
}

export type Dict = Record<Lang, Record<string, string>>;

/** Retorna as strings do idioma atual, com fallback para pt */
export function useT<D extends Dict>(dict: D): D["pt"] {
  const lang = useLang();
  return { ...dict.pt, ...(dict[lang] || {}) } as D["pt"];
}

/** Mantém <html lang> sincronizado com a rota */
export function HtmlLangSync() {
  const lang = useLang();
  useEffect(() => {
    document.documentElement.lang = LANG_META[lang].htmlLang;
  }, [lang]);
  return null;
}
