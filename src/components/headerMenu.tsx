import { Ionicons } from "@expo/vector-icons";
import { Image, View, Text } from "react-native";

export default function HeaderMenu() {
  return (
    <View className="flex flex-row mt-12 justify-between items-center w-full border-b border-text-purple/30 pb-6 px-4 pt-1">
      {/* Logo no lugar do menu */}
      <Image
        source={require("../../assets/images/logoIcon.png")}
        className="w-16 h-16 rounded-full"
        resizeMode="contain"
      />

      {/* Título */}
      <Text className="font-title text-text-light text-2xl">
        Explorador do cosmos
      </Text>

      {/* Ícone de busca */}
      <Ionicons name="search" size={28} color="#fff" />
    </View>
  );
}
