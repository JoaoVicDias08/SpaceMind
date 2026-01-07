export type SpaceFact = {
  id: string;
  title: string;
  category: "curiosity" | "mystery";
  description: string;
  detail: string;
  icon: string;
};

export const spaceFacts: SpaceFact[] = [
  {
    id: "1",
    title: "Som no Espaço?",
    category: "curiosity",
    icon: "🔊",
    description:
      "Dizem que no espaço não existe som… mas isso não é totalmente verdade.",
    detail:
      "No vácuo o som não se propaga, mas em regiões com gases densos — como nebulosas — ondas sonoras podem existir, só que em frequências diferentes das que ouvimos.",
  },
  {
    id: "2",
    title: "Chuva de Diamantes",
    category: "curiosity",
    icon: "💎",
    description:
      "Em alguns planetas pode literalmente chover diamantes.",
    detail:
      "Urano e Netuno têm pressão interna tão alta que o carbono pode cristalizar e formar diamantes sólidos que 'caem' em direção ao núcleo.",
  },
  {
    id: "3",
    title: "O Átomo Gigante",
    category: "curiosity",
    icon: "🌌",
    description:
      "Existe uma estrela dentro de uma nuvem que funciona como um único átomo gigante.",
    detail:
      "Na nebulosa Boomerang, a radiação faz elétrons orbitarem como se tudo fosse um enorme átomo — algo impossível na Terra.",
  },
  {
    id: "4",
    title: "Matéria Escura",
    category: "mystery",
    icon: "🌑",
    description:
      "Quase tudo no universo é feito de algo que ninguém sabe o que é.",
    detail:
      "Mais de 80% da matéria do universo não interage com luz — não sabemos do que é feita, só vemos seus efeitos gravitacionais.",
  },
  {
    id: "5",
    title: "Antes do Big Bang?",
    category: "mystery",
    icon: "⏳",
    description:
      "O que existia antes do início do universo?",
    detail:
      "Algumas teorias sugerem ciclos infinitos de universos. Outras dizem que o tempo começou no Big Bang — então não existia 'antes'.",
  },
  {
    id: "6",
    title: "Buracos Negros Evaporam?",
    category: "mystery",
    icon: "🕳",
    description:
      "Mesmo sem nada escapar deles… eles podem sumir.",
    detail:
      "Stephen Hawking propôs a radiação Hawking — com o tempo, buracos negros podem perder massa e evaporar completamente.",
  },
];
