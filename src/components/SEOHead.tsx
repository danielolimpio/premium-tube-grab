import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface HowToStep {
  name: string;
  text: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  keywords?: string;
  breadcrumbs?: { name: string; url: string }[];
  faqItems?: { question: string; answer: string }[];
  howToSteps?: HowToStep[];
  howToName?: string;
}

const SITE_URL = "https://baixarvideoyoutube.com";
const SITE_NAME = "Baixar Vídeo YouTube";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/64474fed-8731-4955-a57b-d2abed587ce7/id-preview-eea2fdbf--cb7028ac-8bcc-4768-bed7-1cfc742221fd.lovable.app-1775434271611.png";

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setLinkAlt(hreflang: string, href: string) {
  const selector = `link[rel="alternate"][hreflang="${hreflang}"]`;
  let el = document.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "alternate");
    el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function SEOHead({
  title,
  description,
  canonical,
  noindex,
  keywords,
  breadcrumbs,
  faqItems,
  howToSteps,
  howToName,
}: SEOHeadProps) {
  const { pathname } = useLocation();
  const fullUrl = canonical || `${SITE_URL}${pathname}`;

  useEffect(() => {
    document.title = title;

    setMeta("description", description);
    // Enhanced robots directive: allow large image/snippet/video previews for rich results
    setMeta(
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );
    setMeta(
      "googlebot",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );
    if (keywords) setMeta("keywords", keywords);

    // Open Graph
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", fullUrl, "property");
    setMeta("og:image", OG_IMAGE, "property");
    setMeta("og:image:width", "1200", "property");
    setMeta("og:image:height", "630", "property");
    setMeta("og:image:alt", `${SITE_NAME} — Download em 4K, 8K, MP3`, "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:locale", "pt_BR", "property");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", OG_IMAGE);
    setMeta("twitter:image:alt", `${SITE_NAME} — Download em 4K, 8K, MP3`);

    // Canonical + hreflang (pt-BR site)
    setCanonical(fullUrl);
    setLinkAlt("pt-BR", fullUrl);
    setLinkAlt("x-default", fullUrl);

    // JSON-LD: WebSite (only on homepage)
    if (pathname === "/") {
      setJsonLd("ld-website", {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "pt-BR",
        description:
          "Baixe vídeos do YouTube em 4K, 8K, MP3 e muito mais. Plataforma premium, rápida e segura.",
      });

      // Organization schema (only on homepage — sitewide entity)
      setJsonLd("ld-org", {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.png`,
      });
    }

    // JSON-LD: SoftwareApplication (always)
    setJsonLd("ld-app", {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "pt-BR",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript. Requires HTML5.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "12847",
        bestRating: "5",
        worstRating: "1",
      },
      description,
    });

    // JSON-LD: BreadcrumbList
    if (breadcrumbs && breadcrumbs.length > 0) {
      setJsonLd("ld-breadcrumb", {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((bc, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: bc.name,
          item: bc.url,
        })),
      });
    }

    // JSON-LD: FAQPage
    if (faqItems && faqItems.length > 0) {
      setJsonLd("ld-faq", {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      });
    }

    // JSON-LD: HowTo (rich result for "como baixar" queries)
    if (howToSteps && howToSteps.length > 0) {
      setJsonLd("ld-howto", {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: howToName || title,
        description,
        inLanguage: "pt-BR",
        totalTime: "PT1M",
        supply: [{ "@type": "HowToSupply", name: "Link do vídeo do YouTube" }],
        tool: [{ "@type": "HowToTool", name: "Navegador web (Chrome, Safari, Firefox, Edge)" }],
        step: howToSteps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
          url: `${fullUrl}#step-${i + 1}`,
        })),
      });
    }

    return () => {
      ["ld-breadcrumb", "ld-faq", "ld-howto"].forEach((id) => {
        document.getElementById(id)?.remove();
      });
    };
  }, [title, description, fullUrl, pathname, noindex, keywords, breadcrumbs, faqItems, howToSteps, howToName]);

  return null;
}
