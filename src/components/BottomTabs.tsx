import { View, Text, Pressable } from "react-native";
import { router, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { tabs } from "@/src/data/tabs";

export default function BottomTabs() {
  const pathname = usePathname();

  return (
    <View className="flex-row justify-around items-center bg-background-darkblue py-3 pb-6 border-t border-text-purple/30 pt-6">
      {tabs.map((tab) => {
        const isActive = pathname.startsWith(tab.route);

        return (
          <Pressable
            key={tab.route}
            onPress={() => router.push(tab.route as any)}
          >
            <View className="items-center">
              <Ionicons
                name={tab.icon}
                size={24}
                color={isActive ? "#0d00a4" : "#e5e5e5"}
              />

              <Text
                className={`text-xs font-bodyBold text-text-light`}
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
