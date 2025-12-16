export type Planet = {
  id: string;
  name: string;
  type: string;
  description: string;
  image: any;
  diameter: string;
  distance: string;
  moons: string;
  discovery: string;
};

export const planets: Planet[] = [
  {
    id: "1",
    name: "Mercúrio",
    type: "Rochoso",
    description:
      "Mercúrio é o planeta mais próximo do Sol e o menor do Sistema Solar.",
    image: require("../../assets/planets/mercury.jpg"),
    diameter: "4.879",
    distance: "77",
    moons: "0",
    discovery: "Antiguidade",
  },
  {
    id: "2",
    name: "Vênus",
    type: "Rochoso",
    description: "Vênus é o planeta mais quente do Sistema Solar.",
    image: require("../../assets/planets/venus.jpg"),
    diameter: "12.104",
    distance: "38",
    moons: "0",
    discovery: "Antiguidade",
  },
  {
    id: "3",
    name: "Terra",
    type: "Habitável",
    description: "Único planeta conhecido por abrigar vida.",
    image: require("../../assets/planets/earth.jpg"),
    diameter: "12.742",
    distance: "0",
    moons: "1",
    discovery: "—",
  },
  {
    id: "4",
    name: "Marte",
    type: "Rochoso",
    description: "Conhecido como o planeta vermelho.",
    image: require("../../assets/planets/mars.jpg"),
    diameter: "6.779",
    distance: "225",
    moons: "2",
    discovery: "Antiguidade",
  },
  {
    id: "5",
    name: "Júpiter",
    type: "Gasoso",
    description: "O maior planeta do Sistema Solar.",
    image: require("../../assets/planets/jupiter.jpg"),
    diameter: "139.820",
    distance: "778",
    moons: "95",
    discovery: "Antiguidade",
  },
  {
    id: "6",
    name: "Saturno",
    type: "Gasoso",
    description: "Famoso por seus anéis impressionantes.",
    image: require("../../assets/planets/saturn.jpg"),
    diameter: "116.460",
    distance: "1.427",
    moons: "146",
    discovery: "Antiguidade",
  },
  {
    id: "7",
    name: "Urano",
    type: "Gigante de gelo",
    description: "Gira de lado em relação aos outros planetas.",
    image: require("../../assets/planets/uranus.jpg"),
    diameter: "50.724",
    distance: "2.871",
    moons: "27",
    discovery: "1781",
  },
  {
    id: "8",
    name: "Netuno",
    type: "Gigante de gelo",
    description: "O planeta mais distante do Sol.",
    image: require("../../assets/planets/neptune.jpg"),
    diameter: "49.244",
    distance: "4.495",
    moons: "14",
    discovery: "1846",
  },
];
