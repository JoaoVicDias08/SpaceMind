import { View, Text, Pressable } from "react-native";
import { router, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

type TabItem = {
  name: string;
  route: `/${string}`; 
  icon: IoniconName;
};

const tabs: TabItem[] = [
  { name: "Home", route: "/home/home", icon: "home" },
  { name: "Galáxia", route: "/home/galaxy", icon: "compass" },
  { name: "Curiosidades", route: "/home/others", icon: "newspaper" },
  { name: "Sobre", route: "/home/about", icon: "information-circle" },
];

export default function BottomTabs() {
  const pathname = usePathname();

  return (
    <View className="flex-row justify-around items-center bg-background-darkblue py-3 pb-6 border-t border-text-purple/30 pt-6">
      {tabs.map((tab) => {
        const isActive = pathname.startsWith(tab.route);

        return (
          <Pressable key={tab.route} onPress={() => router.push(tab.route as any)}>
            <View className="items-center">
              <Ionicons
                name={tab.icon}
                size={24}
                color={isActive ? "#0d00a4" : "#e5e5e5"}
              />

              <Text
                className={`${isActive ? "text-text-light font-bodyBold" : "text-text-light font-bodyBold"} text-xs`}
              >
                {tab.name}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
