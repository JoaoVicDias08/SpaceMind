import { View, TextInput, Pressable, Text, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";
import { MotiView } from "moti";

import { GalaxyCard, galaxiesCards } from "@/src/data/galaxiesCards";

type HeaderGalaxiesProps = {
  onSearch: (galaxyName: string) => void;
};

export default function HeaderGalaxies({ onSearch }: HeaderGalaxiesProps) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<GalaxyCard[]>([]);

  const handleChange = (text: string) => {
    setQuery(text);

    if (text.length === 0) {
      setSuggestions([]);
      return;
    }

    const filtered = galaxiesCards.filter((g) =>
      g.nome.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleSelect = (galaxyName: string) => {
    setQuery(galaxyName);
    setSuggestions([]);
    onSearch(galaxyName);
  };

  const handleClear = () => {
    setQuery("");
    setSuggestions([]);
  };

  return (
    <MotiView
      from={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 600 }}
      className="bg-background-darkblue mt-12 pb-1 p-4"
    >
      <View className="flex-row items-center justify-between">
        <TextInput
          placeholder="Pesquisar galáxia..."
          placeholderTextColor="#888"
          value={query}
          onChangeText={handleChange}
          className="flex-1 bg-background-blue rounded-xl px-4 py-2 mr-2 text-white"
        />
        {query.length > 0 && (
          <Pressable
            className="bg-red-600 px-3 py-2 rounded-xl mr-2"
            onPress={handleClear}
          >
            <Text className="text-white font-bodyBold">Limpar</Text>
          </Pressable>
        )}
        <Pressable
          className="bg-primary px-4 py-2 rounded-xl"
          onPress={() => onSearch(query)}
        >
          <Text className="text-white font-bodyBold">Buscar</Text>
        </Pressable>
      </View>

      {suggestions.length > 0 && (
        <View className="bg-background-blue mt-2 rounded-xl overflow-hidden shadow-lg">
          <FlatList
            data={suggestions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelect(item.nome)}
                className="px-4 py-2 border-b border-gray-700"
              >
                <Text className="text-white">{item.nome}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </MotiView>
  );
}
