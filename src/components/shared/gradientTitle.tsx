import { View, Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

export function GradientTitle() {
  return (
    <View className="flex-row flex-wrap justify-center mt-6">
      
      {/* Texto normal */}
      <Text className="text-5xl text-white font-title">
        Descubra o{" "}
      </Text>

      <MaskedView
        maskElement={
          <Text className="text-5xl font-title">
            universo
          </Text>
        }
      >
        <LinearGradient
          colors={["#38bdf8", "#6366f1", "#a855f7"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }} // 
        >
          <Text className="text-5xl font-title opacity-0">
            universo
          </Text>
        </LinearGradient>
      </MaskedView>

    </View>
  );
}
