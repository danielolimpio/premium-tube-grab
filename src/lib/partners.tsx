import { Facebook, Instagram, Twitter, Music2, Video } from "lucide-react";
import type { PartnerConfig } from "@/pages/PartnerLanding";

export const partners: Record<string, PartnerConfig> = {
  instagram: {
    slug: "baixar-videos-instagram",
    network: "Instagram",
    Icon: Instagram,
    externalUrl: "https://baixarvideosinstagram.com/",
    brandColor: "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400",
    iconBg: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
    title: "Baixar Vídeos do Instagram Grátis - Reels, Stories e IGTV",
    description:
      "Baixe vídeos, Reels, Stories e IGTV do Instagram em alta qualidade e sem marca d'água. 100% grátis, rápido e sem cadastro.",
    h1: "Baixar Vídeos do Instagram Grátis",
    intro:
      "Ferramenta oficial para baixar Reels, Stories, IGTV e vídeos do Instagram em alta qualidade. Cole o link, clique em baixar e pronto — sem cadastro, sem marca d'água e 100% grátis.",
    keywords:
      "baixar video instagram, baixar reels, baixar stories instagram, download instagram, snapinsta",
    bullets: [
      "Reels, Stories, IGTV e vídeos comuns suportados",
      "Download sem marca d'água quando disponível",
      "Qualidade original em MP4",
      "Funciona no celular, tablet e PC",
      "Sem limite de downloads",
      "Sem instalar aplicativos",
    ],
    faqItems: [
      { question: "Posso baixar Reels do Instagram grátis?", answer: "Sim. Nosso baixador de Instagram permite baixar Reels em alta qualidade, gratuitamente e sem cadastro." },
      { question: "Consegue baixar Stories do Instagram?", answer: "Sim, Stories públicos podem ser baixados em vídeo ou imagem direto pela ferramenta." },
      { question: "Baixa sem marca d'água?", answer: "Quando o vídeo original não possui marca d'água nativa, o download é feito no formato original, sem adicionar marcas." },
      { question: "Preciso de conta no Instagram para baixar?", answer: "Não. Basta o link do vídeo público do Instagram." },
    ],
  },
  tiktok: {
    slug: "baixar-videos-tiktok",
    network: "TikTok",
    Icon: Music2,
    externalUrl: "https://baixarvideostiktok.com/",
    brandColor: "bg-gradient-to-r from-slate-900 via-pink-500 to-cyan-400",
    iconBg: "bg-gradient-to-br from-slate-900 via-pink-500 to-cyan-400",
    title: "Baixar Vídeos do TikTok Sem Marca D'água - Grátis e Rápido",
    description:
      "Baixe vídeos do TikTok sem marca d'água em HD. Rápido, gratuito, sem cadastro e sem instalar apps. Salve TikToks favoritos em segundos.",
    h1: "Baixar Vídeos do TikTok Sem Marca D'água",
    intro:
      "Nosso baixador de TikTok remove a marca d'água e entrega o vídeo em HD. Copie o link do TikTok, cole e baixe — grátis, sem cadastro e sem limites.",
    keywords:
      "baixar video tiktok, baixar tiktok sem marca dagua, snaptik, ssstiktok, tiktok downloader",
    bullets: [
      "Download sem marca d'água (watermark-free)",
      "Qualidade HD original preservada",
      "Baixa também o áudio em MP3",
      "Compatível com celular, iOS, Android e PC",
      "Ilimitado e 100% grátis",
      "Não requer instalação de app",
    ],
    faqItems: [
      { question: "Como baixar vídeo do TikTok sem marca d'água?", answer: "Copie o link do TikTok, cole no campo do baixador e clique em Baixar. O vídeo será entregue já sem a marca d'água." },
      { question: "É seguro usar o baixador de TikTok?", answer: "Sim. Não pedimos login e não armazenamos os vídeos em nossos servidores." },
      { question: "Consigo baixar o áudio (MP3) do TikTok?", answer: "Sim, oferecemos a opção de extrair apenas o áudio do TikTok em MP3." },
      { question: "Funciona no iPhone?", answer: "Sim, funciona em qualquer navegador moderno, incluindo Safari no iPhone." },
    ],
  },
  facebook: {
    slug: "baixar-videos-facebook",
    network: "Facebook",
    Icon: Facebook,
    externalUrl: "https://baixarvideosfacebook.com/",
    brandColor: "bg-gradient-to-r from-blue-600 to-blue-500",
    iconBg: "bg-gradient-to-br from-blue-600 to-blue-500",
    title: "Baixar Vídeos do Facebook em HD e Full HD - Grátis",
    description:
      "Baixe vídeos do Facebook em HD, Full HD e SD gratuitamente. Reels do Facebook, vídeos de páginas e grupos públicos. Sem cadastro.",
    h1: "Baixar Vídeos do Facebook Grátis",
    intro:
      "Baixe qualquer vídeo público do Facebook em alta qualidade — HD e Full HD. Cole o link, escolha a qualidade e baixe. Grátis, rápido e sem cadastro.",
    keywords:
      "baixar video facebook, download facebook video, salvar video facebook, baixar reels facebook",
    bullets: [
      "Baixa vídeos públicos, de páginas e Reels do Facebook",
      "Qualidade HD, Full HD e SD",
      "Rápido e sem limite de downloads",
      "Não requer login no Facebook",
      "Compatível com Android, iOS e PC",
      "Grátis para sempre",
    ],
    faqItems: [
      { question: "Como baixar vídeo do Facebook?", answer: "Copie o link do vídeo no Facebook, cole no baixador e escolha a qualidade desejada." },
      { question: "Consigo baixar vídeos privados?", answer: "Não. Só é possível baixar vídeos públicos, respeitando as políticas do Facebook." },
      { question: "Baixa Reels do Facebook?", answer: "Sim, Reels públicos do Facebook são suportados." },
      { question: "Qual a qualidade máxima?", answer: "Baixamos na maior qualidade disponibilizada pelo Facebook, geralmente Full HD (1080p)." },
    ],
  },
  twitter: {
    slug: "baixar-videos-twitter",
    network: "Twitter (X)",
    Icon: Twitter,
    externalUrl: "https://baixarvideostwitter.com/",
    brandColor: "bg-gradient-to-r from-slate-900 to-slate-700",
    iconBg: "bg-gradient-to-br from-slate-900 to-slate-700",
    title: "Baixar Vídeos do Twitter (X) em HD - Grátis e Rápido",
    description:
      "Baixe vídeos e GIFs do Twitter (X) em alta qualidade. Ferramenta gratuita, sem cadastro, compatível com celular e PC.",
    h1: "Baixar Vídeos do Twitter (X) Grátis",
    intro:
      "Baixe vídeos e GIFs do Twitter (X) em HD. Cole o link do tweet, escolha a qualidade e salve o vídeo em segundos. Grátis e sem cadastro.",
    keywords:
      "baixar video twitter, download twitter video, baixar video x, salvar video twitter",
    bullets: [
      "Download de vídeos e GIFs do Twitter (X)",
      "Qualidade HD e SD",
      "Sem cadastro e sem login no Twitter",
      "Funciona com tweets públicos",
      "Compatível com todos os dispositivos",
      "100% gratuito",
    ],
    faqItems: [
      { question: "Como baixar vídeo do Twitter (X)?", answer: "Copie a URL do tweet, cole no baixador e clique em Baixar. Você poderá escolher a qualidade antes de salvar." },
      { question: "Baixa GIFs do Twitter?", answer: "Sim, GIFs são convertidos em MP4 e podem ser baixados normalmente." },
      { question: "Funciona com o novo domínio X.com?", answer: "Sim, aceitamos links tanto de twitter.com quanto de x.com." },
    ],
  },
  kwai: {
    slug: "baixar-videos-kwai",
    network: "Kwai",
    Icon: Video,
    externalUrl: "https://baixarvideoskwai.com/pt",
    brandColor: "bg-gradient-to-r from-orange-500 to-yellow-400",
    iconBg: "bg-gradient-to-br from-orange-500 to-yellow-400",
    title: "Baixar Vídeos do Kwai Sem Marca D'água - Grátis",
    description:
      "Baixe vídeos do Kwai sem marca d'água em HD. Rápido, gratuito e sem cadastro. Compatível com Android, iPhone e PC.",
    h1: "Baixar Vídeos do Kwai Sem Marca D'água",
    intro:
      "Baixe vídeos do Kwai em HD, sem marca d'água. Cole o link do Kwai, clique em baixar e salve o vídeo em segundos — grátis e sem cadastro.",
    keywords:
      "baixar video kwai, baixar kwai sem marca dagua, kwai downloader, salvar video kwai",
    bullets: [
      "Download sem marca d'água do Kwai",
      "Qualidade original em HD",
      "Extração de áudio em MP3",
      "Ilimitado, grátis e sem cadastro",
      "Funciona em Android, iOS e Desktop",
      "Interface simples e rápida",
    ],
    faqItems: [
      { question: "Como baixar vídeo do Kwai sem marca d'água?", answer: "Cole o link do vídeo do Kwai no baixador e o vídeo será entregue sem a marca d'água." },
      { question: "É gratuito?", answer: "Sim, 100% gratuito e sem limites de downloads." },
      { question: "Funciona no iPhone?", answer: "Sim, basta abrir o baixador pelo Safari ou outro navegador." },
    ],
  },
};

export const partnersList = Object.values(partners);
