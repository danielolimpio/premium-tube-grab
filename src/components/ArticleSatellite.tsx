import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ListOrdered,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import AppSidebar from "@/components/AppSidebar";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import SEOHead from "@/components/SEOHead";

const SITE = "https://baixarvideoyoutube.com";
const PILLAR = "/como-ganhar-dinheiro-no-youtube";

export type ArticleSection = {
  id: string;
  h2: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: { kind: "info" | "warn"; text: string };
  table?: { caption: string; head: string[]; rows: string[][] };
};

export type ArticleData = {
  slug: string;
  eyebrow: string;
  h1: string;
  title: string;
  description: string;
  keywords: string;
  breadcrumbLabel: string;
  updated: string;
  hero: string;
  heroAlt: string;
  intro: string[];
  sections: ArticleSection[];
  steps?: { name: string; text: string }[];
  stepsName?: string;
  faq: { question: string; answer: string }[];
  sources: { label: string; url: string }[];
  related: { to: string; label: string }[];
};

export default function ArticleSatellite({ data }: { data: ArticleData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen bg-background">
      <SEOHead
        title={data.title}
        description={data.description}
        keywords={data.keywords}
        canonical={`${SITE}${data.slug}/`}
        breadcrumbs={[
          { name: "Início", url: `${SITE}/` },
          { name: "Como ganhar dinheiro no YouTube em 2026", url: `${SITE}${PILLAR}/` },
          { name: data.breadcrumbLabel, url: `${SITE}${data.slug}/` },
        ]}
        faqItems={data.faq}
        howToSteps={data.steps}
        howToName={data.stepsName}
      />
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AppHeader />
        <main className="flex-1 overflow-y-auto">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
            <nav aria-label="Trilha de navegação" className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-premium">Início</Link>
              <span className="mx-2">/</span>
              <Link to={PILLAR} className="hover:text-primary transition-premium">
                Ganhar dinheiro no YouTube
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground/80">{data.breadcrumbLabel}</span>
            </nav>

            <span className="eyebrow text-primary">{data.eyebrow}</span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold gradient-text leading-tight">
              {data.h1}
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">Última atualização: {data.updated}</p>

            <figure className="mt-8 rounded-3xl overflow-hidden shadow-elevated ring-1 ring-border/50">
              <img
                src={data.hero}
                alt={data.heroAlt}
                width={1664}
                height={936}
                className="w-full h-auto"
              />
            </figure>

            <div className="mt-8 space-y-4 text-lg text-muted-foreground leading-relaxed">
              {data.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Índice */}
            <nav aria-labelledby="indice-titulo" className="mt-10 card-premium rounded-3xl p-7">
              <h2 id="indice-titulo" className="flex items-center gap-2.5 text-xl font-bold text-foreground">
                <ListOrdered className="w-5 h-5 text-primary" />
                Índice
              </h2>
              <ol className="mt-5 grid sm:grid-cols-2 gap-2.5">
                {[...data.sections.map((s) => ({ id: s.id, label: s.h2 })), { id: "faq", label: "Perguntas frequentes" }, { id: "fontes", label: "Fontes oficiais" }].map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-base text-muted-foreground hover:text-primary transition-premium">
                      {t.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {data.sections.map((s) => (
              <motion.section
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-14 scroll-mt-24"
              >
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">{s.h2}</h2>
                {s.paragraphs?.map((p, i) => (
                  <p key={i} className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}

                {s.bullets && (
                  <ul className="mt-6 space-y-3">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 card-premium rounded-2xl px-5 py-4">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base text-foreground/90 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {s.table && (
                  <div className="mt-6 overflow-x-auto card-premium rounded-2xl">
                    <table className="w-full text-left text-sm">
                      <caption className="sr-only">{s.table.caption}</caption>
                      <thead className="bg-secondary/50">
                        <tr>
                          {s.table.head.map((h) => (
                            <th key={h} scope="col" className="px-4 py-3 font-bold text-foreground whitespace-nowrap">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((row, i) => (
                          <tr key={i} className="border-t border-border/50">
                            {row.map((cell, j) => (
                              <td key={j} className="px-4 py-3 text-foreground/90 align-top">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {s.callout && (
                  <div
                    className={`mt-6 flex items-start gap-3 rounded-2xl px-5 py-4 ring-1 ${
                      s.callout.kind === "warn"
                        ? "bg-amber-500/10 ring-amber-500/30"
                        : "bg-primary/10 ring-primary/25"
                    }`}
                  >
                    <AlertTriangle
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        s.callout.kind === "warn" ? "text-amber-500" : "text-primary"
                      }`}
                    />
                    <p className="text-base text-foreground/90 leading-relaxed">{s.callout.text}</p>
                  </div>
                )}
              </motion.section>
            ))}

            {/* FAQ */}
            <section id="faq" className="mt-14 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Perguntas frequentes</h2>
              <div className="mt-6 space-y-3.5">
                {data.faq.map((item, i) => (
                  <div key={i} className="card-premium rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                      className="w-full flex items-center justify-between px-6 py-5 text-left transition-premium hover:bg-secondary/40"
                    >
                      <span className="text-lg font-semibold text-foreground pr-4">{item.question}</span>
                      {openFaq === i ? (
                        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6">
                        <div className="hairline mb-4" />
                        <p className="text-base text-muted-foreground leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Fontes */}
            <section id="fontes" className="mt-14 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Fontes oficiais</h2>
              <ul className="mt-6 space-y-2.5">
                {data.sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-2 text-base text-muted-foreground hover:text-primary transition-premium"
                    >
                      {s.label}
                      <ExternalLink className="w-4 h-4 flex-shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Relacionados */}
            <section className="mt-14">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Continue lendo</h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {data.related.map((r) => (
                  <Link
                    key={r.to}
                    to={r.to}
                    className="card-premium rounded-2xl px-6 py-5 flex items-center justify-between gap-3 hover:bg-secondary/40 transition-premium"
                  >
                    <span className="text-base font-semibold text-foreground">{r.label}</span>
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                  </Link>
                ))}
              </div>

              <Link
                to={PILLAR}
                className="mt-8 inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl gradient-red text-primary-foreground font-bold text-base shadow-button hover:shadow-button-hover transition-premium"
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar ao guia principal de monetização
              </Link>
            </section>
          </article>

          <AppFooter />
        </main>
      </div>
    </div>
  );
}
