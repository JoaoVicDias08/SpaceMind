import { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { MotiView } from "moti";
import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";

const moonPhases = [
  {
    id: "new",
    name: "Lua Nova",
    description:
      "A Lua Nova ocorre quando a Lua está entre a Terra e o Sol. Ela não é visível da Terra e marca o início de um novo ciclo lunar.",
    color: "#7C6CFF",
  },
  {
    id: "waxing",
    name: "Crescente",
    description:
      "Durante a fase Crescente, a Lua começa a se tornar visível após a Lua Nova, iluminando gradualmente seu lado direito.",
    color: "#4FD1C5",
  },
  {
    id: "full",
    name: "Lua Cheia",
    description:
      "A Lua Cheia ocorre quando a Lua está totalmente iluminada pelo Sol e é visível como um círculo completo no céu noturno.",
    color: "#F6E05E",
  },
  {
    id: "waning",
    name: "Minguante",
    description:
      "Na fase Minguante, a Lua começa a diminuir sua luminosidade após a Lua Cheia, iluminando gradualmente seu lado esquerdo.",
    color: "#A0AEC0",
  },
];

export default function MoonCard() {
  const [selectedPhase, setSelectedPhase] = useState(moonPhases[0]);
  const activeColor = selectedPhase.color;

  return (
    <View className="px-4 mt-12">
      <MotiView
        from={{ opacity: 0, translateY: 14 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 500 }}
        className="items-center mb-4"
      >
        <LinearGradient
          colors={["#2D1B69", "#120845"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            paddingHorizontal: 26,
            paddingVertical: 8,
            borderRadius: 999,
            borderWidth: 1,
            borderColor: "rgba(168, 139, 255, 0.35)",
          }}
        >
          <Text className="text-white text-2xl font-title tracking-wide">
            🌙 Fases da Lua
          </Text>
        </LinearGradient>

        <View className="w-20 h-[2px] bg-purple-400/60 mt-2 rounded-full" />
      </MotiView>

      <View className="w-full items-center justify-center mt-8 mb-6">
        <MotiView
          from={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 600 }}
        >
          <LottieView
            source={require("../../assets/animations/Moon.json")}
            style={{ width: 180, height: 180 }}
            autoPlay
            loop
          />
        </MotiView>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 6,
          paddingHorizontal: 16,
        }}
        className="mb-6"
      >
        {moonPhases.map((phase) => {
          const isActive = selectedPhase.id === phase.id;

          return (
            <Pressable key={phase.id} onPress={() => setSelectedPhase(phase)}>
              <MotiView
                animate={{
                  scale: isActive ? 1.1 : 1,
                  opacity: isActive ? 1 : 0.6,
                }}
                transition={{ duration: 200 }}
                style={{
                  backgroundColor: isActive
                    ? `${phase.color}33`
                    : "rgba(255,255,255,0.06)",
                  borderColor: isActive
                    ? phase.color
                    : "rgba(255,255,255,0.12)",
                  borderWidth: 1,
                }}
                className="px-4 py-2 mr-3 rounded-full"
              >
                <Text
                  style={{ color: isActive ? phase.color : "#E5E7EB" }}
                  className="text-sm font-semibold"
                >
                  {phase.name}
                </Text>
              </MotiView>
            </Pressable>
          );
        })}
      </ScrollView>

      <MotiView
        key={selectedPhase.id}
        from={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 300 }}
        style={{
          borderColor: `${activeColor}33`,
          borderWidth: 1,
        }}
        className="bg-[#0B0530] p-6 rounded-3xl"
      >
        <Text
          style={{ color: activeColor }}
          className="text-2xl font-title mb-2"
        >
          {selectedPhase.name}
        </Text>

        <Text className="text-gray-300 text-base leading-relaxed">
          {selectedPhase.description}
        </Text>
      </MotiView>
    </View>
  );
}
