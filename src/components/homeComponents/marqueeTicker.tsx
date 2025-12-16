import { useState, useRef } from "react";
import { View, LayoutChangeEvent } from "react-native";
import TextTicker from "react-native-text-ticker";
import { MotiView } from "moti";

interface MarqueeTickerProps {
  text: string;
}

export default function MarqueeTicker({ text }: MarqueeTickerProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [tickerKey, setTickerKey] = useState(0);
  const [started, setStarted] = useState(false); 

  const handleLayout = (e: LayoutChangeEvent) => {
    setContainerWidth(e.nativeEvent.layout.width);
    setTickerKey(prev => prev + 1); 
  };

  const handleScrollStart = () => {
    if (!started) {
      setStarted(true);
      setTickerKey(prev => prev + 1);
    }
  };

  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 500 }}
    >
      <View
        onLayout={handleLayout}
        style={{
          marginLeft: 16,
          marginTop: 24,
          backgroundColor: "#4500BD",
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 24,
          overflow: "hidden",
        }}
      >
        {containerWidth > 0 && (
          <TextTicker
            key={tickerKey}           
            style={{ width: containerWidth }}
            duration={8000}
            loop
            bounce={false}
            scroll={started}         
            repeatSpacer={50}
            marqueeDelay={0}
            useNativeDriver
            onScrollStart={handleScrollStart} 
            className="font-title text-text-light text-3xl"
          >
            {text}
            {!started && " >"}       
          </TextTicker>
        )}
      </View>
    </MotiView>
  );
}
