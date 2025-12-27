export type TimelineItem = {
  id: string;
  year: number;
  title: string;
  description: string;
  image: any;
  category: "Lua" | "Marte" | "Telescópio" | "Estação" | "Exploração" | "Sonda";
};

const Sputnik1 = require("../../assets/timeline/Sputnik1.jpg");
const YuriGagarin = require("../../assets/timeline/YuriGargarin.jpg");
const Valentina = require("../../assets/timeline/ValentinaTereshkova.jpg");
const Apollo11 = require("../../assets/timeline/Apollo11.jpg");
const Salyut1 = require("../../assets/timeline/Salyut1.jpg");
const Voyager = require("../../assets/timeline/Voyager.webp");
const Onibus = require("../../assets/timeline/OnibusEspacial.jpg");
const Hubble = require("../../assets/timeline/Hubble.jpeg");
const ISS = require("../../assets/timeline/ISS.jpg");
const Curiosity = require("../../assets/timeline/Curiosity.jpg");
const Rosetta = require("../../assets/timeline/Rosetta.jpg");
const CrewDragon = require("../../assets/timeline/CrewDragon.webp");
const JamesWebb = require("../../assets/timeline/JamesWebb.webp");

export const timelineData: TimelineItem[] = [
  {
    id: "1",
    year: 1957,
    title: "Sputnik 1 — início da era espacial",
    description: "Primeiro satélite artificial lançado pela União Soviética.",
    image: Sputnik1,
    category: "Exploração",
  },
  {
    id: "2",
    year: 1961,
    title: "Yuri Gagarin — primeiro humano no espaço",
    description: "Primeiro voo tripulado em órbita, a bordo da Vostok 1.",
    image: YuriGagarin,
    category: "Exploração",
  },
  {
    id: "3",
    year: 1963,
    title: "Valentina Tereshkova — primeira mulher no espaço",
    description: "Primeira mulher a ir ao espaço, na nave Vostok 6.",
    image: Valentina,
    category: "Exploração",
  },
  {
    id: "4",
    year: 1969,
    title: "Apollo 11 — primeiro passo na Lua",
    description: "Neil Armstrong se torna o primeiro humano a pisar na Lua.",
    image: Apollo11,
    category: "Lua",
  },
  {
    id: "5",
    year: 1971,
    title: "Salyut 1 — primeira estação espacial",
    description: "Primeira estação espacial habitável colocada em órbita.",
    image: Salyut1,
    category: "Estação",
  },
  {
    id: "6",
    year: 1977,
    title: "Voyager 1 e 2 — explorando o espaço profundo",
    description: "Sondas lançadas para estudar os planetas gigantes e além.",
    image: Voyager,
    category: "Sonda",
  },
  {
    id: "7",
    year: 1981,
    title: "Ônibus Espacial — nova era de voos",
    description: "Primeiro veículo espacial parcialmente reutilizável.",
    image: Onibus,
    category: "Exploração",
  },
  {
    id: "8",
    year: 1990,
    title: "Telescópio Hubble",
    description: "Revoluciona a astronomia com imagens impressionantes.",
    image: Hubble,
    category: "Telescópio",
  },
  {
    id: "9",
    year: 1998,
    title: "ISS — Estação Espacial Internacional",
    description: "Maior laboratório em órbita já construído.",
    image: ISS,
    category: "Estação",
  },
  {
    id: "10",
    year: 2012,
    title: "Curiosity pousa em Marte",
    description: "Rover pousa com a técnica Sky Crane e explora o planeta.",
    image: Curiosity,
    category: "Marte",
  },
  {
    id: "11",
    year: 2014,
    title: "Rosetta pousa em um cometa",
    description: "Primeira missão a pousar em um cometa.",
    image: Rosetta,
    category: "Sonda",
  },
  {
    id: "12",
    year: 2020,
    title: "Crew Dragon — voos privados tripulados",
    description: "Primeira empresa privada a levar astronautas à ISS.",
    image: CrewDragon,
    category: "Exploração",
  },
  {
    id: "13",
    year: 2021,
    title: "James Webb",
    description:
      "Telescópio mais poderoso já lançado, observa o universo primitivo.",
    image: JamesWebb,
    category: "Telescópio",
  },
];
