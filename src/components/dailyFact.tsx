import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";

const STORAGE_KEY = "@daily_fact";

const facts = [
  "O Sol representa cerca de 99,86% da massa total do Sistema Solar.",
  "A luz do Sol leva aproximadamente 8 minutos para chegar à Terra.",
  "Existem mais estrelas no universo observável do que grãos de areia em todas as praias da Terra.",
  "A Lua se afasta da Terra cerca de 3,8 centímetros por ano.",
  "Um dia em Vênus é mais longo que um ano em Vênus.",
  "Júpiter é tão grande que caberiam mais de 1.300 Terras dentro dele.",
  "Saturno flutuaria na água se existisse um oceano grande o suficiente.",
  "As estrelas de nêutrons podem girar até 600 vezes por segundo.",
  "O espaço não é completamente silencioso — ondas de rádio podem ser captadas.",
  "Há planetas feitos principalmente de diamante.",
  "Marte possui a maior montanha do Sistema Solar, o Monte Olimpo.",
  "O núcleo do Sol atinge temperaturas acima de 15 milhões de graus Celsius.",
  "A Via Láctea pode colidir com Andrômeda daqui a cerca de 4 bilhões de anos.",
  "Algumas estrelas são tão grandes que, se estivessem no lugar do Sol, engoliriam a Terra.",
  "Existem mais galáxias no universo do que estrelas na Via Láctea.",
  "A Lua não tem atmosfera como a Terra.",
  "O espaço é quase um vácuo perfeito.",
  "Urano gira praticamente de lado.",
  "As auroras boreais também existem em outros planetas.",
  "Um buraco negro pode distorcer o tempo e o espaço ao seu redor.",
];

export default function DailyFact() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [fact, setFact] = useState("");

  function getRandomFact() {
    let newFact = fact;
    while (newFact === fact) {
      newFact = facts[Math.floor(Math.random() * facts.length)];
    }
    return newFact;
  }

  async function changeFact() {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();

    const newFact = getRandomFact();
    setFact(newFact);
    await AsyncStorage.setItem(STORAGE_KEY, newFact);
  }

  async function loadFact() {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    if (stored) {
      setFact(stored);
      fadeAnim.setValue(1);
    } else {
      const firstFact = getRandomFact();
      setFact(firstFact);
      await AsyncStorage.setItem(STORAGE_KEY, firstFact);
      fadeAnim.setValue(1);
    }
  }

  useEffect(() => {
    loadFact();
  }, []);

  return (
    <LinearGradient
      colors={["#0d00a4", "#131022"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="rounded-2xl p-5 mt-6"
    >
      <View className="flex-row items-center justify-between mb-3">
        <Text className="text-white font-bodyBold text-lg">
          🌌 Fato do dia
        </Text>

        <Pressable
          onPress={changeFact}
          className="bg-white/10 p-2 rounded-full border border-white/10"
        >
          <Ionicons name="refresh" size={20} color="#e5e5e5" />
        </Pressable>
      </View>

      <Animated.Text
        style={{ opacity: fadeAnim }}
        className="text-white text-base leading-relaxed"
      >
        {fact}
      </Animated.Text>
    </LinearGradient>
  );
}
