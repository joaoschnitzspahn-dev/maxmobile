export const SITE = {
  name: "MAX MOBILE",
  tagline: "A nova geração da telefonia móvel.",
  description:
    "Chips nacionais com excelente cobertura, alta velocidade e o melhor custo-benefício do mercado. Conectividade premium em todo o Brasil.",
  url: "https://maxmobile.com.br",
  whatsapp: "5511999999999",
  email: "contato@maxmobile.com.br",
  phone: "(11) 99999-9999",
  address: "São Paulo, SP — Brasil",
} as const;

export const NAV_LINKS = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "FAQ", href: "#faq" },
] as const;

export const BENEFITS = [
  {
    icon: "Zap",
    title: "Alta velocidade",
    description: "Internet 4G/5G com desempenho consistente para streaming, calls e apps.",
  },
  {
    icon: "MapPin",
    title: "Cobertura nacional",
    description: "Conectividade em todo o território brasileiro, do litoral ao interior.",
  },
  {
    icon: "ArrowLeftRight",
    title: "Portabilidade fácil",
    description: "Traga seu número em minutos, sem burocracia e com suporte dedicado.",
  },
  {
    icon: "Headphones",
    title: "Suporte especializado",
    description: "Atendimento humano, rápido e eficiente via WhatsApp e telefone.",
  },
  {
    icon: "CreditCard",
    title: "Chip físico",
    description: "Receba seu chip em casa com entrega rápida e segura em todo o Brasil.",
  },
  {
    icon: "Smartphone",
    title: "eSIM",
    description: "Ativação digital instantânea para dispositivos compatíveis.",
  },
  {
    icon: "Rocket",
    title: "Ativação rápida",
    description: "Comece a usar em poucos minutos após receber ou ativar seu chip.",
  },
  {
    icon: "BadgeCheck",
    title: "Excelente custo-benefício",
    description: "Planos competitivos com transparência total — sem taxas escondidas.",
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
    description: "Entrega rápida em todo o Brasil ou ativação eSIM imediata.",
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

export const PLANS = [
  {
    name: "Start",
    internet: "15 GB",
    minutes: "Ilimitados",
    price: "29,90",
    popular: false,
    benefits: ["WhatsApp ilimitado", "Ligações nacionais", "Roaming nacional"],
  },
  {
    name: "Pro",
    internet: "30 GB",
    minutes: "Ilimitados",
    price: "49,90",
    popular: true,
    benefits: [
      "WhatsApp + redes sociais",
      "Ligações nacionais",
      "Roaming nacional",
      "Suporte prioritário",
    ],
  },
  {
    name: "Max",
    internet: "50 GB",
    minutes: "Ilimitados",
    price: "79,90",
    popular: false,
    benefits: [
      "Apps ilimitados",
      "Ligações internacionais",
      "Roaming América Latina",
      "eSIM incluso",
      "Suporte VIP",
    ],
  },
] as const;

export const WHY_US = [
  {
    icon: "Gauge",
    title: "Performance",
    description: "Rede otimizada para máxima velocidade e estabilidade em qualquer cenário.",
  },
  {
    icon: "Shield",
    title: "Segurança",
    description: "Proteção de dados e privacidade em conformidade com a LGPD.",
  },
  {
    icon: "Wifi",
    title: "Conectividade",
    description: "Infraestrutura robusta com cobertura em milhares de municípios.",
  },
  {
    icon: "Cpu",
    title: "Tecnologia",
    description: "Plataforma digital moderna com ativação e gestão 100% online.",
  },
  {
    icon: "Users",
    title: "Suporte",
    description: "Equipe especializada disponível quando você precisar.",
  },
  {
    icon: "CircleDollarSign",
    title: "Preço justo",
    description: "Planos transparentes sem surpresas na fatura.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Como funciona a portabilidade?",
    answer:
      "Você solicita a portabilidade ao contratar. Mantemos seu número atual e cuidamos de todo o processo com a operadora anterior em até 3 dias úteis.",
  },
  {
    question: "Qual a diferença entre chip físico e eSIM?",
    answer:
      "O chip físico é enviado para seu endereço. O eSIM é ativado digitalmente no seu aparelho compatível, sem necessidade de entrega física.",
  },
  {
    question: "A cobertura funciona em todo o Brasil?",
    answer:
      "Sim. Utilizamos a infraestrutura das principais operadoras parceiras, garantindo cobertura nacional em milhares de cidades.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim. Não há fidelidade. Você pode cancelar quando quiser, sem multas ou taxas de cancelamento.",
  },
  {
    question: "Como entro em contato com o suporte?",
    answer:
      "Nosso suporte está disponível via WhatsApp, e-mail e telefone. Tempo médio de resposta: menos de 5 minutos no WhatsApp.",
  },
  {
    question: "Quanto tempo leva para ativar?",
    answer:
      "Chip físico: ative assim que receber (1–3 dias úteis de entrega). eSIM: ativação imediata após a compra.",
  },
] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/maxmobile" },
  { label: "LinkedIn", href: "https://linkedin.com/company/maxmobile" },
  { label: "YouTube", href: "https://youtube.com/@maxmobile" },
] as const;

export function whatsappUrl(message?: string) {
  const text = message ?? "Olá! Gostaria de saber mais sobre os planos MAX MOBILE.";
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
