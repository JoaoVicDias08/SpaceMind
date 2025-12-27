import React, { useMemo, useState } from "react";
import { View, Text, Image, SectionList, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from "moti";
import { timelineData } from "../../data/timeline";

const categories = ["Todos", "Lua", "Marte", "Telescópio", "Estação", "Exploração", "Sonda"];

export default function TimelineScreen() {
  const [selected, setSelected] = useState("Todos");

  const filtered = useMemo(() => {
    if (selected === "Todos") return timelineData;
    return timelineData.filter(item => item.category === selected);
  }, [selected]);

  // agrupa por décadas
  const sections = useMemo(() => {
    const map: any = {};

    filtered.forEach(item => {
      const decade = `${Math.floor(item.year / 10) * 10}s`;
      if (!map[decade]) map[decade] = [];
      map[decade].push(item);
    });

    return Object.keys(map)
      .sort()
      .map(decade => ({
        title: decade,
        data: map[decade].sort((a: any, b: any) => a.year - b.year),
      }));
  }, [filtered]);

  return (
    <LinearGradient
      colors={["#0B0F2F", "#101935", "#020617"]}
      style={{ flex: 1, paddingTop: 50 }}
    >
      {/* titulo */}
      <Text
        style={{
          color: "white",
          fontSize: 26,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Linha do Tempo do Espaço
      </Text>

      {/* filtros */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginBottom: 10 }}>
        {categories.map(cat => (
          <Pressable
            key={cat}
            onPress={() => setSelected(cat)}
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 30,
              margin: 4,
              backgroundColor: selected === cat ? "#6366F1" : "rgba(255,255,255,0.08)",
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.15)",
            }}
          >
            <Text style={{ color: "white" }}>{cat}</Text>
          </Pressable>
        ))}
      </View>

      {/* lista */}
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 14 }}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            style={{
              color: "#A5B4FC",
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 18,
              marginBottom: 6,
            }}
          >
            ━━ {title} ━━
          </Text>
        )}
        renderItem={({ item, index }) => (
          <MotiView
            from={{ opacity: 0, translateY: 20, scale: 0.97 }}
            animate={{ opacity: 1, translateY: 0, scale: 1 }}
            transition={{ delay: index * 80 }}
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: 16,
              marginBottom: 14,
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.15)",
            }}
          >
            <Image
              source={item.image}
              style={{ width: "100%", height: 180 }}
              resizeMode="cover"
            />

            <View style={{ padding: 14 }}>
              <Text style={{ color: "#818CF8", fontWeight: "bold", fontSize: 14 }}>
                {item.year}
              </Text>

              <Text style={{ color: "white", fontSize: 17, fontWeight: "bold", marginTop: 4 }}>
                {item.title}
              </Text>

              <Text style={{ color: "#CBD5F5", marginTop: 6 }}>
                {item.description}
              </Text>

              <View
                style={{
                  alignSelf: "flex-start",
                  marginTop: 10,
                  backgroundColor: "rgba(255,255,255,0.12)",
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  borderRadius: 12,
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>{item.category}</Text>
              </View>
            </View>
          </MotiView>
        )}
      />
    </LinearGradient>
  );
}
