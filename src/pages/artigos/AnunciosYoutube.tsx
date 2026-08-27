import ArticleSatellite, { type ArticleData } from "@/components/ArticleSatellite";
import hero from "@/assets/artigos/anuncios-youtube.jpg";

const data: ArticleData = {
  slug: "/como-ganhar-dinheiro-com-anuncios-youtube",
  eyebrow: "Guia aprofundado",
  h1: "Como ganhar dinheiro com anúncios no YouTube em 2026",
  title: "Como Ganhar Dinheiro com Anúncios no YouTube (2026)",
  description:
    "Guia completo de receita de anúncios no YouTube em 2026: requisitos do YPP, formatos de anúncio, RPM x CPM, nichos que pagam mais e como aumentar seus ganhos.",
  keywords:
    "como ganhar dinheiro com anuncios no youtube, receita de anuncios youtube, rpm youtube, cpm youtube, adsense youtube, monetizar canal com anuncios, quanto o youtube paga",
  breadcrumbLabel: "Anúncios no YouTube",
  updated: "agosto de 2026",
  hero,
  heroAlt: "Tela de vídeo com painéis de anúncios e moedas representando receita publicitária no YouTube",
  intro: [
    "A receita de anúncios é a forma mais conhecida de monetizar um canal — e também a mais mal explicada. O YouTube não paga por visualização de vídeo: ele paga pela receita publicitária que aquelas visualizações geram, depois de descontar a parte da plataforma.",
    "Neste guia você entende exatamente como o dinheiro chega até você: quais requisitos precisa cumprir, quais formatos de anúncio existem, o que é RPM e CPM, por que o mesmo número de views rende valores diferentes e o que realmente aumenta o faturamento.",
  ],
  sections: [
    {
      id: "como-funciona",
      h2: "Como funciona a receita de anúncios no YouTube",
      paragraphs: [
        "Anunciantes compram espaço publicitário em leilão. Quando um anúncio é exibido nos seus vídeos, o valor pago pelo anunciante é dividido entre o YouTube e você. Em vídeos longos, a divisão padrão do Programa de Parcerias destina a maior parte da receita publicitária ao criador (55% para o criador e 45% para a plataforma, no modelo tradicional de anúncios em vídeos longos).",
        "Isso significa que o seu ganho depende de três coisas ao mesmo tempo: quantas impressões de anúncio seus vídeos geram, quanto os anunciantes estão dispostos a pagar pelo seu público e quantos desses anúncios são realmente assistidos ou clicados.",
      ],
      callout: {
        kind: "info",
        text: "Uma visualização sem anúncio exibido não gera receita publicitária — é o caso de espectadores com bloqueadores, assinantes do YouTube Premium (que geram outro tipo de receita) e vídeos com monetização limitada.",
      },
    },
    {
      id: "requisitos",
      h2: "Requisitos para monetizar com anúncios",
      paragraphs: [
        "Para receber receita publicitária é obrigatório participar do Programa de Parcerias do YouTube (YPP) e cumprir as políticas de monetização. Além do canal aprovado, é preciso ter uma conta de pagamentos ativa e vinculada, com dados fiscais preenchidos.",
      ],
      bullets: [
        "1.000 inscritos no canal.",
        "4.000 horas públicas de exibição nos últimos 12 meses (caminho de vídeos longos) ou 10 milhões de visualizações válidas de Shorts em 90 dias (caminho de Shorts).",
        "Seguir as políticas de monetização, as Diretrizes da Comunidade e as regras de direitos autorais.",
        "Ativar a verificação em duas etapas e não ter avisos de monetização ativos.",
        "Residir em país ou região onde o YPP está disponível.",
      ],
      callout: {
        kind: "warn",
        text: "Conteúdo reutilizado sem valor agregado, vídeos gerados em massa e material de terceiros sem transformação real continuam sendo os principais motivos de reprovação e desmonetização.",
      },
    },
    {
      id: "formatos",
      h2: "Formatos de anúncio e quanto cada um influencia",
      paragraphs: [
        "Você não escolhe o anunciante, mas escolhe quais formatos aceitar e onde os intervalos aparecem. Essa configuração muda diretamente o número de impressões por visualização.",
      ],
      table: {
        caption: "Formatos de anúncio disponíveis em vídeos do YouTube",
        head: ["Formato", "Como aparece", "Impacto na receita"],
        rows: [
          ["Puláveis (skippable)", "Antes ou durante o vídeo, com botão pular após 5s", "Base da maior parte da receita; alto volume"],
          ["Não puláveis", "15 a 20 segundos obrigatórios", "CPM maior, porém mais abandono"],
          ["Bumper", "6 segundos, não pulável", "Complementar, receita menor por impressão"],
          ["Mid-roll", "Intervalos no meio de vídeos com 8+ minutos", "Maior alavanca de receita em vídeos longos"],
          ["Display e overlay", "Banners na página ou sobre o player", "Receita adicional pequena, sem atrito"],
          ["Feed / in-feed", "Na página inicial e nos resultados", "Receita ligada à navegação, não ao seu vídeo"],
        ],
      },
    },
    {
      id: "rpm-cpm",
      h2: "RPM e CPM: a diferença que muda tudo",
      paragraphs: [
        "CPM é o custo por mil impressões pago pelo anunciante. RPM é a receita que você efetivamente recebeu por mil visualizações do canal, já considerando vídeos sem anúncio, Premium, Supers e a divisão com a plataforma.",
        "Por isso o CPM sempre parece alto e o RPM sempre parece baixo: são medidas diferentes. Para planejar receita, olhe o RPM do seu canal no YouTube Studio — ele é o número real.",
      ],
      table: {
        caption: "Comparação entre CPM e RPM",
        head: ["Métrica", "O que mede", "Quem usa"],
        rows: [
          ["CPM", "Quanto o anunciante paga por 1.000 impressões", "Anunciante e mercado"],
          ["CPM baseado em reprodução", "Custo por mil reproduções com anúncio", "Análise de leilão"],
          ["RPM", "Sua receita total por 1.000 visualizações", "Criador, para prever faturamento"],
        ],
      },
    },
    {
      id: "quanto-paga",
      h2: "Quanto o YouTube paga por visualizações?",
      paragraphs: [
        "Não existe valor fixo por mil views, e qualquer tabela apresentada como oficial é apenas estimativa de terceiros. O valor varia por nicho, país da audiência, época do ano, formato do vídeo e disputa dos anunciantes por aquele público.",
        "Nichos com alta intenção comercial — finanças, negócios, tecnologia, software, saúde e educação — costumam ter CPM bem acima de entretenimento amplo. Audiência dos Estados Unidos, Canadá e Europa Ocidental tende a ter CPM maior que audiência do Brasil, e o último trimestre do ano concentra os melhores CPMs por causa das campanhas de fim de ano.",
      ],
      callout: {
        kind: "info",
        text: "Regra prática: em vez de perguntar quanto paga 1 milhão de views, pergunte quanto vale a sua audiência para um anunciante. É essa resposta que define o seu RPM.",
      },
    },
    {
      id: "aumentar",
      h2: "Como aumentar a receita de anúncios",
      bullets: [
        "Produza vídeos acima de 8 minutos quando o conteúdo justificar, para habilitar mid-rolls sem prejudicar a experiência.",
        "Posicione intervalos em pontos naturais de transição, nunca no meio de uma explicação.",
        "Ative todos os formatos compatíveis com o seu conteúdo e revise vídeos antigos com monetização limitada.",
        "Aumente o tempo de exibição por sessão com playlists e finais que puxam para o próximo vídeo.",
        "Trabalhe temas com intenção comercial: comparativos, análises, tutoriais de compra e conteúdo de decisão.",
        "Revise títulos e miniaturas dos vídeos que já têm bom RPM, ampliando o alcance do que já converte melhor.",
        "Corrija reivindicações e avisos de direitos autorais que estejam derrubando a monetização de vídeos antigos.",
      ],
    },
    {
      id: "erros",
      h2: "Erros que derrubam a monetização",
      bullets: [
        "Usar músicas e trechos de filmes sem licença, gerando reivindicações que redirecionam a receita.",
        "Linguagem forte nos primeiros segundos e temas sensíveis sem contexto jornalístico, que geram o ícone amarelo.",
        "Miniaturas e títulos enganosos, que reduzem a confiança dos anunciantes.",
        "Reaproveitar conteúdo de terceiros sem comentário, edição ou valor agregado.",
        "Depender exclusivamente de anúncios, sem afiliados, patrocínios ou produtos próprios.",
      ],
    },
  ],
  steps: [
    { name: "Cumpra os requisitos do YPP", text: "Alcance 1.000 inscritos e 4.000 horas de exibição em 12 meses, ou 10 milhões de views de Shorts em 90 dias." },
    { name: "Solicite a monetização", text: "No YouTube Studio, acesse Ganhar dinheiro, aceite os termos do YPP e aguarde a análise do canal." },
    { name: "Vincule a conta de pagamentos", text: "Crie ou vincule a conta de pagamentos, informe os dados fiscais e conclua a verificação de endereço." },
    { name: "Configure os formatos de anúncio", text: "Ative anúncios puláveis, não puláveis, bumper e mid-roll nos vídeos compatíveis, posicionando intervalos em transições naturais." },
    { name: "Acompanhe o RPM e otimize", text: "Analise RPM, retenção e receita por vídeo no YouTube Studio e amplie os temas que geram melhor receita." },
  ],
  stepsName: "Como ativar e aumentar a receita de anúncios no YouTube",
  faq: [
    { question: "Quantos inscritos preciso para ganhar com anúncios?", answer: "São necessários 1.000 inscritos, somados a 4.000 horas públicas de exibição nos últimos 12 meses ou 10 milhões de visualizações válidas de Shorts nos últimos 90 dias." },
    { question: "Qual a porcentagem que o YouTube paga ao criador?", answer: "No modelo tradicional de anúncios em vídeos longos, o criador recebe 55% da receita publicitária e a plataforma fica com 45%. Nos Shorts a distribuição é feita a partir de um pool de receita, após o desconto dos custos de licenciamento musical." },
    { question: "Quanto o YouTube paga por 1.000 visualizações?", answer: "Não há valor fixo. O que existe é o RPM do seu canal, que varia conforme nicho, país da audiência, formato e época do ano. Considere sempre o RPM exibido no YouTube Studio." },
    { question: "Por que meu vídeo está com o ícone amarelo?", answer: "O ícone amarelo indica monetização limitada: o conteúdo foi classificado como pouco adequado para a maioria dos anunciantes. É possível pedir revisão manual quando o vídeo atinge tráfego relevante." },
    { question: "Bloqueadores de anúncio reduzem meus ganhos?", answer: "Sim. Se o anúncio não é exibido, não há impressão e não há receita publicitária para aquela visualização." },
    { question: "Vídeos antigos continuam gerando receita?", answer: "Sim. Qualquer visualização monetizada gera receita, independentemente da data de publicação — por isso conteúdo de busca e conteúdo atemporal costuma ser mais lucrativo no longo prazo." },
    { question: "Quando recebo o pagamento?", answer: "Os ganhos são finalizados no início do mês seguinte e pagos entre os dias 21 e 26, desde que o saldo atinja o limite mínimo e os dados fiscais e de pagamento estejam corretos." },
  ],
  sources: [
    { label: "Programa de Parcerias do YouTube: elegibilidade e requisitos", url: "https://support.google.com/youtube/answer/72851" },
    { label: "Como funcionam os anúncios e a receita publicitária", url: "https://support.google.com/youtube/answer/2467968" },
    { label: "Entenda RPM e CPM no YouTube Analytics", url: "https://support.google.com/youtube/answer/9314357" },
    { label: "Políticas de monetização do YouTube", url: "https://support.google.com/youtube/answer/1311392" },
  ],
  related: [
    { to: "/como-ganhar-dinheiro-com-shorts", label: "Como ganhar dinheiro com YouTube Shorts" },
    { to: "/como-ganhar-dinheiro-com-youtube-premium", label: "Como ganhar dinheiro com YouTube Premium" },
    { to: "/como-ganhar-dinheiro-com-clubes-do-canal", label: "Como ganhar dinheiro com Clubes do canal" },
    { to: "/como-ganhar-dinheiro-no-youtube", label: "Todas as formas de monetizar um canal" },
  ],
};

export default function AnunciosYoutube() {
  return <ArticleSatellite data={data} />;
}
