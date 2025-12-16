/* Tipagem da estrutura de dados para os cartões de galáxias */
export type GalaxyCard = {
  id: number;
  nome: string;
  descricao: string;
  tipo: string;
  imagem: any; // require/import do React Native
  corDoNome: string;
  distancia: string; // em anos-luz
};

// Importando imagens
import Andromeda from "../../assets/galaxiesCards/Andromeda.jpg";
import M33 from "../../assets/galaxiesCards/M33.png";
import Sombrero from "../../assets/galaxiesCards/Sombrero.jpg";
import NGC5866 from "../../assets/galaxiesCards/NGC5866.jpg";
import M51 from "../../assets/galaxiesCards/M51.jpg";
import NGC1300 from "../../assets/galaxiesCards/NGC1300.jpg";
import CentaurusA from "../../assets/galaxiesCards/CentaurusA.jpg";
import Cartwheel from "../../assets/galaxiesCards/Cartwheel.jpg";
import M82 from "../../assets/galaxiesCards/M82.jpg";
import NGC6744 from "../../assets/galaxiesCards/NGC6744.jpg";
import NGC1232 from "../../assets/galaxiesCards/NGC1232.jpg";
import NGC2442 from "../../assets/galaxiesCards/NGC2442.jpg";

export const galaxiesCards: GalaxyCard[] = [
  { id: 1, nome: "Andrômeda", descricao: "A galáxia mais próxima da Via Láctea e semelhante em tamanho.", tipo: "Espiral", imagem: Andromeda, corDoNome: "#FF6F61", distancia: "2,537,000" },
  { id: 2, nome: "Triângulo", descricao: "Também conhecida como M33, é uma galáxia espiral do Grupo Local.", tipo: "Espiral", imagem: M33, corDoNome: "#6B5B95", distancia: "2,730,000" },
  { id: 3, nome: "Sombrero", descricao: "Famosa por seu grande bojo central e seu anel de poeira proeminente.", tipo: "Espiral", imagem: Sombrero, corDoNome: "#88B04B", distancia: "29,300,000" },
  { id: 4, nome: "Galáxia do Cigarro", descricao: "Uma galáxia lenticular com aparência alongada, também chamada NGC 5866.", tipo: "Lenticular", imagem: NGC5866, corDoNome: "#F7CAC9", distancia: "44,000,000" },
  { id: 5, nome: "Whirlpool", descricao: "Uma famosa galáxia espiral com braços bem definidos, M51.", tipo: "Espiral", imagem: M51, corDoNome: "#92A8D1", distancia: "23,160,000" },
  { id: 6, nome: "NGC 1300", descricao: "Uma galáxia espiral barrada, conhecida por seu núcleo em forma de barra.", tipo: "Espiral barrada", imagem: NGC1300, corDoNome: "#955251", distancia: "61,000,000" },
  { id: 7, nome: "Centaurus A", descricao: "Uma galáxia elíptica com intensa emissão de rádio e atividade nuclear.", tipo: "Elíptica", imagem: CentaurusA, corDoNome: "#B565A7", distancia: "13,000,000" },
  { id: 8, nome: "Cartwheel", descricao: "Galáxia com formato de roda de carroça, resultado de uma colisão.", tipo: "Anelar", imagem: Cartwheel, corDoNome: "#009B77", distancia: "500,000,000" },
  { id: 9, nome: "Messier 82", descricao: "Galáxia irregular com intensa formação estelar.", tipo: "Irregular", imagem: M82, corDoNome: "#DD4124", distancia: "12,000,000" },
  { id: 10, nome: "NGC 6744", descricao: "Uma grande galáxia espiral similar à Via Láctea.", tipo: "Espiral", imagem: NGC6744, corDoNome: "#F1E05A", distancia: "30,000,000" },
  { id: 11, nome: "NGC 1232", descricao: "Uma galáxia espiral com braços bem definidos, localizada na constelação Eridanus.", tipo: "Espiral", imagem: NGC1232, corDoNome: "#5B5EA6", distancia: "69,000,000" },
  { id: 12, nome: "NGC 2442", descricao: "Também chamada Galáxia do Crooked, tem braços espirais assimétricos.", tipo: "Espiral", imagem: NGC2442, corDoNome: "#9B2335", distancia: "50,000,000" },
];
