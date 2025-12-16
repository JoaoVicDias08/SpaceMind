import { ImageSourcePropType } from "react-native";

export type CarouselItemData = {
  id: string;
  source: ImageSourcePropType;
  title: string;
  route: `/${string}`;
};

export const carouselItems: CarouselItemData[] = [
  {
    id: "1",
    source: require("../../assets/images/solarSystemImage.jpg"),
    title: "Nosso Sistema Solar",
    route: "/home/solar",
  },
  {
    id: "2",
    source: require("../../assets/images/galaxyImage.jpg"),
    title: "Galáxias Distantes",
    route: "/home/galaxy",
  },
  {
    id: "3",
    source: require("../../assets/images/moonImage.jpg"),
    title: "A Lua",
    route: "/home/moon",
  },
];
