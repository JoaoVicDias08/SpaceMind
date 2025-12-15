import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const images = [
  {
    id: "1",
    source: require("../../assets/images/solarSystemImage.jpg"),
    title: "Nosso Sistema Solar",
    route: "/home/solar",
  },
  {
    id: "2",
    source: require("../../assets/images/galaxyImage.jpg"),
    title: "Galáxias Distantes",
    route: "/home/galaxy",
  },
  {
    id: "3",
    source: require("../../assets/images/moonImage.jpg"),
    title: "A Lua",
    route: "/home/moon",
  },
];

export default function ImageCarousel() {
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const [index, setIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  // 🔄 AUTOPLAY
  useEffect(() => {
    if (isInteracting) return;

    const interval = setInterval(() => {
      const nextIndex = index === images.length - 1 ? 0 : index + 1;

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      setIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [index, isInteracting]);

  function CarouselItem({ item, index: itemIndex }: any) {
    const inputRange = [
      (itemIndex - 1) * width,
      itemIndex * width,
      (itemIndex + 1) * width,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.92, 1, 0.92],
      extrapolate: "clamp",
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 1, 0.7],
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        style={{
          width: width - 32,
          transform: [{ scale }],
          opacity,
        }}
        className="mx-4 rounded-3xl overflow-hidden"
      >
        <Image
          source={item.source}
          className="w-full h-60"
          resizeMode="cover"
        />

        <View className="absolute inset-0 bg-black/40" />

        <View className="absolute inset-0 flex-row items-end justify-between p-5">
          <Text className="text-white text-2xl font-title max-w-[70%]">
            {item.title}
          </Text>

          <Pressable
            onPress={() => router.push(item.route)}
            className="bg-text-purple p-3 rounded-full"
          >
            <Ionicons name="arrow-forward" size={20} color="#0b0530" />
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
        renderItem={({ item, index }) => (
          <CarouselItem item={item} index={index} />
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        onMomentumScrollEnd={(e) => {
          const i = Math.round(
            e.nativeEvent.contentOffset.x / width
          );
          setIndex(i);
        }}
        onScrollBeginDrag={() => setIsInteracting(true)}
        onScrollEndDrag={() => setIsInteracting(false)}
      />

      {/* Dots */}
      <View className="flex-row justify-center mt-3">
        {images.map((_, i) => (
          <View
            key={i}
            className={`h-2 rounded-full mx-1 ${
              i === index
                ? "w-5 bg-white"
                : "w-2 bg-white/40"
            }`}
          />
        ))}
      </View>
    </View>
  );
}
