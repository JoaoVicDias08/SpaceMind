import { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  View,
  Dimensions,
  Pressable,
  Modal,
} from "react-native";
import { MotiView } from "moti";
import { LinearGradient } from "expo-linear-gradient";

import { planets, Planet } from "@/src/data/planets";

const { width } = Dimensions.get("window");

export default function PlanetCarousel() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

  return (
    <>
      <FlatList
        data={planets}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ width }} className="px-6 mt-10">
            <MotiView
              from={{ opacity: 0, translateY: 24 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 500 }}
            >
              <LinearGradient
                colors={["#0B0530", "#120845", "#1A0B5E"]}
                style={{
                  borderRadius: 28,
                  padding: 24,
                  height: 560,
                  justifyContent: "space-between",
                }}
              >
                <View className="items-center">
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    className="w-56 h-56"
                  />
                </View>

                <View>
                  <Text className="text-white text-3xl font-title text-center">
                    {item.name}
                  </Text>
                  <Text className="text-gray-400 text-center mt-1">
                    {item.type}
                  </Text>
                  <Text
                    className="text-gray-300 text-center mt-3 text-sm"
                    numberOfLines={2}
                  >
                    {item.description}
                  </Text>
                </View>

                <Pressable onPress={() => setSelectedPlanet(item)}>
                  <View className="bg-primary py-3 rounded-2xl items-center">
                    <Text className="text-white font-bodyBold">
                      Ver detalhes
                    </Text>
                  </View>
                </Pressable>
              </LinearGradient>
            </MotiView>
          </View>
        )}
      />

      <Modal visible={!!selectedPlanet} transparent animationType="fade">
        <View className="flex-1 bg-black/90 items-center justify-center px-6">
          {selectedPlanet && (
            <View className="bg-background-darkblue rounded-3xl p-6 w-full">
              <Image
                source={selectedPlanet.image}
                resizeMode="contain"
                className="w-40 h-40 self-center mb-4"
              />

              <Text className="text-white text-2xl font-title text-center mb-1">
                {selectedPlanet.name}
              </Text>

              <Text className="text-gray-400 text-center mb-4">
                {selectedPlanet.type}
              </Text>

              <Text className="text-gray-300 text-center mb-6">
                {selectedPlanet.description}
              </Text>

              <View className="flex-row flex-wrap justify-between gap-y-4 mb-6">
                <Info label="Diâmetro" value={`${selectedPlanet.diameter} km`} />
                <Info label="Distância" value={`${selectedPlanet.distance} M km`} />
                <Info label="Luas" value={selectedPlanet.moons} />
                <Info label="Descoberta" value={selectedPlanet.discovery} />
              </View>

              <Pressable
                onPress={() => setSelectedPlanet(null)}
                className="bg-primary py-3 rounded-xl items-center"
              >
                <Text className="text-white font-bodyBold">Fechar</Text>
              </Pressable>
            </View>
          )}
        </View>
      </Modal>
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <View className="w-[48%] bg-white/5 rounded-xl p-3">
      <Text className="text-gray-400 text-center text-xs">{label}</Text>
      <Text className="text-white text-center font-bodyBold">{value}</Text>
    </View>
  );
}
