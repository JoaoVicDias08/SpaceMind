import { Slot } from "expo-router";
import { View } from "react-native";
import BottomTabs from "../../components/shared/bottomTabs";

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
