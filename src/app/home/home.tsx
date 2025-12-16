import { ScrollView, Text } from "react-native";
import { MotiView } from "moti";

import DailyFact from "@/src/components/homeComponents/dailyFact";
import HeaderMenu from "@/src/components/homeComponents/headerMenu";
import ImageCarousel from "@/src/components/homeComponents/imageCarousel";
import PlanetCarousel from "@/src/components/homeComponents/planetCarousel";
import MoonCard from "@/src/components/homeComponents/moonCard";
import MarqueeTicker from "@/src/components/homeComponents/marqueeTicker";
import GalaxyPreview from "@/src/components/homeComponents/galaxyPreview";

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
        <Text className="ml-4 mt-2 text-text-purple font-body text-xl">
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
