import { View, Text, Pressable } from "react-native";
import { router, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

type TabItem = {
  name: string;
  route: `/${string}`; 
  icon: IoniconName;
};

// Tabs tipados corretamente
const tabs: TabItem[] = [
  { name: "Home", route: "/home/home", icon: "planet-outline" },
  { name: "Planetas", route: "/home/planets", icon: "sparkles-outline" },
  { name: "Sobre", route: "/home/about", icon: "information-circle-outline" },
];

export default function BottomTabs() {
  const pathname = usePathname();

  return (
    <View className="flex-row justify-around items-center bg-background-blue py-3">
      {tabs.map((tab) => {
        const isActive = pathname.startsWith(tab.route);

        return (
          <Pressable key={tab.route} onPress={() => router.push(tab.route as any)}>
            <View className="items-center">
              <Ionicons
                name={tab.icon}
                size={24}
                color={isActive ? "#ffd60a" : "#e5e5e5"}
              />

              <Text
                className={`${isActive ? "text-primary" : "text-text-light"} text-xs`}
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
