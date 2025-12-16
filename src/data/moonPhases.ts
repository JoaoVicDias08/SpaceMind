export type MoonPhase = {
  id: string;
  name: string;
  description: string;
  color: string;
};

export const moonPhases: MoonPhase[] = [
  {
    id: "new",
    name: "Lua Nova",
    description:
      "A Lua Nova ocorre quando a Lua está entre a Terra e o Sol. Ela não é visível da Terra e marca o início de um novo ciclo lunar.",
    color: "#7C6CFF",
  },
  {
    id: "waxing",
    name: "Crescente",
    description:
      "Durante a fase Crescente, a Lua começa a se tornar visível após a Lua Nova, iluminando gradualmente seu lado direito.",
    color: "#4FD1C5",
  },
  {
    id: "full",
    name: "Lua Cheia",
    description:
      "A Lua Cheia ocorre quando a Lua está totalmente iluminada pelo Sol e é visível como um círculo completo no céu noturno.",
    color: "#F6E05E",
  },
  {
    id: "waning",
    name: "Minguante",
    description:
      "Na fase Minguante, a Lua começa a diminuir sua luminosidade após a Lua Cheia, iluminando gradualmente seu lado esquerdo.",
    color: "#A0AEC0",
  },
];
