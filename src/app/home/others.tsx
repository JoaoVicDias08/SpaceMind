import { View, Text, ScrollView, Pressable } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from "moti";

import SpaceFactsCarousel from "@/src/components/othersComponents/SpaceFactsCarousel";

export default function Other() {
  return (
    <LinearGradient
      colors={["#120845", "#0B0530", "#02010F"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView
        className="flex-1 px-4 pt-8"
        showsVerticalScrollIndicator={false}
      >
        <MotiView
          from={{ opacity: 0, translateY: 18 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 600 }}
        >
          <Text className="text-white text-4xl font-title tracking-wide mt-4">
            Universo
          </Text>

          <Text className="text-[#A88BFF] text-xl font-title mt-1">
            Curiosidades & Mistérios
          </Text>

          <Text className="text-gray-300 mt-3 leading-relaxed">
            Descubra fatos surpreendentes e enigmas que ainda desafiam a
            ciência.
          </Text>
        </MotiView>

        <MotiView
          from={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 120, duration: 450 }}
        >
          <Pressable
            onPress={() => router.push("/home/timeline")}
            className="bg-white/5 border border-white/10 rounded-3xl mt-8 p-5 shadow-xl shadow-black/50"
          >
            <Text className="text-white text-lg font-bodyBold">
              🚀 Linha do Tempo da Exploração Espacial
            </Text>

            <Text className="text-gray-300 mt-2 leading-relaxed">
              Viaje pela história das maiores conquistas espaciais — da primeira
              missão aos dias atuais.
            </Text>

            <View className="mt-4 bg-[#A88BFF]/25 rounded-full px-4 py-2 self-start">
              <Text className="text-[#C8B6FF] font-bodyBold">
                Ver Linha do Tempo →
              </Text>
            </View>
          </Pressable>
        </MotiView>

        <MotiView
          from={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 120, duration: 450 }}
        >
          <Text className="text-white text-2xl font-title mt-10 mb-2">
            Explorar Curiosidades
          </Text>

          <Text className="text-gray-300 mb-3">Arraste para o lado 👇</Text>
        </MotiView>

        <SpaceFactsCarousel />

        <View className="h-14" />
      </ScrollView>
    </LinearGradient>
  );
}
