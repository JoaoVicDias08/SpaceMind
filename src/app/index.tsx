import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import { MotiView } from "moti";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { GradientTitle } from "../components/shared/gradientTitle";

export default function Index() {
  const [pressed, setPressed] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleExplorar = () => {
    if (disabled) return;

    setDisabled(true);
    setPressed(true);

    setTimeout(() => {
      setPressed(false);
    }, 120);

    setTimeout(() => {
      router.push("/auth/register");
      setDisabled(false);
    }, 260);
  };

  return (
    <View className="flex-1">
      <Image
        source={require("../../assets/images/IndexBackground.png")}
        className="absolute w-full h-full"
        resizeMode="cover"
      />

      <View className="absolute w-full h-full bg-black/50" />

      <View className="flex-1 justify-between items-center py-16">
        <View className="items-center mt-24 px-6">
          <MotiView
            from={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "timing", duration: 700 }}
          >
            <LottieView
              source={require("../../assets/animations/Nice astronaut landing on the moon.json")}
              autoPlay
              loop
              style={{ width: 250, height: 250 }}
            />
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 200 }}
          >
            <GradientTitle />
          </MotiView>

          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 400 }}
          >
            <Text className="text-text-light font-body text-center mt-4 bg-black/40 p-4 rounded-3xl">
              Sua jornada pelo sistema solar começa aqui. Explore planetas,
              estrelas e mistérios do espaço.
            </Text>
          </MotiView>
        </View>

        <MotiView
          from={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 600 }}
          className="w-full items-center pb-6"
        >
          <MotiView
            animate={{ scale: pressed ? 0.92 : 1 }}
            transition={{ type: "timing", duration: 120 }}
            className="w-[90%]"
          >
            <Pressable
              onPress={handleExplorar}
              disabled={disabled}
              className="bg-blue-600 py-6 rounded-xl"
            >
              <View className="flex-row items-center justify-center gap-2">
                <Text className="text-white text-xl font-body">
                  Explorar agora
                </Text>
                <Ionicons name="rocket" size={24} color="#e5e5e5" />
              </View>
            </Pressable>
          </MotiView>
        </MotiView>
      </View>
    </View>
  );
}
