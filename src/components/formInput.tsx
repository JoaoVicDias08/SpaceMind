import { View, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  label: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  placeholder?: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
};

export default function FormInput({
  label,
  icon,
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText,
}: Props) {
  return (
    <View className="mb-4">
      {/* Label */}
      <Text className="text-text-light mb-1 font-body">
        {label}
      </Text>

      {/* Input com ícone */}
      <View className="flex-row items-center bg-black/40 border border-white/10 rounded-lg px-3">
        <Ionicons
          name={icon}
          size={20}
          color="#9ca3af"
          className="mr-2"
        />

        <TextInput
          className="flex-1 py-3 text-white"
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}
