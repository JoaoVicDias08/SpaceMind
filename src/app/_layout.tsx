import { Slot } from "expo-router";
import { useFonts, Exo2_700Bold, Exo2_300Light } from "@expo-google-fonts/exo-2";
import {
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold
} from "@expo-google-fonts/roboto-condensed";

import '../../global.css'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Exo2_700Bold,
    Exo2_300Light,
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
  });

  if (!fontsLoaded) return null; // evita crash antes das fontes carregarem

  return <Slot />;
}
