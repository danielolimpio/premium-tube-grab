import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Zap, Download, Sparkles, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppSidebar from "@/components/AppSidebar";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import SEOHead from "@/components/SEOHead";

export interface PartnerConfig {
  slug: string;
  network: string; // "Instagram"
  brandColor: string; // tailwind gradient class
  iconBg: string;
  Icon: LucideIcon;
  externalUrl: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  keywords: string;
  bullets: string[];
  faqItems: { question: string; answer: string }[];
}

export default function PartnerLanding({ config }: { config: PartnerConfig }) {
  const { network, Icon, externalUrl, title, description, h1, intro, brandColor, iconBg, bullets, faqItems, keywords, slug } = config;

  return (
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AppHeader />
        <SEOHead
          title={title}
          description={description}
          keywords={keywords}
          breadcrumbs={[
            { name: "Início", url: "https://baixarvideoyoutube.com/" },
            { name: `Baixar Vídeos ${network}`, url: `https://baixarvideoyoutube.com/${slug}` },
          ]}
          faqItems={faqItems}
        />
        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-10 max-w-5xl mx-auto w-full">
          {/* Hero */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center space-y-6"
          >
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${iconBg} shadow-button`}>
              <Icon className="w-10 h-10 text-white" strokeWidth={2.2} />
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              {h1}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {intro}
            </p>

            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className={`${brandColor} text-white shadow-button hover:opacity-95 h-14 px-8 text-base font-semibold rounded-2xl`}
              >
                <a href={externalUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  Acessar Baixador do {network}
                  <ExternalLink className="w-4 h-4 ml-2 opacity-80" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                Abre em nova aba • 100% grátis • Sem cadastro
              </p>
            </div>
          </motion.section>

          {/* Features */}
          <section className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Zap, title: "Ultra rápido", text: "Download em segundos, direto no navegador." },
              { icon: ShieldCheck, title: "100% seguro", text: "Sem instalar nada, sem malware, sem cadastro." },
              { icon: Sparkles, title: "Alta qualidade", text: "Vídeos em HD sem marca d'água quando disponível." },
            ].map((f) => (
              <div key={f.title} className="glass-card rounded-2xl p-5 space-y-2">
                <f.icon className="w-6 h-6 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            ))}
          </section>

          {/* Benefits list */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Por que baixar vídeos do {network} com a gente?
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="mt-14 text-center glass-card rounded-3xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Pronto para baixar vídeos do {network}?
            </h2>
            <p className="text-sm text-muted-foreground mt-2 mb-6 max-w-xl mx-auto">
              Nosso baixador oficial do {network} está pronto para uso. Cole o link do vídeo e baixe em segundos.
            </p>
            <Button
              asChild
              size="lg"
              className={`${brandColor} text-white shadow-button hover:opacity-95 h-14 px-8 text-base font-semibold rounded-2xl`}
            >
              <a href={externalUrl} target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                Ir para o Baixador do {network}
                <ExternalLink className="w-4 h-4 ml-2 opacity-80" />
              </a>
            </Button>
          </section>

          {/* FAQ */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-foreground mb-6">Perguntas Frequentes</h2>
            <div className="space-y-3">
              {faqItems.map((f) => (
                <details key={f.question} className="glass-card rounded-xl p-5 group">
                  <summary className="cursor-pointer text-sm font-semibold text-foreground list-none flex items-center justify-between">
                    {f.question}
                    <span className="text-primary group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </main>
        <AppFooter />
      </div>
    </div>
  );
}
