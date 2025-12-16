import { ImageSourcePropType } from "react-native";

export type GalaxyItem = {
  id: string;
  name: string;
  example: string;
  description: string;
  image: ImageSourcePropType;
  color: string;
};

export const galaxies: GalaxyItem[] = [
  {
    id: "spiral",
    name: "Espiral",
    example: "Via Láctea",
    description: "Braços em espiral com intensa formação estelar.",
    image: require("../../assets/galaxies/spiral.jpg"),
    color: "#7C6CFF",
  },
  {
    id: "elliptical",
    name: "Elíptica",
    example: "Messier 87",
    description: "Formato oval, estrelas antigas e pouco gás.",
    image: require("../../assets/galaxies/elliptical.jpg"),
    color: "#FF6FD8",
  },
  {
    id: "irregular",
    name: "Irregular",
    example: "Grande Nuvem de Magalhães",
    description: "Sem forma definida, comum após colisões.",
    image: require("../../assets/galaxies/irregular.jpg"),
    color: "#4FD1C5",
  },
  {
    id: "lenticular",
    name: "Lenticular",
    example: "NGC 5866",
    description: "Transição entre espiral e elíptica.",
    image: require("../../assets/galaxies/lenticular.jpg"),
    color: "#F6AD55",
  },
];
