import { Ionicons } from "@expo/vector-icons";

export type IoniconName = React.ComponentProps<
  typeof Ionicons
>["name"];

export type TabItem = {
  name: string;
  route: `/${string}`;
  icon: IoniconName;
};

export const tabs: TabItem[] = [
  { name: "Home", route: "/home/home", icon: "home" },
  { name: "Galáxia", route: "/home/galaxy", icon: "compass" },
  { name: "Curiosidades", route: "/home/others", icon: "newspaper" },
  { name: "Sobre", route: "/home/about", icon: "information-circle" },
];
