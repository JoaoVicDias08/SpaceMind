import { View, Text, Pressable, Animated } from "react-native";
import { router, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { tabs } from "@/src/data/tabs";
import { useEffect, useRef } from "react";

export default function BottomTabs() {
  const pathname = usePathname();

  const animations = useRef(tabs.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    tabs.forEach((tab, index) => {
      const isActive = pathname.startsWith(tab.route);
      Animated.timing(animations[index], {
        toValue: isActive ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
  }, [pathname]);

  return (
    <View className="flex-row justify-around items-center bg-background-darkblue py-3 pb-6 border-t border-text-purple/30 pt-6">
      {tabs.map((tab, index) => {
        const animation = animations[index];
        const scale = animation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.3],
        });
        const iconColor = animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["#e5e5e5", "#6366f1"], 
        });
        const circleOpacity = animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.2],
        });

        return (
          <Pressable
            key={tab.route}
            onPress={() => router.push(tab.route as any)}
          >
            <View className="items-center relative">
              <Animated.View
                style={{
                  position: "absolute",
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#6366f1",
                  opacity: circleOpacity,
                  top: -5,
                  zIndex: -1,
                }}
              />

              <Animated.View style={{ transform: [{ scale }] }}>
                <Ionicons
                  name={tab.icon as any}
                  size={24}
                  color={pathname.startsWith(tab.route) ? "#6366f1" : "#e5e5e5"}
                />
              </Animated.View>

              <Text className="text-xs font-bodyBold text-text-light mt-1">
                {tab.name}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
