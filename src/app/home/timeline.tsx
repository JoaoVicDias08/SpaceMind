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
      colors={["#120845", "#0B0530", "#02010F"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1, paddingTop: 55 }}
    >
      {/* HEADER */}
      <MotiView
        from={{ opacity: 0, translateY: 18 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 600 }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "800",
            textAlign: "center",
          }}
        >
          Linha do Tempo
        </Text>

        <Text
          style={{
            color: "#C8B6FF",
            fontSize: 16,
            textAlign: "center",
            marginTop: 4,
          }}
        >
          A jornada da humanidade pelo espaço 🚀
        </Text>
      </MotiView>

      {/* FILTROS */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: 16,
        }}
      >
        {categories.map(cat => (
          <Pressable
            key={cat}
            onPress={() => setSelected(cat)}
            style={{
              paddingHorizontal: 14,
              paddingVertical: 8,
              borderRadius: 30,
              margin: 5,
              backgroundColor:
                selected === cat
                  ? "rgba(168, 139, 255, 0.28)"
                  : "rgba(255,255,255,0.06)",
              borderWidth: 1,
              borderColor:
                selected === cat
                  ? "rgba(168, 139, 255, 0.55)"
                  : "rgba(255,255,255,0.14)",
            }}
          >
            <Text
              style={{
                color: selected === cat ? "#E5DBFF" : "white",
                fontWeight: "600",
              }}
            >
              {cat}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* LISTA */}
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ marginTop: 18, marginBottom: 10 }}>
            <Text
              style={{
                color: "#A88BFF",
                fontSize: 20,
                fontWeight: "800",
              }}
            >
              {title}
            </Text>

            <View
              style={{
                height: 2,
                marginTop: 6,
                backgroundColor: "rgba(168,139,255,0.35)",
                borderRadius: 10,
                width: "45%",
              }}
            />
          </View>
        )}
        renderItem={({ item, index }) => (
          <MotiView
            from={{ opacity: 0, translateY: 18 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: index * 90 }}
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              borderRadius: 20,
              marginBottom: 16,
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.14)",
              overflow: "hidden",
            }}
          >
            <Image
              source={item.image}
              style={{ width: "100%", height: 175 }}
              resizeMode="cover"
            />

            <View style={{ padding: 14 }}>
              <Text
                style={{
                  color: "#BFA8FF",
                  fontWeight: "800",
                  fontSize: 14,
                }}
              >
                {item.year}
              </Text>

              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "800",
                  marginTop: 4,
                }}
              >
                {item.title}
              </Text>

              <Text
                style={{
                  color: "#D8DBFF",
                  marginTop: 6,
                  lineHeight: 20,
                }}
              >
                {item.description}
              </Text>

              <View
                style={{
                  alignSelf: "flex-start",
                  marginTop: 10,
                  backgroundColor: "rgba(168,139,255,0.22)",
                  paddingHorizontal: 12,
                  paddingVertical: 5,
                  borderRadius: 999,
                  borderWidth: 1,
                  borderColor: "rgba(168,139,255,0.45)",
                }}
              >
                <Text
                  style={{
                    color: "#E5DBFF",
                    fontSize: 12,
                    fontWeight: "700",
                  }}
                >
                  {item.category}
                </Text>
              </View>
            </View>
          </MotiView>
        )}
      />
    </LinearGradient>
  );
}
