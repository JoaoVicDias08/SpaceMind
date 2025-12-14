import DailyFact from "@/src/components/dailyFact";
import HeaderMenu from "@/src/components/headerMenu";
import ImageCarousel from "@/src/components/imageCarousel";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-background-darkblue">

      <HeaderMenu/>

     <View className="flex-row ml-4 mt-4">
      <Text className="font-title text-text-light text-3xl py-1">Bem vindo, </Text>
      <Text className="font-title text-text-light text-3xl bg-secondary px-3 rounded-3xl py-1">Viajante</Text>
      </View>
        <Text className="ml-4 mt-2 text-text-purple font-body">Pronto para descobrir novos horizontes?</Text>

        <ImageCarousel />

        <DailyFact/>

    </ScrollView>
  );
}
