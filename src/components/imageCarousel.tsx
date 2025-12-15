import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, FlatList, Image, Pressable, Text, View } from "react-native";

const { width } = Dimensions.get("window");

const images = [
  { id: "1", source: require("../../assets/images/solarSystemImage.jpg"), title: "Nosso Sistema Solar", route: "/home/solar" },
  { id: "2", source: require("../../assets/images/galaxyImage.jpg"), title: "Galáxias Distantes", route: "/home/galaxy" },
  { id: "3", source: require("../../assets/images/moonImage.jpg"), title: "A Lua", route: "/home/moon" },
];

export default function ImageCarousel() {
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

  const fadeInAnim = useRef(new Animated.Value(0)).current;

  // Fade-in da primeira imagem
  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  function CarouselItem({ item, i }: any) {
    const opacity = scrollX.interpolate({
      inputRange: [(i - 1) * width, i * width, (i + 1) * width],
      outputRange: [0.5, 1, 0.5],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={{
          width: width - 32,
          opacity: i === 0 ? Animated.multiply(fadeInAnim, opacity) : opacity, // só a primeira imagem recebe fade-in
        }}
        className="mx-4 rounded-3xl overflow-hidden"
      >
        <Image source={item.source} className="w-full h-60" resizeMode="cover" />
        <View className="absolute inset-0 bg-black/30" />

        <View className="absolute inset-0 flex-row items-end justify-between p-5">
          <Text className="text-white text-2xl font-title max-w-[70%]">{item.title}</Text>
          <Pressable onPress={() => router.push(item.route)}>
            <View className="bg-primary p-3 rounded-full">
              <Ionicons name="arrow-forward" size={20} color="#0b0530" />
            </View>
          </Pressable>
        </View>
      </Animated.View>
    );
  }

  return (
    <View className="mt-4">
      <Animated.FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index: i }) => <CarouselItem item={item} i={i} />}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        onMomentumScrollEnd={(e) => setIndex(Math.round(e.nativeEvent.contentOffset.x / width))}
      />

      {/* Indicadores */}
      <View className="flex-row justify-center mt-3">
        {images.map((_, i) => {
          const widthAnim = i === index ? 16 : 8;
          const bgColor = i === index ? '#fff' : 'rgba(255,255,255,0.4)';
          return <View key={i} style={{ width: widthAnim, height: 8, borderRadius: 4, marginHorizontal: 4, backgroundColor: bgColor }} />;
        })}
      </View>
    </View>
  );
}
