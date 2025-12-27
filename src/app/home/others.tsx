import { View, Text, ScrollView, Pressable } from "react-native";
import { router } from "expo-router";

export default function Other() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>
        Curiosidades do Espaço
      </Text>

      <Pressable
        onPress={() => router.push("/home/timeline")}
        style={{
          backgroundColor: "#111827",
          padding: 16,
          borderRadius: 14,
          marginBottom: 16,
          borderWidth: 1,
          borderColor: "#1f2937",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
          🚀 Linha do Tempo da Exploração Espacial
        </Text>
        <Text style={{ color: "#9ca3af", marginTop: 6 }}>
          Veja os maiores marcos da história do espaço em ordem cronológica.
        </Text>
      </Pressable>
    </ScrollView>
  );
}
