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

const { width } = Dimensions.get("window");

type Planet = {
  id: string;
  name: string;
  type: string;
  description: string;
  image: any;
  diameter: string;
  distance: string;
  moons: string;
  discovery: string;
};

const planets: Planet[] = [
  {
    id: "1",
    name: "Mercúrio",
    type: "Rochoso",
    description:
      "Mercúrio é o planeta mais próximo do Sol e o menor do Sistema Solar.",
    image: require("../../assets/planets/mercury.jpg"),
    diameter: "4879",
    distance: "77",
    moons: "0",
    discovery: "Antiguidade",
  },
  {
    id: "2",
    name: "Vênus",
    type: "Rochoso",
    description: "Vênus é o planeta mais quente do Sistema Solar.",
    image: require("../../assets/planets/venus.jpg"),
    diameter: "12104",
    distance: "38",
    moons: "0",
    discovery: "Antiguidade",
  },
  {
    id: "3",
    name: "Terra",
    type: "Habitável",
    description: "Único planeta conhecido por abrigar vida.",
    image: require("../../assets/planets/earth.jpg"),
    diameter: "12742",
    distance: "0",
    moons: "1",
    discovery: "—",
  },
  {
    id: "4",
    name: "Marte",
    type: "Rochoso",
    description: "Conhecido como o planeta vermelho.",
    image: require("../../assets/planets/mars.jpg"),
    diameter: "6779",
    distance: "225",
    moons: "2",
    discovery: "Antiguidade",
  },
  {
    id: "5",
    name: "Júpiter",
    type: "Gasoso",
    description: "O maior planeta do Sistema Solar.",
    image: require("../../assets/planets/jupiter.jpg"),
    diameter: "139820",
    distance: "778",
    moons: "95",
    discovery: "Antiguidade",
  },
  {
    id: "6",
    name: "Saturno",
    type: "Gasoso",
    description: "Famoso por seus anéis impressionantes.",
    image: require("../../assets/planets/saturn.jpg"),
    diameter: "116460",
    distance: "1427",
    moons: "146",
    discovery: "Antiguidade",
  },
  {
    id: "7",
    name: "Urano",
    type: "Gigante de gelo",
    description: "Gira de lado em relação aos outros planetas.",
    image: require("../../assets/planets/uranus.jpg"),
    diameter: "50724",
    distance: "2871",
    moons: "27",
    discovery: "1781",
  },
  {
    id: "8",
    name: "Netuno",
    type: "Gigante de gelo",
    description: "O planeta mais distante do Sol.",
    image: require("../../assets/planets/neptune.jpg"),
    diameter: "49244",
    distance: "4495",
    moons: "14",
    discovery: "1846",
  },
];

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
                <View className="w-[48%] bg-white/5 rounded-xl p-3">
                  <Text className="text-gray-400 text-center text-xs">
                    Diâmetro
                  </Text>
                  <Text className="text-white text-center font-bodyBold">
                    {selectedPlanet.diameter} km
                  </Text>
                </View>

                <View className="w-[48%] bg-white/5 rounded-xl p-3">
                  <Text className="text-gray-400 text-center text-xs">
                    Distância
                  </Text>
                  <Text className="text-white text-center font-bodyBold">
                    {selectedPlanet.distance} M km
                  </Text>
                </View>

                <View className="w-[48%] bg-white/5 rounded-xl p-3">
                  <Text className="text-gray-400 text-center text-xs">
                    Luas
                  </Text>
                  <Text className="text-white text-center font-bodyBold">
                    {selectedPlanet.moons}
                  </Text>
                </View>

                <View className="w-[48%] bg-white/5 rounded-xl p-3">
                  <Text className="text-gray-400 text-center text-xs">
                    Descoberta
                  </Text>
                  <Text className="text-white text-center font-bodyBold">
                    {selectedPlanet.discovery}
                  </Text>
                </View>
              </View>

              <Pressable
                onPress={() => setSelectedPlanet(null)}
                className="bg-primary py-3 rounded-xl items-center"
              >
                <Text className="text-white font-bodyBold">
                  Fechar
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      </Modal>
    </>
  );
}
