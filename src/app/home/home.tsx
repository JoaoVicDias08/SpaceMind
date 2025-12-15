import DailyFact from "@/src/components/dailyFact";
import HeaderMenu from "@/src/components/headerMenu";
import ImageCarousel from "@/src/components/imageCarousel";
import { ScrollView, Text, View } from "react-native";
import TextTicker from "react-native-text-ticker";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-background-darkblue">
      <HeaderMenu />

      <View className="ml-4 mt-6 bg-secondary px-3 py-1 rounded-3xl overflow-hidden">
        <TextTicker
          duration={9000}
          loop
          repeatSpacer={60}
          marqueeDelay={800}
          className="font-title text-text-light text-3xl"
        >
          Bem vindo, viajante ✨ Explore o universo! ✨
        </TextTicker>
      </View>

      <Text className="ml-4 mt-2 text-text-purple font-body">
        Pronto para descobrir novos horizontes?
      </Text>

      <ImageCarousel />

      <Text className="text-white font-bodyBold text-xl tracking-wide ml-4 mt-4">
        Fato do dia
      </Text>

      <DailyFact />
    </ScrollView>
  );
}
