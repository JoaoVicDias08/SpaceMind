import React from "react";
import { View, Text, Image, Pressable, FlatList } from "react-native";
import { MotiView } from "moti";
import { LinearGradient } from "expo-linear-gradient";

import { galaxiesCards, GalaxyCard } from "@/src/data/galaxiesCards";

type GalaxiesSectionProps = {
  selectedGalaxy: GalaxyCard;
  onSelectGalaxy: (galaxy: GalaxyCard) => void;
};

const CARD_MARGIN = 12;
const NUM_COLUMNS = 2;

export default function GalaxiesSection({
  selectedGalaxy,
  onSelectGalaxy,
}: GalaxiesSectionProps) {
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
      data={galaxiesCards.filter((g) => g.id !== selectedGalaxy.id)}
      keyExtractor={(item) => item.id.toString()}
      numColumns={NUM_COLUMNS}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: CARD_MARGIN, paddingBottom: 40 }}
      ListHeaderComponent={
        <MotiView
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 500 }}
          style={{ marginBottom: 16 }}
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
      }
      renderItem={renderSmallCard}
    />
  );
}
