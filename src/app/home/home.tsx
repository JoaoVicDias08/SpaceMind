import DailyFact from "@/src/components/dailyFact";
import HeaderMenu from "@/src/components/headerMenu";
import ImageCarousel from "@/src/components/imageCarousel";
import PlanetCarousel from "@/src/components/planetCarousel";
import MoonCard from "@/src/components/moonCard";
import { ScrollView, Text, View } from "react-native";
import TextTicker from "react-native-text-ticker";
import { MotiView } from "moti";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-background-darkblue mb-10">
      <MotiView
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500 }}
      >
        <HeaderMenu />
      </MotiView>

      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500, delay: 200 }}
      >
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
      </MotiView>

      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500, delay: 400 }}
      >
        <Text className="ml-4 mt-2 text-text-purple font-body">
          Pronto para descobrir novos horizontes?
        </Text>
      </MotiView>

      <MotiView
        from={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500, delay: 600 }}
      >
        <ImageCarousel />
      </MotiView>

      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500, delay: 800 }}
      >
        <Text className="text-white font-bodyBold text-xl tracking-wide ml-4 mt-4">
          Fato do dia
        </Text>
        <DailyFact />
      </MotiView>

      <MotiView
        from={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500, delay: 1000 }}
      >
        <PlanetCarousel />
      </MotiView>

      <MotiView
        from={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500, delay: 1400 }}
      >
        <MoonCard />
      </MotiView>
    </ScrollView>
  );
}
