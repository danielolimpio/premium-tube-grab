import ArticleSatellite, { type ArticleData } from "@/components/ArticleSatellite";
import hero from "@/assets/artigos/shorts-monetizacao.jpg";

const data: ArticleData = {
  slug: "/como-ganhar-dinheiro-com-shorts",
  eyebrow: "Guia aprofundado",
  h1: "Como ganhar dinheiro com YouTube Shorts em 2026",
  title: "Como Ganhar Dinheiro com YouTube Shorts (Guia 2026)",
  description:
    "Como funciona a monetização dos YouTube Shorts em 2026: pool de receita, requisitos de 10 milhões de views, RPM de Shorts, música licenciada e estratégias para faturar mais.",
  keywords:
    "como ganhar dinheiro com shorts, monetização shorts youtube, rpm shorts, quanto paga shorts, 10 milhoes de views shorts, pool de receita shorts",
  breadcrumbLabel: "YouTube Shorts",
  updated: "agosto de 2026",
  hero,
  heroAlt: "Celular exibindo vídeo vertical com moedas flutuando, representando monetização de Shorts",
  intro: [
    "Os Shorts monetizam de forma diferente dos vídeos longos. Não existe divisão direta do anúncio exibido no seu vídeo: a receita dos anúncios que aparecem entre os Shorts do feed é reunida em um pool coletivo e depois distribuída entre os criadores elegíveis.",
    "Esse detalhe explica quase tudo o que se comenta sobre Shorts: RPM menor, dependência de volume, impacto da música licenciada e diferença enorme de resultado entre países. Este guia mostra como o cálculo funciona e como transformar alcance em receita real.",
  ],
  sections: [
    {
      id: "como-funciona",
      h2: "Como funciona a monetização dos Shorts",
      paragraphs: [
        "O YouTube soma a receita dos anúncios exibidos no feed de Shorts em um pool mensal. Desse valor, primeiro é descontada a parte destinada ao licenciamento de música usada nos vídeos. O que resta é dividido entre os criadores conforme a participação de cada um nas visualizações totais dos Shorts monetizados.",
        "Da parcela que sobra atribuída ao seu canal, o criador fica com 45%. Essa porcentagem é fixa, independentemente de você usar música licenciada ou não — o que muda é o tamanho do pool antes da divisão.",
      ],
      callout: {
        kind: "info",
        text: "Usar músicas do catálogo do YouTube é permitido e não reduz sua porcentagem, mas aumenta o desconto de licenciamento aplicado ao pool antes da distribuição.",
      },
    },
    {
      id: "requisitos",
      h2: "Requisitos para monetizar Shorts",
      bullets: [
        "1.000 inscritos no canal.",
        "10 milhões de visualizações válidas de Shorts nos últimos 90 dias (caminho exclusivo de Shorts) ou 4.000 horas de exibição em vídeos longos.",
        "Aceitar o módulo de Monetização com anúncios do YPP, que cobre a receita do feed de Shorts.",
        "Cumprir as políticas de monetização, incluindo originalidade do conteúdo.",
        "Conta de pagamentos ativa, com dados fiscais válidos e verificação em duas etapas.",
      ],
      callout: {
        kind: "warn",
        text: "Visualizações de conteúdo reenviado de outras plataformas com marca d'água, compilações automáticas e cortes sem edição podem ser consideradas inválidas e não contam para os 10 milhões.",
      },
    },
    {
      id: "rpm",
      h2: "Quanto os Shorts pagam de verdade",
      paragraphs: [
        "O RPM dos Shorts é sistematicamente menor que o de vídeos longos, porque um Short gera muito menos inventário publicitário do que um vídeo de dez minutos com mid-rolls. Isso não torna o formato ruim: ele é a ferramenta mais eficiente de descoberta da plataforma hoje.",
        "A conta certa é olhar os Shorts como aquisição de audiência e os vídeos longos, os produtos e os patrocínios como conversão dessa audiência em receita.",
      ],
      table: {
        caption: "Comparação entre Shorts e vídeos longos",
        head: ["Aspecto", "Shorts", "Vídeos longos"],
        rows: [
          ["Origem da receita", "Pool de anúncios do feed", "Anúncios exibidos no próprio vídeo"],
          ["Participação do criador", "45% da parcela atribuída", "55% da receita publicitária"],
          ["RPM típico", "Bem mais baixo", "Bem mais alto"],
          ["Força principal", "Alcance e descoberta", "Tempo de exibição e receita"],
          ["Premium", "Conta para receita de assinantes", "Conta para receita de assinantes"],
          ["Vende produto/serviço", "Difícil, pouco espaço", "Ideal, permite argumento completo"],
        ],
      },
    },
    {
      id: "estrategia",
      h2: "Estratégia para faturar mais com Shorts",
      bullets: [
        "Publique com constância: o formato recompensa frequência e testes rápidos de tema.",
        "Prenda a atenção nos primeiros 1,5 segundos, com movimento, pergunta ou promessa clara.",
        "Feche o loop: Shorts que reiniciam bem aumentam a taxa de reexibição e o alcance.",
        "Use os Shorts como isca para o vídeo longo, com continuação explícita e vídeo fixado no canal.",
        "Publique séries numeradas para criar hábito e aumentar inscritos por Short.",
        "Priorize áudio original quando possível, para reduzir o desconto de licenciamento sobre o pool.",
        "Ative afiliados e YouTube Shopping para transformar alcance alto em venda direta.",
      ],
    },
    {
      id: "outras-receitas",
      h2: "Outras receitas que os Shorts destravam",
      paragraphs: [
        "Além do pool de anúncios, Shorts monetizam de formas indiretas que muitas vezes superam a receita publicitária: patrocínios pagos por alcance, links de afiliados, produtos marcados via Shopping, presentes em transmissões e crescimento acelerado de inscritos que depois consomem seus vídeos longos.",
      ],
      bullets: [
        "Patrocínios de marca cobrados por pacote de Shorts.",
        "YouTube Shopping com produtos marcados diretamente no vídeo vertical.",
        "Links de afiliados na descrição e no comentário fixado.",
        "Tráfego para newsletter, comunidade paga ou curso próprio.",
        "Crescimento de inscritos que aumenta a receita dos vídeos longos e de Premium.",
      ],
    },
  ],
  steps: [
    { name: "Atinja a elegibilidade", text: "Alcance 1.000 inscritos e 10 milhões de visualizações válidas de Shorts em 90 dias, ou use o caminho de 4.000 horas em vídeos longos." },
    { name: "Aceite o módulo de anúncios", text: "No YouTube Studio, aceite o módulo de Monetização com anúncios, que inclui a receita do feed de Shorts." },
    { name: "Padronize a produção", text: "Defina formato, duração, abertura de impacto e frequência de publicação para produzir com constância." },
    { name: "Reduza o desconto de música", text: "Prefira áudio próprio ou trilhas livres quando a música não for essencial ao vídeo." },
    { name: "Converta o alcance", text: "Direcione o público para vídeos longos, produtos, afiliados e lista própria, ampliando a receita por espectador." },
  ],
  stepsName: "Como monetizar YouTube Shorts passo a passo",
  faq: [
    { question: "Shorts realmente pagam?", answer: "Sim, para canais elegíveis ao YPP. A receita vem do pool de anúncios exibidos no feed de Shorts, distribuído conforme a participação nas visualizações e com 45% destinados ao criador." },
    { question: "Quantas visualizações preciso para monetizar Shorts?", answer: "10 milhões de visualizações válidas de Shorts nos últimos 90 dias, junto com 1.000 inscritos — ou o caminho alternativo de 4.000 horas de exibição em vídeos longos." },
    { question: "Usar música do YouTube reduz meu pagamento?", answer: "Não altera sua porcentagem de 45%, mas o custo de licenciamento é descontado do pool antes da divisão, o que reduz o valor disponível para distribuição." },
    { question: "Shorts pagam menos que vídeos longos?", answer: "Em geral sim, o RPM é menor porque cada Short gera pouco inventário de anúncios. O valor do formato está no alcance e na captação de novos inscritos." },
    { question: "Shorts contam para as 4.000 horas de exibição?", answer: "Não. O tempo assistido em Shorts não conta para as 4.000 horas públicas; existe um caminho próprio de elegibilidade baseado em 10 milhões de views." },
    { question: "Posso reaproveitar vídeos do TikTok nos Shorts?", answer: "Tecnicamente sim, mas vídeos com marca d'água de outras plataformas e conteúdo sem edição podem gerar visualizações inválidas e problemas de originalidade." },
    { question: "Qual a duração ideal de um Short?", answer: "Depende do conteúdo: vídeos muito curtos favorecem reexibição e vídeos de até três minutos permitem desenvolver uma ideia. Teste faixas de duração e siga a retenção real do seu canal." },
  ],
  sources: [
    { label: "Monetização de Shorts: como a receita é calculada", url: "https://support.google.com/youtube/answer/12504220" },
    { label: "Requisitos de elegibilidade do YPP", url: "https://support.google.com/youtube/answer/72851" },
    { label: "Políticas de monetização do YouTube", url: "https://support.google.com/youtube/answer/1311392" },
  ],
  related: [
    { to: "/como-ganhar-dinheiro-com-anuncios-youtube", label: "Como ganhar dinheiro com anúncios no YouTube" },
    { to: "/como-ganhar-dinheiro-com-youtube-premium", label: "Como ganhar dinheiro com YouTube Premium" },
    { to: "/como-ganhar-dinheiro-com-clubes-do-canal", label: "Como ganhar dinheiro com Clubes do canal" },
    { to: "/shorts", label: "Baixar YouTube Shorts em HD" },
  ],
};

export default function ShortsMonetizacao() {
  return <ArticleSatellite data={data} />;
}
