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
import { LinearGradient } from "expo-linear-gradient";

import { carouselItems } from "@/src/data/carouselItems";

const { width } = Dimensions.get("window");

type CarouselItemProps = {
  item: (typeof carouselItems)[number];
  i: number;
};

export default function ImageCarousel() {
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

  const entryOpacity = useRef(new Animated.Value(0)).current;
  const entryTranslate = useRef(new Animated.Value(20)).current;

  // Animação de entrada
  useEffect(() => {
    Animated.parallel([
      Animated.timing(entryOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(entryTranslate, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % carouselItems.length;

      flatListRef.current?.scrollToOffset({
        offset: nextIndex * width,
        animated: true,
      });

      setIndex(nextIndex);
    }, 4500);

    return () => clearInterval(interval);
  }, [index]);

  function CarouselItem({ item, i }: CarouselItemProps) {
    const opacity = scrollX.interpolate({
      inputRange: [(i - 1) * width, i * width, (i + 1) * width],
      outputRange: [0.6, 1, 0.6],
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        style={{
          width: width - 32,
          opacity,
        }}
        className="mx-4 rounded-3xl overflow-hidden"
      >
        <Image
          source={item.source}
          className="w-full h-60"
          resizeMode="cover"
        />

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.65)"]}
          style={{ position: "absolute", inset: 0 }}
        />

        <View className="absolute inset-0 flex-row items-end justify-between p-5">
          <Text className="text-white text-2xl font-title max-w-[70%]">
            {item.title}
          </Text>

          <Pressable onPress={() => router.push(item.route as any)}>
            <View className="bg-white/90 p-3 rounded-full">
              <Ionicons name="arrow-forward" size={20} color="#0B0530" />
            </View>
          </Pressable>
        </View>
      </Animated.View>
    );
  }

  return (
    <Animated.View
      style={{
        opacity: entryOpacity,
        transform: [{ translateY: entryTranslate }],
      }}
      className="mt-4"
    >
      <Animated.FlatList
        ref={flatListRef}
        data={carouselItems}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index: i }) => (
          <CarouselItem item={item} i={i} />
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        onMomentumScrollEnd={(e) =>
          setIndex(Math.round(e.nativeEvent.contentOffset.x / width))
        }
      />

      {/* Indicadores */}
      <View className="flex-row justify-center mt-4">
        {carouselItems.map((_, i) => {
          const inputRange = [
            (i - 1) * width,
            i * width,
            (i + 1) * width,
          ];

          const scaleX = scrollX.interpolate({
            inputRange,
            outputRange: [1, 2.4, 1],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={i}
              style={{
                transform: [{ scaleX }],
                opacity,
                width: 8,
                height: 8,
                borderRadius: 4,
                marginHorizontal: 6,
                backgroundColor: "#FFFFFF",
              }}
            />
          );
        })}
      </View>
    </Animated.View>
  );
}
