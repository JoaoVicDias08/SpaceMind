import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router"; // ou react-navigation
import { useRef, useState } from "react";
import { Animated, Dimensions, Pressable, Text, View } from "react-native";

const screenWidth = Dimensions.get("window").width;

const menuItems = [
  { label: "Sistema Solar", icon: "planet", route: "/home/solar" },
  { label: "Galeria", icon: "camera-outline", route: "/home/gallery" },
  { label: "Notícias", icon: "newspaper-outline", route: "/home/news" },
  { label: "Perfil", icon: "person-outline", route: "/home/profile" },
  { label: "Configurações", icon: "settings-outline", route: "/home/settings" },
  { label: "Ajuda", icon: "help-circle-outline", route: "/home/help" },
];

export default function HeaderMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-screenWidth)).current;

  function toggleMenu() {
    Animated.timing(slideAnim, {
      toValue: menuOpen ? -screenWidth : 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setMenuOpen(!menuOpen));
  }

  return (
    <>
      {/* Header */}
      <View className="flex flex-row mt-12 justify-between items-center w-full border-b border-text-purple/30 pb-6 px-4">
        <Pressable onPress={toggleMenu}>
          <Ionicons name="menu" size={28} color="#fff" />
        </Pressable>

        <Text className="font-titleLight text-text-light text-2xl">
          Explorador do cosmos
        </Text>

        <Ionicons name="search" size={28} color="#fff" />
      </View>

      {/* Menu Lateral */}
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: slideAnim,
          width: screenWidth * 0.7,
          height: "100%",
          backgroundColor: "#131022",
          paddingTop: 60,
          paddingHorizontal: 20,
          zIndex: 100,
        }}
      >
        <LinearGradient
          colors={["#131022", "#14213d"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="absolute inset-0"
        />
        {/* Perfil */}
        <View className="flex-row justify-between items-start px-2">
          <View className="items-start">
            <View className="w-24 h-24 rounded-full items-center justify-center overflow-hidden">
              <LinearGradient colors={["#9a90cb", "#6366f1"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} className="w-full h-full items-center justify-center">
                <Ionicons name="person" size={48} color="#fff" />
              </LinearGradient>
            </View>
            <Text className="text-white text-lg mt-4 font-body">
              Comandante João
            </Text>
            <View className="flex-row items-center mt-2 border-b-2 border-text-purple/30 pb-6">
              <Ionicons
                name="ribbon"
                size={20}
                color="#ffd60a"
                className="mr-2"
              />
              <Text className="text-secondary font-bodyBold text-xl">
                Explorador nível 3
              </Text>
            </View>
          </View>

          <Ionicons
            name="close"
            size={28}
            color="#fff"
            className="mt-4"
            onPress={toggleMenu}
          />
        </View>

        {/* Links */}
        <View className="mt-4">
          {menuItems.map((item) => (
            <Pressable
              key={item.label}
              className="flex-row items-center py-3"
              onPress={() => {
                router.push(item.route as any);
                toggleMenu();
              }}
            >
              <Ionicons
                name={item.icon as any}
                size={22}
                color="#fff"
                className="mr-4"
              />
              <Text className="text-white text-lg font-body">{item.label}</Text>
            </Pressable>
          ))}
        </View>

        {/* Botão Sair da Missão */}
        <Pressable
          className="flex-row items-center justify-center border-t border-text-purple/30 mt-auto py-4"
          onPress={() => console.log("Sair da missão")}
        >
          <Ionicons name="log-out-outline" size={20} color="#fff" className="mr-2" />
          <Text className="text-white text-lg font-body">Sair da Missão</Text>
        </Pressable>

        <Text className="text-text-purple text-center mt-4">v1.0.4</Text>
      </Animated.View>

      {/* Overlay */}
      {menuOpen && (
        <Pressable
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
          onPress={toggleMenu}
        />
      )}
    </>
  );
}
