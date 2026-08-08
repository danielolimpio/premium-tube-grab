import { motion } from "framer-motion";
import { Target, Zap, Shield, Gem, Music, Monitor } from "lucide-react";

const features = [
  { icon: Target, title: "Qualidade 4K/8K", desc: "Downloads em resolução máxima, sem compressão e sem perda de nitidez." },
  { icon: Zap, title: "Ultra Rápido", desc: "Tecnologia de download acelerado multithread, pronta em segundos." },
  { icon: Shield, title: "100% Seguro", desc: "Sem malware, sem registros e sem coleta de dados pessoais." },
  { icon: Gem, title: "Ilimitado", desc: "Baixe quantos vídeos quiser, sem restrições e sem assinatura." },
  { icon: Music, title: "Áudio HD", desc: "Extração de MP3 em até 320 kbps com qualidade de estúdio." },
  { icon: Monitor, title: "Multi-Plataforma", desc: "Funciona perfeitamente em desktop, tablet e celular." },
];

export default function FeaturesGrid() {
  return (
    <section className="relative py-20 md:py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[380px] h-[380px] -translate-y-1/2 rounded-full bg-primary/8 blur-[130px]" />
        <div className="absolute inset-0 dot-grid opacity-[0.07]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="eyebrow text-primary">Vantagens</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold gradient-text">
            Por que escolher nossa plataforma?
          </h2>
          <div className="hairline mt-8 max-w-md mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="card-premium rounded-3xl p-8 cursor-default group"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl gradient-red shadow-button flex items-center justify-center group-hover:scale-105 transition-premium">
                <f.icon className="w-8 h-8 text-primary-foreground" strokeWidth={1.9} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
