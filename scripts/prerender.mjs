// Post-build SEO prerender: writes one dist/<route>/index.html per route
// with route-specific <title>, description, canonical, and OG tags baked
// into the static HTML head. The app body is unchanged (same SPA bundle),
// so layout is guaranteed identical. Fail-safe: never breaks the build.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";

const SITE_URL = "https://baixarvideoyoutube.com";
const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/64474fed-8731-4955-a57b-d2abed587ce7/id-preview-eea2fdbf--cb7028ac-8bcc-4768-bed7-1cfc742221fd.lovable.app-1775434271611.png";

/** @type {Array<{path:string,title:string,description:string}>} */
const ROUTES = [
  {
    path: "/",
    title: "Baixar Vídeo YouTube - Download 4K/8K Grátis | MP4, MP3",
    description:
      "Baixe vídeos do YouTube em 4K, 8K, MP3 e muito mais. Plataforma premium, rápida e segura para download de vídeos, Shorts, áudio e playlists. 100% grátis.",
  },
  {
    path: "/videos",
    title: "Baixar Vídeos do YouTube em MP4 - 4K, 8K, 1080p Grátis",
    description:
      "Baixe vídeos do YouTube em MP4 com qualidade de até 8K. Escolha entre 360p, 720p, 1080p Full HD, 4K e 8K. Rápido, grátis e sem cadastro.",
  },
  {
    path: "/shorts",
    title: "Baixar YouTube Shorts - Download Rápido e Grátis em HD",
    description:
      "Baixe YouTube Shorts em qualidade HD. Download instantâneo de vídeos curtos verticais direto do YouTube. 100% gratuito e sem cadastro.",
  },
  {
    path: "/audio",
    title: "Baixar Áudio do YouTube em MP3 - Até 320kbps Grátis",
    description:
      "Converta e baixe áudio do YouTube em MP3 ou M4A. Qualidade de até 320kbps. Extraia trilhas, músicas e podcasts direto do vídeo. Grátis.",
  },
  {
    path: "/playlist",
    title: "Baixar Playlist YouTube - Download Completo de Playlists Grátis",
    description:
      "Baixe playlists inteiras do YouTube de uma só vez. Escolha qualidade e formato para todos os vídeos da playlist. Grátis, sem limites.",
  },
  {
    path: "/canais",
    title: "Baixar Vídeos de Canais do YouTube - Download em Massa Grátis",
    description:
      "Baixe todos os vídeos de um canal do YouTube. Ideal para acervo pessoal, cursos e coleções. Rápido, gratuito e sem cadastro.",
  },
  {
    path: "/downloads",
    title: "Histórico de Downloads - Baixar Vídeo YouTube",
    description:
      "Acesse seu histórico de downloads de vídeos, Shorts e áudios do YouTube. Reproduza rapidamente arquivos baixados anteriormente.",
  },
  {
    path: "/faq",
    title: "FAQ - Perguntas Frequentes sobre Download de Vídeos do YouTube",
    description:
      "Tire suas dúvidas sobre como baixar vídeos do YouTube em 4K, 8K, MP3, MP4, playlists, Shorts e mais. Guia completo e atualizado.",
  },
  {
    path: "/sobre",
    title: "Sobre Nós - Baixar Vídeo YouTube",
    description:
      "Conheça a plataforma Baixar Vídeo YouTube: gratuita, segura, sem cadastro e com suporte a todas as qualidades e formatos de vídeo e áudio.",
  },
  {
    path: "/contato",
    title: "Contato - Baixar Vídeo YouTube",
    description:
      "Entre em contato com nossa equipe para dúvidas, sugestões ou parcerias. Estamos aqui para ajudar você a baixar vídeos com mais facilidade.",
  },
  {
    path: "/uso-responsavel",
    title: "Uso Responsável - Baixar Vídeo YouTube",
    description:
      "Diretrizes para uso responsável da plataforma. Respeite direitos autorais e utilize downloads apenas para fins pessoais e permitidos.",
  },
  {
    path: "/privacidade",
    title: "Política de Privacidade - Baixar Vídeo YouTube",
    description:
      "Nossa política de privacidade. Não armazenamos vídeos, não exigimos cadastro e respeitamos totalmente sua privacidade e seus dados.",
  },
  {
    path: "/termos",
    title: "Termos de Uso - Baixar Vídeo YouTube",
    description:
      "Termos e condições de uso da plataforma Baixar Vídeo YouTube. Leia antes de utilizar nossos serviços de download.",
  },
  {
    path: "/cookies",
    title: "Política de Cookies - Baixar Vídeo YouTube",
    description:
      "Como utilizamos cookies para melhorar sua experiência. Saiba quais cookies usamos e como gerenciá-los no seu navegador.",
  },
  {
    path: "/dmca",
    title: "DMCA - Política de Direitos Autorais | Baixar Vídeo YouTube",
    description:
      "Política DMCA e informações sobre remoção de conteúdo por violação de direitos autorais. Envie sua notificação DMCA através deste canal.",
  },
  {
    path: "/baixar-videos-instagram",
    title: "Baixar Vídeos do Instagram Grátis - Reels, Stories e IGTV",
    description:
      "Baixe vídeos, Reels, Stories e IGTV do Instagram em alta qualidade e sem marca d'água. 100% grátis, rápido e sem cadastro.",
  },
  {
    path: "/baixar-videos-tiktok",
    title: "Baixar Vídeos do TikTok Sem Marca D'água - Grátis e Rápido",
    description:
      "Baixe vídeos do TikTok sem marca d'água em HD. Rápido, gratuito, sem cadastro e sem instalar apps. Salve TikToks favoritos em segundos.",
  },
  {
    path: "/baixar-videos-facebook",
    title: "Baixar Vídeos do Facebook em HD e Full HD - Grátis",
    description:
      "Baixe vídeos do Facebook em HD, Full HD e SD gratuitamente. Reels do Facebook, vídeos de páginas e grupos públicos. Sem cadastro.",
  },
  {
    path: "/baixar-videos-twitter",
    title: "Baixar Vídeos do Twitter (X) em HD - Grátis e Rápido",
    description:
      "Baixe vídeos e GIFs do Twitter (X) em alta qualidade. Ferramenta gratuita, sem cadastro, compatível com celular e PC.",
  },
  {
    path: "/baixar-videos-kwai",
    title: "Baixar Vídeos do Kwai Sem Marca D'água - Grátis",
    description:
      "Baixe vídeos do Kwai sem marca d'água em HD. Rápido, gratuito e sem cadastro. Compatível com Android, iPhone e PC.",
  },
];

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildHead(route) {
  const url = `${SITE_URL}${route.path === "/" ? "" : route.path}`;
  const t = escapeHtml(route.title);
  const d = escapeHtml(route.description);
  const u = escapeHtml(url);
  const img = escapeHtml(OG_IMAGE);
  return {
    title: `<title>${t}</title>`,
    tags: [
      `<meta name="description" content="${d}" />`,
      `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`,
      `<meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`,
      `<link rel="canonical" href="${u}" />`,
      `<link rel="alternate" hreflang="pt-BR" href="${u}" />`,
      `<link rel="alternate" hreflang="x-default" href="${u}" />`,
      `<meta property="og:title" content="${t}" />`,
      `<meta property="og:description" content="${d}" />`,
      `<meta property="og:url" content="${u}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:site_name" content="Baixar Vídeo YouTube" />`,
      `<meta property="og:locale" content="pt_BR" />`,
      `<meta property="og:image" content="${img}" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${t}" />`,
      `<meta name="twitter:description" content="${d}" />`,
      `<meta name="twitter:image" content="${img}" />`,
    ].join("\n    "),
  };
}

function prerenderRoute(templateHtml, route) {
  const { title, tags } = buildHead(route);

  // 1) Replace <title>
  let html = templateHtml.replace(/<title>[\s\S]*?<\/title>/i, title);

  // 2) Replace or insert canonical
  if (/<link\s+rel=["']canonical["'][^>]*>/i.test(html)) {
    html = html.replace(/<link\s+rel=["']canonical["'][^>]*>\s*/i, "");
  }

  // 3) Strip existing description / og:* / twitter:* to avoid duplicates
  html = html.replace(
    /\s*<meta\s+(?:name|property)=["'](?:description|og:[^"']+|twitter:[^"']+)["'][^>]*>\s*/gi,
    "\n    ",
  );

  // 4) Inject fresh SEO block before </head>
  html = html.replace(/<\/head>/i, `    ${tags}\n  </head>`);

  return html;
}

function main() {
  const distIndex = resolve("dist/index.html");
  if (!existsSync(distIndex)) {
    console.warn("[prerender] dist/index.html not found — skipping.");
    return;
  }
  const template = readFileSync(distIndex, "utf8");

  let ok = 0;
  for (const route of ROUTES) {
    try {
      const html = prerenderRoute(template, route);
      const outPath =
        route.path === "/"
          ? distIndex
          : resolve(`dist${route.path}/index.html`);
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, html, "utf8");
      ok++;
      console.log(`[prerender] ✓ ${route.path}`);
    } catch (e) {
      console.warn(`[prerender] ✗ ${route.path}:`, e?.message || e);
    }
  }
  console.log(`[prerender] wrote ${ok}/${ROUTES.length} route HTML files.`);
}

try {
  main();
} catch (err) {
  console.warn("[prerender] fatal (ignored):", err?.message || err);
  process.exit(0);
}
