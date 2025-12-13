import { View } from "react-native";
import { Slot } from "expo-router";
import BottomTabs from "../../components/bottomTabs";

export default function HomeLayout() {
  return (
    <View className="flex-1 bg-background-dark">
      <View className="flex-1">
        <Slot />
      </View>

      <BottomTabs />
    </View>
  );
}
