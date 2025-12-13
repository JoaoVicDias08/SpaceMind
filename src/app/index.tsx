import { Text, View, Image, Pressable } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { GradientTitle } from "../components/gradientTitle";

export default function Index() {
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
          <Image
            source={require("../../assets/images/SpaceMind-logo.png")}
            resizeMode="contain"
            className="w-48 h-48 rounded-3xl"
          />

          <GradientTitle/>

          <Text className="text-text-light font-body text-center mt-4 bg-black/40 p-4 rounded-3xl">
            Sua jornada pelo sistema solar começa aqui.
            Explore planetas, estrelas e mistérios do espaço.
          </Text>
        </View>

        <View className="w-full items-center pb-6">
          <Pressable
            onPress={() => router.push("/auth/cadastro")}
            className="bg-blue-600 w-[90%] py-6 rounded-xl"
          >
            <View className="flex-row items-center justify-center gap-2">
              <Text className="text-white text-xl font-body">
                Explorar agora
              </Text>
              <Ionicons name="rocket" size={24} color="#e5e5e5" />
            </View>
          </Pressable>
          
          <Pressable
          onPress={() => router.push("/auth/login")}>
          <Text className="mt-4 font-bodyBold text-xl text-text-light">Já tem uma conta? Faça login</Text>
          </Pressable>
        </View>

      </View>
    </View>
  );
}
