import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Text, View, Share, Pressable } from "react-native";
import { MotiView } from "moti";

const STORAGE_KEY = "@daily_fact_v2";

const facts = [
  { title: "O Sol domina o Sistema Solar", description: "O Sol representa cerca de 99,86%..." },
  { title: "A luz solar viaja pelo espaço", description: "A luz emitida pelo Sol leva aproximadamente 8 minutos..." },
  { title: "Vênus desafia o conceito de tempo", description: "Em Vênus, um único dia é mais longo do que um ano..." },
  { title: "Júpiter é um verdadeiro gigante", description: "Júpiter é tão grande que caberiam mais de 1.300 planetas Terra..." },
  { title: "A Lua está se afastando", description: "A Lua se afasta da Terra cerca de 3,8 centímetros por ano..." },
  { title: "O universo está em constante movimento", description: "A Via Láctea não está parada no espaço..." },
];

export default function DailyFact() {
  // Começa com um fato aleatório imediatamente
  const [fact, setFact] = useState(() => facts[Math.floor(Math.random() * facts.length)]);

  function getTodayKey() {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  }

  async function loadDailyFact() {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    const todayKey = getTodayKey();

    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.date === todayKey) {
        setFact(parsed.fact); // Atualiza para o fato real do dia
        return;
      }
    }

    const newFact = facts[Math.floor(Math.random() * facts.length)];
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ date: todayKey, fact: newFact })
    );
    setFact(newFact); // Atualiza para o novo fato
  }

  useEffect(() => {
    loadDailyFact();
  }, []);

  async function handleShare() {
    try {
      await Share.share({
        message: `🌌 Fato Cósmico\n\n${fact.title}\n\n${fact.description}`,
      });
    } catch {}
  }

  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 500 }}
    >
      <LinearGradient
        colors={["#5800F0", "#4C00D9"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ padding: 18, borderRadius: 16, margin: 16 }}
      >
        {/* HEADER */}
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center gap-2">
            <Ionicons name="sparkles-outline" size={18} color="#fff" />
            <Text className="text-white/90 text-sm uppercase tracking-wider">
              Fato Cósmico
            </Text>
          </View>

          <Pressable onPress={handleShare}>
            {({ pressed }) => (
              <MotiView
                animate={{ scale: pressed ? 0.9 : 1 }}
                transition={{ type: "timing", duration: 120 }}
                className="bg-white/10 p-2 rounded-full border border-white/10"
              >
                <Ionicons name="share-social-outline" size={18} color="#fff" />
              </MotiView>
            )}
          </Pressable>
        </View>

        {/* CONTEÚDO */}
        <MotiView
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 500 }}
        >
          <Text className="text-white text-lg font-semibold mb-2">{fact.title}</Text>
          <Text className="text-white/90 text-base leading-relaxed">{fact.description}</Text>
        </MotiView>
      </LinearGradient>
    </MotiView>
  );
}
