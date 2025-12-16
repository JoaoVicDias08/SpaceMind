import { View } from "react-native";
import { useState } from "react";

import GalaxiesSection from "@/src/components/galaxiesComponents/galaxiesSection";
import HeaderGalaxies from "@/src/components/galaxiesComponents/headerGalaxies";
import { GalaxyCard, galaxiesCards } from "@/src/data/galaxiesCards";

export default function Galaxies() {
  const [selectedGalaxy, setSelectedGalaxy] = useState<GalaxyCard>(galaxiesCards[0]);

  return (
    <View className="flex-1 bg-background-darkblue">
      <GalaxiesSection
        selectedGalaxy={selectedGalaxy}
        onSelectGalaxy={setSelectedGalaxy}
        HeaderComponent={
          <HeaderGalaxies
            onSearch={(galaxyName: string) => {
              const found = galaxiesCards.find(
                (g) => g.nome.toLowerCase() === galaxyName.toLowerCase()
              );
              if (found) setSelectedGalaxy(found);
            }}
          />
        }
      />
    </View>
  );
}
