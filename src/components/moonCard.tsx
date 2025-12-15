import { useEffect, useRef, useState } from "react";
import { View, Text, Animated, Pressable, ScrollView } from "react-native";
import { MotiView } from "moti";
import LottieView from "lottie-react-native";

const moonPhases = [
  { id: "new", name: "Lua Nova", description: "A Lua Nova ocorre quando a Lua está entre a Terra e o Sol. Ela não é visível da Terra e marca o início de um novo ciclo lunar." },
  { id: "waxing", name: "Crescente", description: "Durante a fase Crescente, a Lua começa a se tornar visível após a Lua Nova, iluminando gradualmente seu lado direito." },
  { id: "full", name: "Lua Cheia", description: "A Lua Cheia ocorre quando a Lua está totalmente iluminada pelo Sol e é visível como um círculo completo no céu noturno." },
  { id: "waning", name: "Minguante", description: "Na fase Minguante, a Lua começa a diminuir sua luminosidade após a Lua Cheia, iluminando gradualmente seu lado esquerdo." },
];

export default function MoonCard() {
  const rotation = useRef(new Animated.Value(0)).current;
  const [selectedPhase, setSelectedPhase] = useState(moonPhases[0]);

  // rotação contínua da lua
  useEffect(() => {
    const animate = () => {
      rotation.setValue(0);
      Animated.timing(rotation, {
        toValue: 1,
        duration: 40000,
        useNativeDriver: true,
      }).start(() => animate());
    };
    animate();
  }, []);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View className="px-4 mt-6">
      {/* Título animado */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500 }}
      >
        <Text className="text-white font-bodyBold text-2xl tracking-wide mx-auto mb-4 bg-primary px-4 py-1 rounded-3xl">
          Acompanhe a Lua
        </Text>
      </MotiView>

      {/* Lua animada */}
      <View className="w-full items-center relative h-80 justify-center">
        <MotiView
          from={{ scale: 0.9, opacity: 0.1 }}
          animate={{ scale: 1.05, opacity: 0.25 }}
          transition={{ type: "timing", loop: true, duration: 3500 }}
          className="absolute w-64 h-64 rounded-full bg-white/10 blur-xl"
        />

        {/* LottieView renderizado apenas uma vez */}
        <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
          <LottieView
            source={require("../../assets/animations/Moon.json")}
            style={{ width: 180, height: 180 }}
            autoPlay
            loop
          />
        </Animated.View>
      </View>

      {/* Seleção de fases */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-6 mb-4">
        {moonPhases.map((phase) => (
          <Pressable key={phase.id} onPress={() => setSelectedPhase(phase)}>
            <MotiView
              animate={{
                scale: selectedPhase.id === phase.id ? 1.05 : 1,
                opacity: selectedPhase.id === phase.id ? 1 : 0.7,
              }}
              transition={{ type: "timing", duration: 200 }}
              className="bg-white/10 px-4 py-2 mr-3 rounded-xl"
            >
              <Text className="text-white font-semibold">{phase.name}</Text>
            </MotiView>
          </Pressable>
        ))}
      </ScrollView>

      {/* Card da fase selecionada */}
      <MotiView
        from={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 400 }}
        className="bg-gradient-to-br from-[#2E2C50] to-[#0B0530] p-6 rounded-3xl shadow-lg"
      >
        <Text className="text-white text-2xl font-title mb-2">{selectedPhase.name}</Text>
        <Text className="text-gray-300 text-base leading-relaxed">{selectedPhase.description}</Text>
      </MotiView>
    </View>
  );
}
