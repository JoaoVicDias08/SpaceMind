import { useEffect, useRef, useState } from "react";
import { View, Text, Pressable, Image, Animated } from "react-native";
import { MotiView } from "moti";
import { LinearGradient } from "expo-linear-gradient";

import { galaxies } from "@/src/data/galaxies";

export default function GalaxyPreview() {
  const [selected, setSelected] = useState(galaxies[0]);
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -6,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View className="mt-4 px-4 pb-8">
      <MotiView
        from={{ opacity: 0, translateY: 12 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 500 }}
      >
        <LinearGradient
          colors={["#7C6CFF", "#FF6FD8"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            alignSelf: "flex-start",
            paddingHorizontal: 18,
            paddingVertical: 6,
            borderRadius: 999,
            marginBottom: 16,
          }}
        >
          <Text className="text-white text-2xl font-title tracking-wide">
            Galáxias
          </Text>
        </LinearGradient>
      </MotiView>

      <LinearGradient
        colors={["#0B0530", "#120845", "#1A0B5E"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 28,
          padding: 18,
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <View className="flex-row gap-4">
          <Animated.View
            style={{ transform: [{ translateY: floatAnim }] }}
            className="w-[48%]"
          >
            <View
              style={{
                width: "100%",
                height: 160,
                borderRadius: 28,
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.06)",
              }}
            >
              <Image
                source={selected.image}
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
              />
              <View
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0,0,0,0.18)",
                }}
              />
            </View>
          </Animated.View>

          <MotiView
            key={selected.id}
            from={{ opacity: 0, translateY: 6 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 250 }}
            className="flex-1 justify-center"
          >
            <Text className="text-white text-xl font-title mb-1">
              {selected.name}
            </Text>

            <Text className="text-text-purple text-sm mb-2">
              Exemplo: {selected.example}
            </Text>

            <Text className="text-gray-300 text-sm leading-relaxed">
              {selected.description}
            </Text>
          </MotiView>
        </View>

        <View className="flex-row justify-between mt-6">
          {galaxies.map((galaxy) => {
            const isActive = selected.id === galaxy.id;

            return (
              <Pressable
                key={galaxy.id}
                onPress={() => setSelected(galaxy)}
              >
                <MotiView
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    opacity: isActive ? 1 : 0.5,
                  }}
                  transition={{ duration: 200 }}
                  style={{
                    backgroundColor: isActive
                      ? `${galaxy.color}33`
                      : "rgba(255,255,255,0.06)",
                    borderColor: isActive
                      ? galaxy.color
                      : "rgba(255,255,255,0.1)",
                    borderWidth: 1,
                    shadowColor: galaxy.color,
                    shadowOpacity: isActive ? 0.6 : 0,
                    shadowRadius: 10,
                  }}
                  className="px-3 py-2 rounded-full"
                >
                  <Text
                    style={{
                      color: isActive ? galaxy.color : "#E5E7EB",
                    }}
                    className="text-xs font-semibold"
                  >
                    {galaxy.name}
                  </Text>
                </MotiView>
              </Pressable>
            );
          })}
        </View>
      </LinearGradient>
    </View>
  );
}
