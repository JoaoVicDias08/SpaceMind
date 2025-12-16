import DailyFact from "@/src/components/dailyFact";
import HeaderMenu from "@/src/components/headerMenu";
import ImageCarousel from "@/src/components/imageCarousel";
import PlanetCarousel from "@/src/components/planetCarousel";
import MoonCard from "@/src/components/moonCard";
import MarqueeTicker from "@/src/components/marqueeTicker";
import GalaxyPreview from "@/src/components/galaxyPreview";
import { ScrollView, Text } from "react-native";
import { MotiView } from "moti";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-background-darkblue">

      <MotiView
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500 }}
      >
        <HeaderMenu />
      </MotiView>

      <MarqueeTicker text="Bem vindo, viajante ✨ Explore o universo! ✨" />

      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500, delay: 300 }}
      >
        <Text className="ml-4 mt-2 text-text-purple font-body">
          Pronto para descobrir novos horizontes?
        </Text>
      </MotiView>

      <ImageCarousel />
      <Text className="text-white font-bodyBold text-xl tracking-wide ml-4 mt-4">
        Fato do dia
      </Text>
      <DailyFact />
      <PlanetCarousel />
      <MoonCard />
      <GalaxyPreview />

    </ScrollView>
  );
}
