import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HeaderMenu from "@/src/components/headerMenu";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center bg-background-darkblue">

      <HeaderMenu/>

      <View className="mt-[20%] w-full items-center">
        <Text className="text-text-light text-2xl bg-secondary p-3 rounded-lg">Vagando pelo cosmos </Text>
        <Ionicons name="rocket" size={20} color="#ffd60e" />
      </View>

    </View>
  );
}
