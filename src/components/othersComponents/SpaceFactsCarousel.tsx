import { View, Text, ScrollView } from "react-native";
import { MotiView } from "moti";
import { Ionicons } from "@expo/vector-icons";

const facts = [
  {
    id: 1,
    icon: "planet",
    title: "Exoplanetas",
    text: "Existem milhares de planetas fora do nosso sistema solar.",
  },
  {
    id: 2,
    icon: "earth",
    title: "Idade da Terra",
    text: "Nosso planeta tem cerca de 4.5 bilhões de anos.",
  },
  {
    id: 3,
    icon: "rocket",
    title: "Exploração Espacial",
    text: "O primeiro humano foi ao espaço em 1961.",
  },
  {
    id: 4,
    icon: "aperture",
    title: "Buracos Negros",
    text: "Eles distorcem o espaço-tempo ao seu redor.",
  },
];

export default function SpaceFactsCarousel() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingLeft: 16,
        paddingRight: 24, // evita corte no último
      }}
    >
      {facts.map((item, index) => (
        <MotiView
          key={item.id}
          from={{ opacity: 0, translateY: 14 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: index * 120, duration: 400 }}
          style={{
            width: 250,
            backgroundColor: "rgba(255,255,255,0.06)",
            borderColor: "rgba(255,255,255,0.12)",
            borderWidth: 1,
            borderRadius: 24,
            paddingVertical: 18,
            paddingHorizontal: 16,
            marginRight: 16,
          }}
        >
          {/* ÍCONE — agora com área maior */}
          <View
            style={{
              width: 58,
              height: 58,
              borderRadius: 999,
              backgroundColor: "rgba(140, 82, 255, 0.18)",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 12,
            }}
          >
            <Ionicons name={item.icon as any} size={30} color="#A88BFF" />
          </View>

          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "700",
              marginBottom: 4,
            }}
          >
            {item.title}
          </Text>

          <Text style={{ color: "#D6D6D6", lineHeight: 20 }}>
            {item.text}
          </Text>
        </MotiView>
      ))}
    </ScrollView>
  );
}
