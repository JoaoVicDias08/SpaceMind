import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from "moti";
import MaskedView from "@react-native-masked-view/masked-view";

import ViaLacteaImage from "../../../assets/galaxiesCards/viaLactea.jpg";

const { width } = Dimensions.get("window");

export default function ViaLacteaSection() {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 600 }}
      className="px-6 mt-12"
    >
      <View className="mb-6 items-center">
        <MaskedView
          maskElement={
            <Text
              style={{
                fontSize: 36,
                fontFamily: "title",
                textAlign: "center",
              }}
            >
              Visite as galáxias
            </Text>
          }
        >
          <LinearGradient
            colors={["#ff6ec7", "#4500BD", "#00d4ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              width: width - 48, 
              height: 50,
            }}
          />
        </MaskedView>
      </View>

      <LinearGradient
        colors={["#0B0530", "#120845", "#1A0B5E"]}
        style={{
          borderRadius: 32,
          padding: 24,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.4,
          shadowRadius: 6,
          elevation: 8,
        }}
      >
        <Text className="text-4xl font-title text-white text-center mb-4">
          Via Láctea
        </Text>

        <View className="items-center mb-4">
          <Image
            source={ViaLacteaImage}
            style={{
              width: "100%",
              height: 200,
              borderRadius: 24,
            }}
            resizeMode="cover"
          />
        </View>

        <Text className="text-gray-300 text-base text-center leading-relaxed">
          A Via Láctea é a galáxia que abriga nosso Sistema Solar. É uma galáxia espiral
          com bilhões de estrelas, planetas, nebulosas e diversos sistemas estelares. 
          Possui um núcleo denso e braços espirais que se estendem por dezenas de milhares
          de anos-luz. Explorar a Via Láctea é entender de onde viemos e o nosso lugar no universo.
        </Text>
      </LinearGradient>
    </MotiView>
  );
}
