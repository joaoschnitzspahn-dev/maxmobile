export const SITE = {
  name: "MAX MOBILE",
  tagline: "A nova geração da telefonia móvel.",
  description:
    "Chips nacionais com excelente cobertura, alta velocidade e o melhor custo-benefício do mercado. Conectividade premium em todo o Brasil.",
  url: "https://maxmobile.com.br",
  /** Formato wa.me: 55 + 08007002300 */
  whatsapp: "5508007002300",
  email: "contato@maxmobile.com.br",
  phone: "0800 700 2300",
  phoneRaw: "08007002300",
  address: "Brasil",
  networkProvider: "Surf Telecom S.A.",
  networkCnpj: "10.455.746/0001-43",
} as const;

export const NAV_LINKS = [
  { label: "Benefícios", href: "/#beneficios" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Planos", href: "/#planos" },
  { label: "Cobertura", href: "/#cobertura" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const BENEFITS = [
  {
    icon: "Zap",
    title: "Alta velocidade",
    description:
      "Navegue em 4G/5G com desempenho consistente para streaming, calls e apps.",
  },
  {
    icon: "MapPin",
    title: "Cobertura nacional",
    description:
      "Roaming nacional gratuito em todo o território brasileiro.",
  },
  {
    icon: "ArrowLeftRight",
    title: "Portabilidade +5 GB",
    description:
      "Traga seu número e ganhe +5 GB de bônus todo mês enquanto o plano estiver ativo.",
  },
  {
    icon: "Headphones",
    title: "Suporte 0800",
    description:
      "Atendimento por WhatsApp e telefone no 0800 700 2300.",
  },
  {
    icon: "Wifi",
    title: "Internet sem cortes",
    description:
      "Após 100% dos dados, continue navegando em velocidade reduzida até o fim da validade.",
  },
  {
    icon: "MessageCircle",
    title: "WhatsApp grátis",
    description:
      "Mensagens, fotos e áudios no WhatsApp não descontam da franquia.",
  },
  {
    icon: "Rocket",
    title: "Acúmulo de dados",
    description:
      "O que sobrar pode acumular na renovação, dentro do limite do plano.",
  },
  {
    icon: "BadgeCheck",
    title: "Sem fidelidade",
    description:
      "Planos mensais sem fidelidade. Renove quando quiser, no plano que preferir.",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Escolha seu plano",
    description: "Selecione o plano ideal para seu perfil de uso.",
  },
  {
    step: "02",
    title: "Receba seu chip",
    description: "Entrega rápida em todo o Brasil ou ativação eSIM, quando disponível.",
  },
  {
    step: "03",
    title: "Ative",
    description: "Siga o passo a passo simples e ative em minutos.",
  },
  {
    step: "04",
    title: "Comece a usar",
    description: "Navegue, ligue e conecte-se com velocidade premium.",
  },
] as const;

/** Planos alinhados ao Termo SMP (franquia + bônus mensal). Valores a partir de R$ 39,90. */
export const PLANS = [
  {
    name: "Essencial",
    internet: "6 GB",
    internetDetail: "4 GB + 2 GB bônus",
    portabilityBonus: "11 GB com portabilidade",
    minutes: "Ilimitados*",
    sms: "60 SMS",
    price: "39,90",
    popular: false,
    benefits: [
      "WhatsApp sem descontar dados",
      "Ligações ilimitadas (CSP 41)",
      "60 SMS",
      "Acúmulo de benefícios",
      "+5 GB/mês com portabilidade",
    ],
  },
  {
    name: "Plus",
    internet: "10 GB",
    internetDetail: "7 GB + 3 GB bônus",
    portabilityBonus: "15 GB com portabilidade",
    minutes: "Ilimitados*",
    sms: "100 SMS",
    price: "49,90",
    popular: false,
    benefits: [
      "WhatsApp sem descontar dados",
      "Ligações ilimitadas (CSP 41)",
      "100 SMS",
      "Acúmulo de benefícios",
      "+5 GB/mês com portabilidade",
    ],
  },
  {
    name: "Pro",
    internet: "15 GB",
    internetDetail: "11 GB + 4 GB bônus",
    portabilityBonus: "20 GB com portabilidade",
    minutes: "Ilimitados*",
    sms: "100 SMS",
    price: "59,90",
    popular: true,
    benefits: [
      "WhatsApp e Waze sem descontar dados",
      "Ligações ilimitadas (CSP 41)",
      "100 SMS",
      "Acúmulo de benefícios",
      "+5 GB/mês com portabilidade",
    ],
  },
  {
    name: "Ultra",
    internet: "23 GB",
    internetDetail: "19 GB + 4 GB bônus",
    portabilityBonus: "28 GB com portabilidade",
    minutes: "Ilimitados*",
    sms: "100 SMS",
    price: "79,90",
    popular: false,
    benefits: [
      "WhatsApp e Waze sem descontar dados",
      "Ligações ilimitadas (CSP 41)",
      "100 SMS",
      "Acúmulo de benefícios",
      "+5 GB/mês com portabilidade",
    ],
  },
  {
    name: "Max",
    internet: "45 GB",
    internetDetail: "41 GB + 4 GB bônus",
    portabilityBonus: "50 GB com portabilidade",
    minutes: "Ilimitados*",
    sms: "100 SMS",
    price: "99,90",
    popular: false,
    benefits: [
      "WhatsApp e Waze sem descontar dados",
      "Ligações ilimitadas (CSP 41)",
      "100 SMS",
      "Acúmulo de benefícios",
      "+5 GB/mês com portabilidade",
    ],
  },
] as const;

export const WHY_US = [
  {
    icon: "Gauge",
    title: "Performance",
    description:
      "Rede otimizada com cobertura nacional e internet sem cortes após a franquia.",
  },
  {
    icon: "Shield",
    title: "Segurança",
    description:
      "Proteção de dados e privacidade em conformidade com a LGPD.",
  },
  {
    icon: "Wifi",
    title: "Conectividade",
    description:
      "Roaming nacional gratuito e ligações para qualquer operadora no Brasil.",
  },
  {
    icon: "Cpu",
    title: "Tecnologia",
    description:
      "Plataforma digital moderna com ativação e gestão simples.",
  },
  {
    icon: "Users",
    title: "Suporte",
    description:
      "Central 0800 700 2300 para atendimento por telefone e WhatsApp.",
  },
  {
    icon: "CircleDollarSign",
    title: "Preço justo",
    description:
      "Planos a partir de R$ 39,90, sem fidelidade e com benefícios claros.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Como funciona a portabilidade?",
    answer:
      "Ao contratar e portar seu número, você ganha +5 GB de bônus mensal enquanto o plano estiver ativo. O primeiro bônus de portabilidade é concedido em até 7 dias úteis após a conclusão do processo.",
  },
  {
    question: "O que é internet sem cortes?",
    answer:
      "Durante a validade do plano, mesmo após consumir 100% dos dados, a internet não é cortada: você continua navegando em velocidade reduzida (32 Kbps) até o fim do prazo.",
  },
  {
    question: "Os dados acumulam?",
    answer:
      "Sim. Se você renovar antes do vencimento, o saldo remanescente pode acumular até o limite de 2× a franquia principal do novo plano. Após o vencimento, o saldo expira.",
  },
  {
    question: "WhatsApp realmente é grátis?",
    answer:
      "Mensagens de texto, fotos e áudios no WhatsApp não descontam da franquia. Chamadas de voz/vídeo pelo WhatsApp e navegação fora do app descontam normalmente.",
  },
  {
    question: "As ligações são ilimitadas?",
    answer:
      "Sim, para ligações locais e longa distância nacionais com CSP 41, para fixo ou móvel de qualquer operadora no Brasil, observadas as regras de uso do Termo SMP.",
  },
  {
    question: "Como falo com o suporte?",
    answer:
      "Pelo WhatsApp ou telefone no 0800 700 2300. Você também pode consultar o Termo SMP no site para todas as condições do serviço.",
  },
] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/maxmobile" },
  { label: "LinkedIn", href: "https://linkedin.com/company/maxmobile" },
  { label: "YouTube", href: "https://youtube.com/@maxmobile" },
] as const;

export function whatsappUrl(message?: string) {
  const text =
    message ?? "Olá! Gostaria de saber mais sobre os planos MAX MOBILE.";
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
