import { Text, View, Image, Pressable } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View className="flex-1">

      {/* Background */}
      <Image
        source={require("../../assets/images/IndexBackground.png")}
        className="absolute w-full h-full"
        resizeMode="cover"
      />

      {/* Overlay */}
      <View className="absolute w-full h-full bg-black/50" />

      {/* Conteúdo */}
      <View className="flex-1 justify-between items-center py-16">

        {/* Parte de cima (mais pra baixo que o centro) */}
        <View className="items-center mt-24">
          <Image
            source={require("../../assets/images/SpaceMind-logo.png")}
            resizeMode="contain"
            className="w-48 h-48 rounded-2xl"
          />

          <Text className="text-5xl text-white font-title mt-6 text-center">
            Descubra o universo
          </Text>
        </View>

        {/* Botão embaixo */}
        <View className="w-full items-center pb-6">
          <Pressable
            onPress={() => router.push("/home/home")}
            className="bg-blue-600 w-[90%] py-6 rounded-xl"
          >
            <View className="flex-row items-center justify-center gap-2">
              <Text className="text-white text-xl font-body">
                Explorar agora
              </Text>
              <Ionicons name="rocket" size={24} color="#e5e5e5" />
            </View>
          </Pressable>
        </View>

      </View>
    </View>
  );
}
