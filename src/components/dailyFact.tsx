import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef, useState } from "react";
import { Animated, Text, View, Share, Pressable } from "react-native";

const STORAGE_KEY = "@daily_fact_v2";

const facts = [
  {
    title: "O Sol domina o Sistema Solar",
    description:
      "O Sol representa cerca de 99,86% de toda a massa do Sistema Solar. Isso significa que praticamente tudo o que existe orbitando por aqui depende diretamente da gravidade solar para se manter estável, incluindo planetas, asteroides e cometas.",
  },
  {
    title: "A luz solar viaja pelo espaço",
    description:
      "A luz emitida pelo Sol leva aproximadamente 8 minutos para alcançar a Terra. Se o Sol desaparecesse agora, ainda o veríamos brilhando no céu por vários minutos antes que a escuridão chegasse.",
  },
  {
    title: "Vênus desafia o conceito de tempo",
    description:
      "Em Vênus, um único dia — o tempo que o planeta leva para girar em torno do próprio eixo — é mais longo do que um ano inteiro, que é o tempo que ele leva para completar uma volta ao redor do Sol.",
  },
  {
    title: "Júpiter é um verdadeiro gigante",
    description:
      "Júpiter é tão grande que caberiam mais de 1.300 planetas Terra dentro dele. Sua gravidade é tão intensa que ajuda a proteger o Sistema Solar interno de impactos frequentes de asteroides.",
  },
  {
    title: "A Lua está se afastando",
    description:
      "A Lua se afasta da Terra cerca de 3,8 centímetros por ano. Esse pequeno movimento, acumulado ao longo de milhões de anos, influencia as marés, a rotação do planeta e até a duração dos nossos dias.",
  },
  {
    title: "O universo está em constante movimento",
    description:
      "A Via Láctea não está parada no espaço. Ela se move a centenas de quilômetros por segundo e deve colidir com a galáxia de Andrômeda daqui a aproximadamente 4 bilhões de anos.",
  },
];

export default function DailyFact() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [fact, setFact] = useState<{
    title: string;
    description: string;
  } | null>(null);

  function getTodayKey() {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  }

  function getRandomFact() {
    return facts[Math.floor(Math.random() * facts.length)];
  }

  async function loadDailyFact() {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    const todayKey = getTodayKey();

    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.date === todayKey) {
        setFact(parsed.fact);
        fadeAnim.setValue(1);
        return;
      }
    }

    const newFact = getRandomFact();

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        date: todayKey,
        fact: newFact,
      })
    );

    setFact(newFact);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }

  useEffect(() => {
    loadDailyFact();
  }, []);

  if (!fact) return null;

  async function handleShare() {
    if (!fact) return;

    try {
      await Share.share({
        message: `🌌 Fato Cósmico\n\n${fact.title}\n\n${fact.description}`,
      });
    } catch (error) {}
  }

  return (
    <LinearGradient
      colors={["#5800F0", "#4C00D9"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ padding: 18, borderRadius: 16, margin: 16 }}
    >
      <View className="flex-row items-center justify-between mb-4">
        <View className="flex-row items-center gap-2">
          <Ionicons name="sparkles-outline" size={18} color="#fff" />
          <Text className="text-white/90 text-sm uppercase tracking-wider">
            Fato Cósmico
          </Text>
        </View>

        <Pressable
          onPress={handleShare}
          className="bg-white/10 p-2 rounded-full border border-white/10"
        >
          <Ionicons name="share-social-outline" size={18} color="#fff" />
        </Pressable>
      </View>

      <Animated.View style={{ opacity: fadeAnim }}>
        <Text className="text-white text-lg font-semibold mb-2">
          {fact.title}
        </Text>

        <Text className="text-white/90 text-base leading-relaxed">
          {fact.description}
        </Text>
      </Animated.View>
    </LinearGradient>
  );
}
