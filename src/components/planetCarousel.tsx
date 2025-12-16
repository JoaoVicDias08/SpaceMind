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
import { Ionicons } from "@expo/vector-icons";
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
      "Mercúrio é o planeta mais próximo do Sol e o menor do Sistema Solar, com grandes variações de temperatura.",
    image: require("../../assets/planets/mercury.jpg"),
    diameter: "4.879 km",
    distance: "77 milhões km",
    moons: "0",
    discovery: "Conhecido desde a Antiguidade",
  },
  {
    id: "2",
    name: "Vênus",
    type: "Rochoso • Atmosfera densa",
    description:
      "Vênus é o planeta mais quente do Sistema Solar devido ao intenso efeito estufa.",
    image: require("../../assets/planets/venus.jpg"),
    diameter: "12.104 km",
    distance: "38 milhões km",
    moons: "0",
    discovery: "Conhecido desde a Antiguidade",
  },
  {
    id: "3",
    name: "Terra",
    type: "Rochoso • Habitável",
    description:
      "A Terra é o único planeta conhecido que abriga vida e possui água líquida.",
    image: require("../../assets/planets/earth.jpg"),
    diameter: "12.742 km",
    distance: "0 km",
    moons: "1",
    discovery: "—",
  },
  {
    id: "4",
    name: "Marte",
    type: "Rochoso • Frio",
    description:
      "Marte é conhecido como o planeta vermelho e abriga a maior montanha do Sistema Solar.",
    image: require("../../assets/planets/mars.jpg"),
    diameter: "6.779 km",
    distance: "225 milhões km",
    moons: "2",
    discovery: "Conhecido desde a Antiguidade",
  },
  {
    id: "5",
    name: "Júpiter",
    type: "Gasoso",
    description:
      "Júpiter é o maior planeta do Sistema Solar e possui uma gigantesca tempestade.",
    image: require("../../assets/planets/jupiter.jpg"),
    diameter: "139.820 km",
    distance: "628 milhões km",
    moons: "95",
    discovery: "Conhecido desde a Antiguidade",
  },
  {
    id: "6",
    name: "Saturno",
    type: "Gasoso • Anéis",
    description:
      "Saturno se destaca por seus anéis compostos de gelo e rochas.",
    image: require("../../assets/planets/saturn.jpg"),
    diameter: "116.460 km",
    distance: "1,2 bilhões km",
    moons: "146",
    discovery: "Conhecido desde a Antiguidade",
  },
  {
    id: "7",
    name: "Urano",
    type: "Gigante de gelo",
    description:
      "Urano gira praticamente de lado e possui coloração azul-esverdeada.",
    image: require("../../assets/planets/uranus.jpg"),
    diameter: "50.724 km",
    distance: "2,6 bilhões km",
    moons: "27",
    discovery: "1781",
  },
  {
    id: "8",
    name: "Netuno",
    type: "Gigante de gelo",
    description:
      "Netuno é o planeta mais distante do Sol e possui os ventos mais rápidos.",
    image: require("../../assets/planets/neptune.jpg"),
    diameter: "49.244 km",
    distance: "4,3 bilhões km",
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
                  borderWidth: 1,
                  borderColor: "rgba(255,255,255,0.08)",
                  height: 560,
                  justifyContent: "space-between",
                }}
              >
                <View className="items-center">
                  <MotiView
                    from={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 500 }}
                    className="w-64 h-64"
                  >
                    <Image
                      source={item.image}
                      resizeMode="contain"
                      className="w-full h-full"
                    />
                  </MotiView>
                </View>

                <View>
                  <Text className="text-white text-3xl font-title text-center">
                    {item.name}
                  </Text>

                  <Text className="text-text-purple text-sm text-center mt-1">
                    {item.type}
                  </Text>

                  <Text className="text-gray-300 text-base text-center mt-4 leading-relaxed">
                    {item.description}
                  </Text>
                </View>

                <Pressable onPress={() => setSelectedPlanet(item)}>
                  {({ pressed }) => (
                    <MotiView
                      animate={{ scale: pressed ? 0.95 : 1 }}
                      transition={{ duration: 120 }}
                      className="bg-primary py-3 rounded-2xl flex-row items-center justify-center gap-2 mt-4"
                    >
                      <Ionicons
                        name="planet-outline"
                        size={22}
                        color="#fff"
                      />
                      <Text className="text-white font-bodyBold text-lg">
                        Ver detalhes
                      </Text>
                    </MotiView>
                  )}
                </Pressable>
              </LinearGradient>
            </MotiView>
          </View>
        )}
      />

      <Modal visible={!!selectedPlanet} transparent animationType="fade">
        <Pressable
          className="flex-1 bg-black/80 items-center justify-center px-6"
          onPress={() => setSelectedPlanet(null)}
        >
          <Pressable
            onPress={() => {}}
            className="bg-background-darkblue rounded-3xl p-6 w-full border border-white/10"
          >
            <View className="items-center mb-4">
              <View className="w-44 h-44">
                <Image
                  source={selectedPlanet?.image}
                  resizeMode="contain"
                  className="w-full h-full"
                />
              </View>
            </View>

            <Text className="text-white text-2xl font-title text-center mb-6">
              {selectedPlanet?.name}
            </Text>

            <View className="gap-2 mb-6">
              <Text className="text-text-light">
                🌍 Diâmetro: {selectedPlanet?.diameter}
              </Text>
              <Text className="text-text-light">
                📏 Distância da Terra: {selectedPlanet?.distance}
              </Text>
              <Text className="text-text-light">
                🌕 Número de luas: {selectedPlanet?.moons}
              </Text>
              <Text className="text-text-light">
                🛰 Descoberta: {selectedPlanet?.discovery}
              </Text>
            </View>

            <Pressable onPress={() => setSelectedPlanet(null)}>
              {({ pressed }) => (
                <MotiView
                  animate={{ scale: pressed ? 0.95 : 1 }}
                  transition={{ duration: 120 }}
                  className="bg-primary py-3 rounded-xl items-center"
                >
                  <Text className="text-white font-bodyBold text-lg">
                    Fechar
                  </Text>
                </MotiView>
              )}
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
