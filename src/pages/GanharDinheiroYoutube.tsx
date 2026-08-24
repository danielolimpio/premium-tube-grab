import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  ExternalLink,
  Info,
  ListOrdered,
} from "lucide-react";
import AppSidebar from "@/components/AppSidebar";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import SEOHead from "@/components/SEOHead";
import heroArticle from "@/assets/ganhar-dinheiro-youtube.jpg";

const SITE = "https://baixarvideoyoutube.com";
const PATH = "/como-ganhar-dinheiro-no-youtube";

type Method = {
  n: number;
  name: string;
  how: string;
  payer: string;
  ypp: string;
  potential: string;
  bestFor: string;
  slug: string;
  cta: string;
  detail: string[];
};

type Group = {
  id: string;
  title: string;
  intro: string;
  methods: Method[];
};

const groups: Group[] = [
  {
    id: "dinheiro-do-youtube",
    title: "Dinheiro pago diretamente pelo YouTube",
    intro:
      "Nesta categoria a própria plataforma repassa parte da receita gerada pelo seu conteúdo. Todos os recursos abaixo exigem participação no Programa de Parcerias do YouTube (YPP) e cumprimento das políticas de monetização.",
    methods: [
      {
        n: 1,
        name: "Anúncios em vídeos longos",
        how: "O YouTube exibe anúncios antes, durante ou ao redor dos seus vídeos e divide a receita publicitária com você.",
        payer: "YouTube (anunciantes)",
        ypp: "Sim",
        potential: "Variável",
        bestFor: "Canais com volume constante de visualizações e bom tempo de exibição",
        slug: "/como-ganhar-dinheiro-com-anuncios-youtube",
        cta: "Como ganhar dinheiro com anúncios no YouTube",
        detail: [
          "A receita de anúncios não é paga por visualização de vídeo, e sim pelas impressões e interações publicitárias que aquelas visualizações geram. Formatos como pulável, não pulável, bumper, feed e display coexistem na página de exibição.",
          "Dois indicadores organizam essa conta: o CPM (quanto o anunciante paga por mil impressões) e o RPM (quanto você efetivamente recebe por mil visualizações, já considerando a sua parte e todas as fontes de receita).",
          "Por isso dois canais com o mesmo número de visualizações podem receber valores muito diferentes: mudam o país da audiência, o nicho e o interesse comercial dos anunciantes, o idioma, a duração do vídeo, a quantidade de anúncios exibidos, a sazonalidade do mercado publicitário e a adequação do conteúdo às diretrizes de conteúdo apropriado para anunciantes.",
        ],
      },
      {
        n: 2,
        name: "Anúncios nos YouTube Shorts",
        how: "Os anúncios exibidos entre os Shorts formam um pool de receita, distribuído entre criadores conforme a participação nas visualizações.",
        payer: "YouTube (anunciantes)",
        ypp: "Sim",
        potential: "Variável",
        bestFor: "Canais de vídeo curto com alto volume de visualizações",
        slug: "/como-ganhar-dinheiro-com-shorts",
        cta: "Como ganhar dinheiro com YouTube Shorts",
        detail: [
          "A lógica é diferente da dos vídeos longos: em vez de anúncios anexados a um vídeo específico, o YouTube reúne a receita dos anúncios do feed de Shorts, desconta os custos de licenciamento musical e distribui o restante entre os criadores elegíveis de acordo com a proporção de visualizações.",
          "Na prática isso costuma resultar em um RPM menor por visualização e uma dependência maior de volume e constância. Shorts também funcionam como porta de entrada: descobrem novos espectadores que depois consomem vídeos longos, lives e produtos.",
        ],
      },
      {
        n: 3,
        name: "YouTube Premium",
        how: "Quando um assinante Premium assiste ao seu conteúdo sem anúncios, você recebe parte da receita de assinaturas proporcional ao consumo.",
        payer: "YouTube (assinantes)",
        ypp: "Sim",
        potential: "Complementar",
        bestFor: "Conteúdo com longo tempo de exibição e audiência fiel",
        slug: "/como-ganhar-dinheiro-com-youtube-premium",
        cta: "Como ganhar dinheiro com YouTube Premium",
        detail: [
          "Nesse caso não existe anúncio: a origem do dinheiro é a mensalidade do assinante. A distribuição acompanha o tempo que os assinantes passam assistindo ao seu conteúdo, o que valoriza vídeos longos, séries, podcasts e materiais que retêm atenção.",
          "É uma receita complementar e silenciosa, que aparece somada aos anúncios no seu relatório de receita.",
        ],
      },
    ],
  },
  {
    id: "dinheiro-dos-fas",
    title: "Dinheiro que vem direto dos fãs",
    intro:
      "Aqui quem paga é o espectador, de forma voluntária. São recursos oficiais de financiamento por fãs, disponíveis para canais elegíveis do YPP, e funcionam melhor quando existe relação próxima com a comunidade.",
    methods: [
      {
        n: 4,
        name: "Clubes do canal (associações)",
        how: "Espectadores pagam uma mensalidade e recebem benefícios exclusivos, como conteúdo reservado, selos, emojis e acesso à comunidade.",
        payer: "Espectador",
        ypp: "Sim",
        potential: "Recorrente",
        bestFor: "Comunidades engajadas, games, educação, nichos de hobby",
        slug: "/como-ganhar-dinheiro-com-clubes-do-canal",
        cta: "Como ganhar dinheiro com Clubes do canal",
        detail: [
          "O grande diferencial é a previsibilidade: em vez de depender de picos de visualizações, você constrói uma base de receita recorrente. Os níveis podem oferecer vídeos antecipados, bastidores, lives fechadas, downloads, badges de fidelidade e emojis personalizados.",
          "Funciona melhor quando o espectador sente pertencimento — e quando os benefícios são entregues com constância.",
        ],
      },
      {
        n: 5,
        name: "Super Chat",
        how: "Durante lives e estreias, o espectador paga para destacar sua mensagem no chat por um período.",
        payer: "Espectador",
        ypp: "Sim",
        potential: "Variável",
        bestFor: "Canais que fazem lives com frequência",
        slug: "/como-ganhar-dinheiro-com-super-chat",
        cta: "Como ganhar dinheiro com Super Chat",
        detail: [
          "É um recurso de momento: quanto mais interativa a live, maior a participação. Responder mensagens em voz alta, ler nomes, criar dinâmicas, pautas abertas e sessões de perguntas aumenta naturalmente o volume.",
        ],
      },
      {
        n: 6,
        name: "Super Stickers",
        how: "Figurinhas animadas pagas que o espectador envia durante lives, complementando o Super Chat.",
        payer: "Espectador",
        ypp: "Sim",
        potential: "Complementar",
        bestFor: "Lives com público jovem e alto engajamento visual",
        slug: "/como-ganhar-dinheiro-com-super-stickers",
        cta: "Como ganhar dinheiro com Super Stickers",
        detail: [
          "Os stickers atuam como uma alternativa mais leve e divertida ao Super Chat, com valores menores e maior frequência. Costumam somar bem quando o canal tem identidade visual e piadas internas com a comunidade.",
        ],
      },
      {
        n: 7,
        name: "Valeu Demais (Super Thanks)",
        how: "O espectador faz uma contribuição única em um vídeo comum ou Short e recebe um comentário destacado.",
        payer: "Espectador",
        ypp: "Sim",
        potential: "Complementar",
        bestFor: "Canais úteis, tutoriais, conteúdo que resolve problemas",
        slug: "/como-ganhar-dinheiro-com-super-thanks",
        cta: "Como ganhar dinheiro com Super Thanks / Valeu Demais",
        detail: [
          "Diferente dos Clubes, não há recorrência nem benefício contínuo: é um agradecimento pontual. Aparece com mais força em vídeos que economizaram tempo ou dinheiro do espectador — tutoriais, consertos, guias e aulas.",
        ],
      },
      {
        n: 8,
        name: "Joias e presentes",
        how: "Em lives verticais e formatos compatíveis, espectadores enviam presentes virtuais comprados com joias.",
        payer: "Espectador",
        ypp: "Sim",
        potential: "Variável",
        bestFor: "Criadores de live vertical e conteúdo de interação",
        slug: "/como-ganhar-dinheiro-com-joias-e-presentes",
        cta: "Como ganhar dinheiro com joias e presentes no YouTube",
        detail: [
          "É o recurso mais recente dessa família e o mais dependente de elegibilidade: disponibilidade por país, tipo de live e requisitos específicos podem variar. Confirme sempre na Central de Ajuda oficial antes de planejar receita com base nele.",
        ],
      },
    ],
  },
  {
    id: "youtube-shopping",
    title: "YouTube Shopping",
    intro:
      "O Shopping transforma o vídeo em vitrine: produtos aparecem marcados nos vídeos, Shorts, lives e em uma aba na sua página do canal. Pode ser usado com produtos próprios ou como afiliado de marcas parceiras.",
    methods: [
      {
        n: 9,
        name: "Vender seus próprios produtos",
        how: "Você conecta sua loja ao canal e marca seus produtos nos vídeos, transformando audiência em compradores.",
        payer: "Cliente",
        ypp: "Depende do recurso e do país",
        potential: "Alto",
        bestFor: "Marcas próprias, merchandising, criadores com comunidade fiel",
        slug: "/como-vender-produtos-no-youtube",
        cta: "Como vender produtos pelo YouTube Shopping",
        detail: [
          "Além de camisetas e canecas, entram produtos de nicho, equipamentos, kits, livros e itens autorais. O ponto forte é a margem: a receita é sua, não uma divisão de publicidade.",
        ],
      },
      {
        n: 10,
        name: "Afiliado pelo YouTube Shopping",
        how: "Você marca produtos de marcas parceiras nos seus vídeos e recebe comissão pelas vendas geradas.",
        payer: "Empresa (comissão)",
        ypp: "Sim, com requisitos próprios",
        potential: "Alto",
        bestFor: "Reviews, comparativos, unboxing, tutoriais, beleza e tecnologia",
        slug: "/como-ganhar-dinheiro-com-afiliados",
        cta: "Como ganhar dinheiro com afiliados no YouTube Shopping",
        detail: [
          "Funciona pela intenção de compra: quem assiste a um comparativo já está decidindo. Disponibilidade e programas parceiros variam por país — no Brasil o recurso depende das integrações ativas na sua região.",
        ],
      },
    ],
  },
  {
    id: "empresas-pagam",
    title: "Empresas pagando o criador",
    intro:
      "Esta categoria não passa pelo YouTube: o dinheiro vem de marcas, anunciantes e programas externos. É justamente por isso que funciona mesmo para quem ainda não está no YPP.",
    methods: [
      {
        n: 11,
        name: "Marketing de afiliados (fora do YouTube)",
        how: "Você divulga links de programas de afiliados na descrição e nos vídeos e recebe comissão por venda ou cadastro.",
        payer: "Empresa (comissão)",
        ypp: "Não",
        potential: "Alto",
        bestFor: "Qualquer canal com audiência de intenção comercial",
        slug: "/como-ganhar-dinheiro-com-afiliados",
        cta: "Como ganhar dinheiro com marketing de afiliados no YouTube",
        detail: [
          "O funil é direto: YouTube → clique no link → página do anunciante → compra → comissão. As categorias mais comuns são produtos físicos, softwares e ferramentas, hospedagem, cursos, plataformas, serviços e produtos digitais.",
          "Duas regras práticas: divulgar apenas o que você usaria e sinalizar a relação comercial ao público, marcando também o conteúdo pago nas configurações do vídeo quando aplicável.",
        ],
      },
      {
        n: 12,
        name: "Patrocínios",
        how: "Uma empresa paga para ser apresentada no seu vídeo, em formato de inserção, menção ou vídeo dedicado.",
        payer: "Empresa",
        ypp: "Não",
        potential: "Alto",
        bestFor: "Canais de nicho com audiência definida, mesmo pequenos",
        slug: "/como-conseguir-patrocinio-no-youtube",
        cta: "Como conseguir patrocinadores para o seu canal",
        detail: [
          "O preço não é definido pelo YouTube, e sim negociado: audiência, nicho, formato, exclusividade, duração da menção e direitos de uso entram na conta. Um mídia kit com dados reais do canal costuma ser o que destrava as primeiras conversas.",
        ],
      },
      {
        n: 13,
        name: "Conteúdo patrocinado e publieditorial",
        how: "A marca contrata um vídeo construído em torno do produto, em vez de uma inserção dentro de um vídeo próprio.",
        payer: "Empresa",
        ypp: "Não",
        potential: "Alto",
        bestFor: "Criadores com produção consistente e credibilidade no nicho",
        slug: "/como-vender-produtos-no-youtube",
        cta: "Como fazer conteúdo patrocinado no YouTube",
        detail: [
          "Vale separar os formatos: patrocínio é apoio a um conteúdo que existiria de qualquer forma; publicidade é espaço comprado; publieditorial e review patrocinado são conteúdos criados para a marca; integração de produto é o uso natural do produto na narrativa.",
          "Em todos os casos, a divulgação de parceria paga é obrigatória pelas políticas do YouTube e pela legislação de publicidade.",
        ],
      },
      {
        n: 14,
        name: "Licenciamento de vídeos",
        how: "Você licencia trechos ou vídeos completos para veículos, produtoras e empresas que querem usar seu material.",
        payer: "Empresa",
        ypp: "Não",
        potential: "Pontual",
        bestFor: "Conteúdo original, imagens raras, natureza, viral, arquivo",
        slug: "/como-ganhar-dinheiro-com-licenciamento-de-videos",
        cta: "Como ganhar dinheiro licenciando vídeos",
        detail: [
          "Televisão, portais de notícia, documentários, campanhas publicitárias e bancos de mídia compram direitos de uso. Manter os arquivos originais em alta resolução e a titularidade clara dos direitos é pré-requisito.",
        ],
      },
    ],
  },
  {
    id: "vender-produtos",
    title: "Usar o YouTube para vender produtos",
    intro:
      "Aqui o canal deixa de ser o produto e passa a ser o canal de aquisição. Esta é a categoria com maior potencial de margem — e a que menos depende de regras da plataforma.",
    methods: [
      {
        n: 15,
        name: "Produtos físicos e marca própria",
        how: "O canal constrói audiência e demanda para uma marca de produtos físicos que é sua.",
        payer: "Cliente",
        ypp: "Não",
        potential: "Alto",
        bestFor: "Nichos com identidade forte: moda, fitness, hobby, equipamentos",
        slug: "/como-vender-produtos-no-youtube",
        cta: "Como vender produtos físicos usando o YouTube",
        detail: [
          "Roupas, acessórios, livros, equipamentos, suplementos, produtos personalizados e itens de nicho. Exige logística e capital de giro, mas a receita não depende de CPM nem de elegibilidade.",
        ],
      },
      {
        n: 16,
        name: "Produtos digitais",
        how: "Você vende arquivos e materiais próprios: e-books, templates, planilhas, presets, packs e ferramentas.",
        payer: "Cliente",
        ypp: "Não",
        potential: "Alto",
        bestFor: "Canais de tutorial, criativos, produtividade, finanças, design",
        slug: "/como-vender-produtos-digitais-no-youtube",
        cta: "Como vender produtos digitais usando o YouTube",
        detail: [
          "Sem estoque e sem frete, a margem é alta e a escala é imediata. O caminho mais eficiente é criar o produto como continuação natural do vídeo: se o vídeo ensina, o produto executa.",
        ],
      },
      {
        n: 17,
        name: "Cursos online",
        how: "O conteúdo gratuito gera autoridade e audiência, e o curso pago aprofunda o que o canal ensina de graça.",
        payer: "Cliente",
        ypp: "Não",
        potential: "Alto",
        bestFor: "Canais educacionais, profissionais e técnicos",
        slug: "/como-vender-cursos-pelo-youtube",
        cta: "Como vender cursos usando o YouTube",
        detail: [
          "O modelo é conhecido: conteúdo gratuito → autoridade → audiência → curso pago. Como o YouTube já filtra quem tem interesse no assunto, o custo de aquisição tende a ser muito menor do que em mídia paga.",
        ],
      },
    ],
  },
  {
    id: "servicos",
    title: "Vender conhecimento e serviços",
    intro:
      "Para quem já tem uma habilidade profissional, o canal funciona como portfólio permanente e prova de competência. É o caminho mais rápido para receita com poucos inscritos.",
    methods: [
      {
        n: 18,
        name: "Consultoria",
        how: "Você transforma conhecimento demonstrado nos vídeos em atendimento pago, individual ou para empresas.",
        payer: "Cliente",
        ypp: "Não",
        potential: "Alto por cliente",
        bestFor: "Especialistas, B2B, finanças, marketing, saúde, tecnologia",
        slug: "/como-ganhar-dinheiro-com-consultoria-no-youtube",
        cta: "Como conseguir clientes de consultoria pelo YouTube",
        detail: [
          "Poucos vídeos bem posicionados em buscas específicas podem sustentar uma agenda cheia, porque o ticket é alto e o volume necessário é pequeno.",
        ],
      },
      {
        n: 19,
        name: "Prestação de serviços",
        how: "O canal mostra o seu trabalho e atrai clientes para o serviço que você já vende.",
        payer: "Cliente",
        ypp: "Não",
        potential: "Alto",
        bestFor: "Edição, design, programação, marketing, fotografia, tradução",
        slug: "/como-ganhar-dinheiro-com-servicos-no-youtube",
        cta: "Como conseguir clientes para serviços pelo YouTube",
        detail: [
          "Cada vídeo é simultaneamente conteúdo e amostra do padrão de qualidade. Estudos de caso, processos e antes-e-depois convertem melhor do que conteúdo puramente teórico.",
        ],
      },
      {
        n: 20,
        name: "Mentoria",
        how: "Programas individuais ou em grupo, com acompanhamento recorrente, vendidos para a própria audiência.",
        payer: "Cliente",
        ypp: "Não",
        potential: "Recorrente",
        bestFor: "Nichos de carreira, negócios, criação de conteúdo e performance",
        slug: "/como-ganhar-dinheiro-com-consultoria-no-youtube",
        cta: "Como vender mentorias pelo YouTube",
        detail: [
          "A mentoria em grupo resolve o limite de tempo da consultoria individual: mesmo esforço, mais alunos, receita recorrente e comunidade como benefício adicional.",
        ],
      },
    ],
  },
  {
    id: "clientes-e-leads",
    title: "Gerar clientes e leads",
    intro:
      "Nem todo canal precisa vender no próprio vídeo. Muitos negócios usam o YouTube como topo de funil: visualizações → visitantes → leads → reuniões → clientes.",
    methods: [
      {
        n: 21,
        name: "Geração de leads",
        how: "O vídeo atrai a pessoa certa, e uma isca (material, diagnóstico, teste) captura o contato para venda posterior.",
        payer: "Cliente (indireto)",
        ypp: "Não",
        potential: "Alto",
        bestFor: "SaaS, B2B, serviços com ciclo de venda longo",
        slug: "/como-usar-youtube-para-gerar-leads",
        cta: "Como gerar leads usando o YouTube",
        detail: [
          "Aqui a métrica que importa não é visualização, é lead qualificado. Vídeos que respondem dúvidas de fundo de funil valem mais do que vídeos virais.",
        ],
      },
      {
        n: 22,
        name: "Atrair clientes para o próprio negócio",
        how: "Empresas produzem conteúdo para serem encontradas por quem já busca aquela solução.",
        payer: "Cliente",
        ypp: "Não",
        potential: "Alto",
        bestFor: "Imobiliárias, escritórios, agências, clínicas, lojas, restaurantes, SaaS",
        slug: "/como-conseguir-clientes-com-youtube",
        cta: "Como usar o YouTube para conseguir clientes",
        detail: [
          "Um tour de imóvel, uma explicação jurídica ou uma demonstração de produto seguem gerando contatos anos depois de publicados — o YouTube funciona como buscador, não apenas como rede social.",
        ],
      },
    ],
  },
  {
    id: "recorrencia",
    title: "Comunidade e receita recorrente",
    intro:
      "Modelos de assinatura fora da plataforma dão previsibilidade e independência de algoritmo.",
    methods: [
      {
        n: 23,
        name: "Comunidade paga",
        how: "Grupo privado por assinatura, em Discord, plataforma própria ou área de membros, com benefícios exclusivos.",
        payer: "Espectador",
        ypp: "Não",
        potential: "Recorrente",
        bestFor: "Nichos de aprendizado contínuo, investimentos, criação, games",
        slug: "/como-criar-comunidade-paga-com-youtube",
        cta: "Como criar uma comunidade paga usando o YouTube",
        detail: [
          "O valor percebido vem menos do conteúdo e mais do acesso: encontros ao vivo, respostas diretas, networking e material aplicado. Diferente dos Clubes do canal, você controla a plataforma, os dados e a margem.",
        ],
      },
      {
        n: 24,
        name: "Newsletter e audiência própria",
        how: "O canal capta e-mails e a newsletter constrói relacionamento até a venda ou o patrocínio direto.",
        payer: "Empresa ou cliente",
        ypp: "Não",
        potential: "Médio a alto",
        bestFor: "Nichos informativos, negócios, tecnologia, finanças",
        slug: "/como-ganhar-dinheiro-com-newsletter-usando-youtube",
        cta: "Como criar uma newsletter usando o YouTube",
        detail: [
          "O modelo é YouTube → inscrição na newsletter → relacionamento → venda. A lista é o único ativo de audiência que continua seu mesmo que o alcance na plataforma caia.",
        ],
      },
    ],
  },
];

const otherWays = [
  "Doações e apoio externo por plataformas de financiamento",
  "Venda de direitos sobre conteúdo e arquivo",
  "Produção de conteúdo e UGC para empresas",
  "Participação em campanhas e ações de marca",
  "Eventos presenciais, palestras e workshops",
  "Livros e publicações a partir da autoridade do canal",
  "Produtos de marca e colaborações (collabs)",
  "Licenciamento de marca pessoal e franquias de conteúdo",
  "Oportunidades comerciais e parcerias geradas pelo canal",
  "Contratação profissional decorrente do portfólio público",
];

const faqItems = [
  { question: "Quanto dinheiro dá para ganhar com YouTube?", answer: "Não existe um valor padrão. A receita depende do nicho, do país da audiência, do formato do conteúdo, das fontes de monetização ativas e, principalmente, do modelo de negócio ao redor do canal. Canais com o mesmo número de visualizações podem ter receitas completamente diferentes." },
  { question: "Quantas visualizações são necessárias para ganhar dinheiro?", answer: "Para receita de anúncios, é preciso primeiro entrar no Programa de Parcerias do YouTube, que tem critérios de inscritos e de horas de exibição ou visualizações de Shorts. Já para afiliados, patrocínios, produtos e serviços não existe mínimo de visualizações: o que importa é a intenção do público." },
  { question: "Quantos inscritos preciso para monetizar?", answer: "O YouTube exige um número mínimo de inscritos combinado com tempo de exibição ou visualizações de Shorts para o YPP, e os limites variam conforme o nível de acesso e o país. Consulte a Central de Ajuda oficial para os requisitos atuais antes de planejar." },
  { question: "Dá para ganhar dinheiro no YouTube sem aparecer?", answer: "Sim. Canais sem rosto usam narração, telas gravadas, animação, imagens de acervo licenciadas e conteúdo informativo. Todas as formas de monetização citadas neste guia funcionam sem que o criador apareça, desde que o conteúdo seja original e cumpra as políticas da plataforma." },
  { question: "Dá para ganhar dinheiro no YouTube sem monetização oficial?", answer: "Sim. Afiliados, patrocínios, produtos próprios, cursos, consultoria, serviços, comunidade paga e geração de leads não passam pelo YouTube e não exigem participação no YPP." },
  { question: "Quanto o YouTube paga por 1.000 visualizações?", answer: "Não há um valor fixo. O que existe é o RPM, que mede quanto o canal recebeu por mil visualizações no período, e varia por nicho, país, formato e época do ano. Qualquer número divulgado como universal é apenas uma média de terceiros, não uma regra da plataforma." },
  { question: "Quanto o YouTube paga por 1 milhão de visualizações?", answer: "Também não existe valor único. Um milhão de visualizações em um nicho com forte disputa por anunciantes pode render muito mais do que o mesmo volume em conteúdo com baixo interesse comercial. Além disso, parte da receita pode vir de Premium, Supers, afiliados ou vendas." },
  { question: "Shorts dão dinheiro?", answer: "Sim, para canais elegíveis. A receita dos anúncios do feed de Shorts é reunida em um pool, descontados os custos de licenciamento musical, e distribuída conforme a participação nas visualizações. O RPM costuma ser menor que o de vídeos longos, por isso volume e constância importam mais." },
  { question: "O YouTube Premium paga os criadores?", answer: "Sim. Parte da receita de assinaturas é distribuída aos criadores conforme o tempo que os assinantes passam assistindo ao conteúdo deles, mesmo sem exibição de anúncios." },
  { question: "Como ganhar dinheiro com lives?", answer: "Com Super Chat, Super Stickers, joias e presentes, associações do canal, além de patrocínios de transmissão, vendas de produtos durante a live e divulgação de afiliados. Lives frequentes e interativas aumentam bastante a participação paga." },
  { question: "Como ganhar dinheiro com afiliados no YouTube?", answer: "Escolha produtos que a sua audiência já pretende comprar, produza reviews, comparativos e tutoriais, coloque os links na descrição e nos comentários fixados, sinalize a parceria comercial e acompanhe quais vídeos realmente geram vendas." },
  { question: "Como conseguir patrocinadores?", answer: "Defina o nicho e o perfil da audiência, monte um mídia kit com dados reais do canal, liste marcas que já anunciam para esse público e apresente formatos concretos de entrega. Canais pequenos e muito segmentados costumam fechar patrocínios locais e de nicho antes de crescer." },
  { question: "É possível viver de YouTube?", answer: "É possível, mas raramente com uma única fonte. Canais profissionais combinam receita da plataforma com afiliados, patrocínios, produtos e serviços, justamente para reduzir a dependência de anúncios e de variações de alcance." },
  { question: "Qual nicho do YouTube dá mais dinheiro?", answer: "Nichos com alta intenção de compra e anunciantes disputados — finanças, tecnologia, negócios, software, saúde e educação — tendem a ter CPM e oportunidades comerciais maiores. Já entretenimento e conteúdo amplo compensam com volume e patrocínios." },
  { question: "É melhor Shorts ou vídeos longos?", answer: "São funções diferentes. Shorts entregam alcance e descoberta com RPM menor; vídeos longos entregam tempo de exibição, receita publicitária, Premium e profundidade suficiente para vender produtos e serviços. A combinação dos dois costuma ser o melhor caminho." },
  { question: "Como ganhar dinheiro com poucos inscritos?", answer: "Foque em métodos que não dependem de volume: consultoria, serviços, produtos digitais, cursos, afiliados de ticket alto e geração de leads. Um canal pequeno com audiência certa pode faturar mais que um canal grande sem intenção comercial." },
];

const profiles = [
  ["Canal de tecnologia", "Afiliados + patrocínios + Shopping"],
  ["Canal educacional", "Cursos + consultoria + Premium + anúncios"],
  ["Canal de entretenimento", "Anúncios + patrocínios + produtos"],
  ["Canal de games", "Lives + Supers + Clubes + patrocínios"],
  ["Canal de negócios", "Consultoria + cursos + leads + patrocínios"],
  ["Canal de beleza", "Afiliados + Shopping + produtos + patrocínios"],
  ["Canal de culinária", "Produtos + afiliados + patrocínios + cursos"],
  ["Canal de fitness", "Produtos + afiliados + cursos + membros"],
];

const sources = [
  { label: "Programa de Parcerias do YouTube: visão geral e elegibilidade", url: "https://support.google.com/youtube/answer/72851" },
  { label: "Como ganhar dinheiro no YouTube (Central de Ajuda)", url: "https://support.google.com/youtube/answer/72857" },
  { label: "Monetização de Shorts e receita do pool de anúncios", url: "https://support.google.com/youtube/answer/12504220" },
  { label: "Receita de YouTube Premium para criadores", url: "https://support.google.com/youtube/answer/6306276" },
  { label: "Financiamento por fãs: Supers, Clubes e presentes", url: "https://support.google.com/youtube/answer/9165343" },
  { label: "YouTube Shopping e programa de afiliados", url: "https://support.google.com/youtube/answer/12258811" },
  { label: "Políticas de monetização do YouTube", url: "https://support.google.com/youtube/answer/1311392" },
];

const toc = [
  { id: "visao-geral", label: "Visão geral: as 4 grandes categorias" },
  ...groups.map((g) => ({ id: g.id, label: g.title })),
  { id: "outras-formas", label: "25. Outras maneiras de ganhar dinheiro" },
  { id: "sem-monetizacao", label: "Dá para ganhar sem ser monetizado?" },
  { id: "inscritos", label: "Precisa de muitos inscritos?" },
  { id: "melhor-forma", label: "Qual é a melhor forma?" },
  { id: "diversificar", label: "Como combinar várias fontes de renda" },
  { id: "quanto-ganha", label: "Quanto um canal pode ganhar?" },
  { id: "ypp", label: "Requisitos do YPP em 2026" },
  { id: "atualizacoes", label: "Atualizações de 2026 e o que vem em 2027" },
  { id: "faq", label: "Perguntas frequentes" },
  { id: "fontes", label: "Fontes oficiais" },
];

function MethodCard({ m }: { m: Method }) {
  return (
    <motion.article
      id={`metodo-${m.n}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card-premium rounded-3xl p-7 scroll-mt-24"
    >
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-11 h-11 rounded-2xl gradient-red text-primary-foreground font-bold grid place-items-center text-lg">
          {m.n}
        </span>
        <div className="min-w-0">
          <h3 className="text-xl md:text-2xl font-bold text-foreground">{m.name}</h3>
          <p className="mt-2 text-base text-muted-foreground leading-relaxed">{m.how}</p>
        </div>
      </div>

      <dl className="mt-6 grid sm:grid-cols-2 gap-3">
        {[
          ["Quem paga", m.payer],
          ["Precisa de YPP", m.ypp],
          ["Potencial", m.potential],
          ["Melhor para", m.bestFor],
        ].map(([k, v]) => (
          <div key={k} className="rounded-2xl bg-secondary/40 px-4 py-3">
            <dt className="text-sm font-semibold text-primary">{k}</dt>
            <dd className="text-base text-foreground/90">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 space-y-3.5">
        {m.detail.map((p, i) => (
          <p key={i} className="text-base text-muted-foreground leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      <Link
        to={m.slug}
        className="mt-6 inline-flex items-center gap-2 text-base font-bold text-primary hover:gap-3 transition-premium"
      >
        Leia o guia completo: {m.cta}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.article>
  );
}

export default function GanharDinheiroYoutube() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const allMethods = groups.flatMap((g) => g.methods);

  return (
    <div className="flex min-h-screen bg-background">
      <SEOHead
        title="Como Ganhar Dinheiro no YouTube em 2026: Todas as Formas"
        description="Guia completo de como ganhar dinheiro no YouTube em 2026: anúncios, Shorts, Premium, Clubes, Supers, Shopping, afiliados, patrocínios, produtos, cursos e serviços."
        keywords="como ganhar dinheiro no youtube, como ganhar dinheiro com youtube, como monetizar youtube, monetização youtube, formas de ganhar dinheiro no youtube, quanto ganha um youtuber, como ganhar dinheiro com shorts, como monetizar canal"
        canonical={`${SITE}${PATH}`}
        breadcrumbs={[
          { name: "Início", url: `${SITE}/` },
          { name: "Como ganhar dinheiro no YouTube em 2026", url: `${SITE}${PATH}` },
        ]}
        faqItems={faqItems}
      />
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AppHeader />
        <main className="flex-1 overflow-y-auto">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
            <nav aria-label="Trilha de navegação" className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-premium">Início</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground/80">Como ganhar dinheiro no YouTube</span>
            </nav>

            <span className="eyebrow text-primary">Conteúdo Premium</span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold gradient-text leading-tight">
              Como ganhar dinheiro com YouTube em 2026: todas as formas de monetizar um canal
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">Última atualização: agosto de 2026</p>

            <figure className="mt-8 rounded-3xl overflow-hidden shadow-elevated ring-1 ring-border/50">
              <img
                src={heroArticle}
                alt="Guia completo sobre todas as maneiras de ganhar dinheiro com YouTube"
                width={1664}
                height={936}
                className="w-full h-auto"
              />
            </figure>

            <div className="mt-8 space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Existem muitas formas de ganhar dinheiro com YouTube — e os anúncios do AdSense são
                apenas uma delas. Alguns métodos dependem da aprovação no Programa de Parcerias do
                YouTube (YPP); outros funcionam desde o primeiro vídeo, sem qualquer autorização da
                plataforma.
              </p>
              <p>
                É por isso que canais pequenos também geram receita: o dinheiro nem sempre vem da
                plataforma. Ele pode vir de marcas, de programas de afiliados, dos próprios
                espectadores ou de produtos e serviços que você vende. O potencial de cada caminho
                depende do nicho, da audiência, da intenção de compra do público, do país, do
                formato do conteúdo e, sobretudo, do modelo de negócio construído ao redor do canal.
              </p>
              <p>
                Este guia organiza <strong className="text-foreground">todas as principais maneiras de monetizar um canal em 2026</strong>,
                separando com clareza o que é <em>monetização oficial do YouTube</em> do que é{" "}
                <em>receita gerada usando o YouTube</em>. Cada método tem um card resumido, uma
                explicação de profundidade moderada e um link para o guia específico e aprofundado.
              </p>
            </div>

            {/* Índice */}
            <nav aria-labelledby="indice-titulo" className="mt-10 card-premium rounded-3xl p-7">
              <h2 id="indice-titulo" className="flex items-center gap-2.5 text-xl font-bold text-foreground">
                <ListOrdered className="w-5 h-5 text-primary" />
                Índice do guia
              </h2>
              <ol className="mt-5 grid sm:grid-cols-2 gap-2.5">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className="text-base text-muted-foreground hover:text-primary transition-premium"
                    >
                      {t.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Seção 1 — visão geral */}
            <section id="visao-geral" className="mt-14 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                Quais são as principais formas de ganhar dinheiro com YouTube?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Toda a monetização pode ser dividida em quatro grandes grupos, de acordo com quem
                efetivamente paga o criador:
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-5">
                {[
                  { t: "1. O YouTube paga o criador", d: "Anúncios em vídeos longos, anúncios nos Shorts e receita de YouTube Premium." },
                  { t: "2. Os espectadores pagam o criador", d: "Clubes do canal, Super Chat, Super Stickers, Valeu Demais, joias e presentes." },
                  { t: "3. Empresas pagam o criador", d: "Patrocínios, publicidade, publieditorial, conteúdo patrocinado, afiliados e licenciamento." },
                  { t: "4. O criador usa o YouTube para vender", d: "Produtos físicos e digitais, cursos, e-books, consultoria, serviços, comunidades, assinaturas e leads." },
                ].map((g) => (
                  <div key={g.t} className="card-premium rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-foreground">{g.t}</h3>
                    <p className="mt-2 text-base text-muted-foreground leading-relaxed">{g.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 overflow-x-auto card-premium rounded-2xl">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">
                    Comparação das formas de ganhar dinheiro no YouTube
                  </caption>
                  <thead className="bg-secondary/50">
                    <tr>
                      {["Método", "Quem paga", "Precisa de YPP?", "Potencial", "Melhor para"].map((h) => (
                        <th key={h} scope="col" className="px-4 py-3 font-bold text-foreground whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {allMethods.map((m) => (
                      <tr key={m.n} className="border-t border-border/50">
                        <th scope="row" className="px-4 py-3 font-semibold text-foreground align-top">
                          <a href={`#metodo-${m.n}`} className="hover:text-primary transition-premium">
                            {m.name}
                          </a>
                        </th>
                        <td className="px-4 py-3 text-muted-foreground align-top">{m.payer}</td>
                        <td className="px-4 py-3 text-muted-foreground align-top">{m.ypp}</td>
                        <td className="px-4 py-3 text-muted-foreground align-top">{m.potential}</td>
                        <td className="px-4 py-3 text-muted-foreground align-top">{m.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Grupos de métodos */}
            {groups.map((g) => (
              <section key={g.id} id={g.id} className="mt-16 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">{g.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{g.intro}</p>
                <div className="mt-7 space-y-6">
                  {g.methods.map((m) => (
                    <MethodCard key={m.n} m={m} />
                  ))}
                </div>
              </section>
            ))}

            {/* 25 — outras formas */}
            <section id="outras-formas" className="mt-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                25. Outras maneiras de ganhar dinheiro com YouTube
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Além dos métodos principais, a autoridade construída em um canal abre caminhos que
                não se encaixam em nenhuma categoria fechada. Cada um deles terá um guia próprio:
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {otherWays.map((w) => (
                  <li key={w} className="glass-card rounded-2xl px-5 py-4 text-base text-foreground/90">
                    {w}
                  </li>
                ))}
              </ul>
            </section>

            {/* Seção 12 */}
            <section id="sem-monetizacao" className="mt-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                É possível ganhar dinheiro sem ser monetizado pelo YouTube?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Sim. Essa é provavelmente a informação mais importante deste guia. Existe uma
                diferença fundamental entre dois conceitos:
              </p>
              <div className="mt-6 grid md:grid-cols-2 gap-5">
                <div className="card-premium rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground">Monetização dentro do YouTube</h3>
                  <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                    Recursos oficiais da plataforma: anúncios, Shorts, Premium, Clubes, Supers,
                    presentes e Shopping. Exigem aprovação no YPP, elegibilidade por país e
                    conformidade com as políticas de monetização.
                  </p>
                </div>
                <div className="card-premium rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground">Monetização usando o YouTube</h3>
                  <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                    O canal é o canal de aquisição, e a receita acontece fora da plataforma:
                    afiliados, patrocínios, produtos, cursos, consultoria, serviços, comunidade e
                    geração de leads. Nada disso depende do YPP.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Um canal com 300 inscritos, ainda sem acesso ao Programa de Parcerias, pode fechar
                um patrocínio local, vender uma consultoria, indicar produtos como afiliado ou
                captar leads para uma empresa. O YouTube não precisa te pagar para o seu canal dar
                lucro.
              </p>
            </section>

            {/* Seção 13 */}
            <section id="inscritos" className="mt-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                É preciso ter muitos inscritos para ganhar dinheiro?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Número de inscritos não é sinônimo de receita. O que determina o faturamento é a
                combinação entre audiência e modelo de negócio:
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Canal pequeno + produto de ticket alto: poucos clientes bastam para uma receita relevante.",
                  "Canal pequeno + consultoria: uma agenda cheia depende de dezenas de contatos, não de milhões de views.",
                  "Canal de nicho + afiliados: público com alta intenção de compra converte muito acima da média.",
                  "Canal grande com baixa intenção comercial: muitas visualizações, RPM baixo e pouca venda direta.",
                  "Canal grande + publicidade: volume viabiliza patrocínios recorrentes e receita publicitária significativa.",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-base text-muted-foreground leading-relaxed">
                    <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </section>

            {/* Seção 14 */}
            <section id="melhor-forma" className="mt-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                Qual é a melhor forma de ganhar dinheiro no YouTube?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Não existe uma resposta única. A escolha depende de nicho, tamanho e perfil da
                audiência, poder de compra, intenção comercial, formato, frequência de publicação,
                país, autoridade, existência de produto próprio e capacidade de vender. O quadro
                abaixo mostra combinações que costumam fazer sentido:
              </p>
              <div className="mt-6 overflow-x-auto card-premium rounded-2xl">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">Métodos por perfil de canal</caption>
                  <thead className="bg-secondary/50">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-bold text-foreground">Perfil do canal</th>
                      <th scope="col" className="px-4 py-3 font-bold text-foreground">Métodos mais interessantes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profiles.map(([p, m]) => (
                      <tr key={p} className="border-t border-border/50">
                        <th scope="row" className="px-4 py-3 font-semibold text-foreground whitespace-nowrap">{p}</th>
                        <td className="px-4 py-3 text-muted-foreground">{m}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Seção 15 */}
            <section id="diversificar" className="mt-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                Como combinar várias fontes de renda
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Canais profissionais raramente dependem de uma única fonte. A estrutura mais comum
                soma camadas: receita do YouTube + afiliados + patrocínios + produtos + serviços +
                comunidade.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Receita do YouTube", "Afiliados", "Patrocínios", "Produtos", "Serviços", "Comunidade"].map((t) => (
                  <span key={t} className="glass-card px-5 py-3 rounded-2xl text-base font-semibold text-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Diversificar reduz o risco: mudanças de algoritmo, queda de CPM, sazonalidade
                publicitária ou alterações de política deixam de ser ameaças existenciais quando a
                receita está distribuída entre plataforma, marcas e clientes.
              </p>
            </section>

            {/* Seção 16 */}
            <section id="quanto-ganha" className="mt-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                Quanto um canal pode ganhar?
              </h2>
              <div className="mt-4 space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Não existe valor universal por visualização, e qualquer tabela que prometa um
                  número exato por mil views deve ser lida com desconfiança. O que existe são
                  métricas e fontes de receita distintas:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "CPM: quanto o anunciante paga por mil impressões de anúncio.",
                    "RPM: quanto o canal recebeu por mil visualizações, somando todas as fontes de receita da plataforma.",
                    "Receita publicitária: depende de nicho, país, formato e demanda dos anunciantes.",
                    "Receita de afiliados: depende de conversão e comissão, não de visualizações.",
                    "Receita de patrocínio: valor negociado, independente do CPM.",
                    "Receita de produtos: definida pela sua margem.",
                    "Receita de serviços: definida pelo seu ticket e pela sua capacidade de atendimento.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-base">
                      <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p>
                  É por isso que o mesmo número de visualizações pode produzir resultados
                  financeiros completamente diferentes entre dois canais.
                </p>
              </div>
            </section>

            {/* Seção 17 */}
            <section id="ypp" className="mt-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                Requisitos do Programa de Parcerias do YouTube em 2026
              </h2>
              <div className="mt-4 space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  O YPP é o programa oficial que libera os recursos de monetização da plataforma. O
                  acesso é organizado em níveis: um nível inicial dá acesso aos recursos de
                  financiamento por fãs (Supers, Clubes e, quando disponível, Shopping), e o nível
                  completo libera a receita de anúncios em vídeos longos, Shorts e YouTube Premium.
                </p>
                <p>
                  Em linhas gerais, a elegibilidade combina: número mínimo de inscritos, mais horas
                  públicas de exibição em vídeos longos <em>ou</em> visualizações válidas de Shorts em
                  um período recente; conta sem avisos ativos de diretrizes da comunidade;
                  conformidade com as políticas de monetização e com as diretrizes de conteúdo
                  apropriado para anunciantes; conta do AdSense vinculada; verificação em duas
                  etapas; e residência em país ou região onde o programa está disponível.
                </p>
                <p>
                  Cada recurso tem exigências próprias: Super Chat, Super Stickers, Valeu Demais,
                  Clubes do canal, joias e presentes, YouTube Shopping (produtos próprios e
                  afiliados) e monetização de Shorts têm critérios adicionais de idade mínima, país e
                  disponibilidade — vários deles ainda com lançamento gradual por região.
                </p>
              </div>
              <div className="mt-6 card-premium rounded-2xl p-6 border-l-4 border-primary">
                <p className="flex gap-3 text-base text-foreground/90 leading-relaxed">
                  <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Aviso:</strong> os requisitos do YouTube podem mudar. Consulte a
                    documentação oficial antes de tomar decisões com base nessas informações.{" "}
                    <a
                      href="https://support.google.com/youtube/answer/72851"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-primary font-semibold inline-flex items-center gap-1 hover:underline"
                    >
                      Ver requisitos oficiais do YPP
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </span>
                </p>
              </div>
            </section>

            {/* Seção 18 */}
            <section id="atualizacoes" className="mt-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                Atualizações do YouTube em 2026
              </h2>
              <div className="mt-4 space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  As mudanças mais relevantes dos últimos ciclos seguem valendo em 2026 e vale
                  conhecê-las antes de montar sua estratégia:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Acesso em níveis: recursos de financiamento por fãs liberados antes da receita de anúncios, permitindo monetizar mais cedo.",
                    "Contagem de visualizações de Shorts como caminho alternativo de elegibilidade ao YPP, ao lado das horas de exibição.",
                    "Políticas mais rigorosas sobre conteúdo inautêntico, produção em massa e repetitiva, incluindo material gerado por IA sem valor original.",
                    "Exigência de identificação de conteúdo sintético ou alterado de forma realista.",
                    "Expansão gradual do YouTube Shopping e dos programas de afiliados para novas regiões.",
                    "Presentes e joias em lives verticais em disponibilidade progressiva por país.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-base">
                      <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 card-premium rounded-2xl p-6">
                <h3 className="flex items-center gap-2.5 text-lg font-bold text-foreground">
                  <Info className="w-5 h-5 text-primary" />
                  Mudanças anunciadas para 2027
                </h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  Nenhuma mudança confirmada para 2027 foi verificada em fontes oficiais até a
                  última atualização deste guia. Esta seção existe para receber apenas anúncios
                  publicados pelo próprio YouTube — e o que estiver aqui deve ser lido como
                  mudança futura, nunca como regra vigente em 2026. Enquanto isso, planeje com base
                  nas regras atuais e acompanhe o blog oficial e a Central de Ajuda.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mt-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                Perguntas frequentes sobre ganhar dinheiro no YouTube
              </h2>
              <div className="mt-7 space-y-3.5">
                {faqItems.map((item, i) => (
                  <div key={i} className="card-premium rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                      className="w-full flex items-center justify-between px-6 py-5 text-left transition-premium hover:bg-secondary/40"
                    >
                      <span className="text-base md:text-lg font-semibold text-foreground pr-4">
                        {item.question}
                      </span>
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

            {/* Conclusão */}
            <section className="mt-16">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Conclusão</h2>
              <div className="mt-4 space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  O YouTube não precisa ser apenas uma fonte de receita publicitária. Ele funciona,
                  ao mesmo tempo, como plataforma de conteúdo, mecanismo de aquisição, canal de
                  vendas, construtor de autoridade, casa de uma comunidade, vitrine de produtos,
                  gerador de leads e base de um negócio próprio.
                </p>
                <p>
                  Escolha um método compatível com o seu estágio atual, faça ele funcionar e só
                  depois adicione a próxima camada. Diversificação vem da execução, não do
                  planejamento.
                </p>
              </div>
              <div className="mt-7 card-premium rounded-3xl p-7 text-center">
                <h3 className="text-xl font-bold text-foreground">
                  Explore os guias completos de cada método
                </h3>
                <p className="mt-2 text-base text-muted-foreground">
                  Cada forma de monetização apresentada aqui tem (ou terá) um guia específico e
                  muito mais aprofundado.
                </p>
                <a
                  href="#visao-geral"
                  className="mt-6 inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl gradient-red text-primary-foreground font-bold text-base shadow-button hover:shadow-button-hover transition-premium"
                >
                  Voltar ao índice de métodos
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </section>

            {/* Você também pode ler */}
            <section className="mt-16">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                Você também pode ler
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  { to: "/videos", t: "Baixar vídeos do YouTube em 4K e 8K" },
                  { to: "/shorts", t: "Baixar YouTube Shorts em alta qualidade" },
                  { to: "/audio", t: "Converter vídeos do YouTube em MP3" },
                  { to: "/faq", t: "Perguntas frequentes sobre downloads" },
                ].map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="card-premium rounded-2xl px-6 py-5 flex items-center justify-between gap-4 group"
                  >
                    <span className="text-base font-semibold text-foreground">{l.t}</span>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-premium" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Fontes */}
            <section id="fontes" className="mt-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Fontes oficiais</h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Todas as informações sobre recursos e requisitos da plataforma devem ser conferidas
                nas páginas oficiais do YouTube, que são atualizadas com frequência:
              </p>
              <ul className="mt-6 space-y-3">
                {sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-start gap-2 text-base text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0" />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
          <AppFooter />
        </main>
      </div>
    </div>
  );
}
