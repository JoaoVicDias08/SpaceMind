import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, FlatList } from "react-native";
import { MotiView } from "moti";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";

import { galaxiesCards, GalaxyCard } from "@/src/data/galaxiesCards";
import ViaLacteaSection from "./viaLacteaSection";

type GalaxiesSectionProps = {
  selectedGalaxy: GalaxyCard;
  onSelectGalaxy: (galaxy: GalaxyCard) => void;
  HeaderComponent?: React.ReactNode;
};

const CARD_MARGIN = 12;
const NUM_COLUMNS = 2;

export default function GalaxiesSection({
  selectedGalaxy,
  onSelectGalaxy,
  HeaderComponent,
}: GalaxiesSectionProps) {
  const [filterType, setFilterType] = useState<string>("Todos");
  const [filteredGalaxies, setFilteredGalaxies] = useState<GalaxyCard[]>(galaxiesCards);

  const galaxyTypes = ["Todos", ...Array.from(new Set(galaxiesCards.map((g) => g.tipo)))];

  useEffect(() => {
    if (filterType === "Todos") {
      setFilteredGalaxies(galaxiesCards);
    } else {
      setFilteredGalaxies(galaxiesCards.filter((g) => g.tipo === filterType));
    }

    if (filterType !== "Todos" && selectedGalaxy.tipo !== filterType) {
      const firstOfType = galaxiesCards.find((g) => g.tipo === filterType);
      if (firstOfType) onSelectGalaxy(firstOfType);
    }
  }, [filterType]);

  const renderSmallCard = ({ item }: { item: GalaxyCard }) => (
    <Pressable
      onPress={() => onSelectGalaxy(item)}
      style={{ flex: 1, margin: CARD_MARGIN / 2 }}
    >
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 400 }}
      >
        <LinearGradient
          colors={["#120845", "#1A0B5E"]}
          style={{
            borderRadius: 24,
            padding: 12,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Image
            source={item.imagem}
            style={{ width: "100%", height: 130, borderRadius: 24, marginBottom: 8 }}
            resizeMode="cover"
          />
          <Text
            className="font-title text-lg text-center"
            style={{ color: item.corDoNome }}
          >
            {item.nome}
          </Text>
          <Text className="text-gray-400 text-sm mt-1 text-center">{item.tipo}</Text>
          <Text className="text-gray-300 text-xs mt-1 text-center">
            {item.distancia} anos-luz
          </Text>
        </LinearGradient>
      </MotiView>
    </Pressable>
  );

  return (
    <FlatList
      data={filteredGalaxies.filter((g) => g.id !== selectedGalaxy.id)}
      keyExtractor={(item) => item.id.toString()}
      numColumns={NUM_COLUMNS}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#131022" }}
      contentContainerStyle={{ padding: CARD_MARGIN, paddingBottom: 40 }}
      ListHeaderComponent={
        <View>
          <ViaLacteaSection />

          {HeaderComponent}

          <View className="flex-row flex-wrap justify-start mb-6 px-4 mt-4">
            {galaxyTypes.map((type, index) => (
              <MotiView
                key={type}
                from={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: index * 100, type: "timing", duration: 400 }}
              >
                <Pressable
                  onPress={() => setFilterType(type)}
                  className={`px-5 py-3 mr-2 mb-2 rounded-3xl ${
                    filterType === type ? "bg-primary" : "bg-background-blue"
                  }`}
                >
                  <Text className="text-white font-bodyBold">{type}</Text>
                </Pressable>
              </MotiView>
            ))}
          </View>

          <MotiView
            from={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "timing", duration: 500 }}
            style={{ marginBottom: 20, paddingHorizontal: 16 }}
          >
            <LinearGradient
              colors={["#0B0530", "#120845", "#1A0B5E"]}
              style={{
                borderRadius: 32,
                padding: 24,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 6,
                elevation: 8,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={selectedGalaxy.imagem}
                  style={{
                    width: "100%",
                    height: 250,
                    borderRadius: 32,
                    marginBottom: 16,
                  }}
                  resizeMode="cover"
                />
              </View>

              <Text
                className="text-4xl font-title text-center"
                style={{ color: selectedGalaxy.corDoNome }}
              >
                {selectedGalaxy.nome}
              </Text>
              <Text className="text-gray-400 text-center mt-2 text-lg">
                {selectedGalaxy.tipo}
              </Text>
              <Text className="text-gray-300 text-center mt-2 text-base">
                Distância: {selectedGalaxy.distancia} anos-luz
              </Text>
              <Text className="text-gray-200 text-center mt-4 text-sm leading-relaxed">
                {selectedGalaxy.descricao}
              </Text>
            </LinearGradient>
          </MotiView>

          {/* Lottie */}
          <LottieView 
            source={require("../../../assets/animations/Galaxy cycle.json")}
            loop
            autoPlay
            style={{ width: "100%", height: 200, marginBottom: 16, marginTop: 16 }}
          />
        </View>
      }
      renderItem={renderSmallCard}
    />
  );
}
