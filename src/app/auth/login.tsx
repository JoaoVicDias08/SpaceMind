import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image, Pressable } from "react-native";
import FormInput from "@/src/components/formInput";
import { useState } from "react";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    setError(""); // limpa erro

    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Digite um email válido.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    router.replace("/home/home");
  }

  return (
    <View className="flex-1">
      <Image
        source={require("../../../assets/images/LoginBackground.jpg")}
        resizeMode="cover"
        className="absolute w-full h-full"
      />

      <View className="absolute w-full h-full bg-background-darkblue/70"></View>

      <View className="items-center mt-32 flex-col">
        <Ionicons name="moon-outline" size={48} color="#38bdf8" />

        <Text className="font-title text-text-light text-3xl text-center mt-3">
          Bem vindo de volta, explorador.
        </Text>

        <Text className="font-body text-text-purple mt-1 text-center px-6">
          Insira seus dados abaixo para acessar sua conta.
        </Text>
      </View>

      <View className="px-6 mt-12">
        <FormInput
          label="Email"
          icon="mail"
          placeholder="seu@email.com"
          value={email}
          onChangeText={setEmail}
        />

        <FormInput
          label="Senha"
          icon="lock-closed"
          placeholder="••••••••"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />

        {error !== "" && (
          <Text className="text-red-500 text-center mt-2">{error}</Text>
        )}

        <Pressable
          onPress={handleLogin}
          className="bg-blue-600 py-4 rounded-xl mt-6 flex-row items-center justify-center gap-2"
        >
          <Text className="text-white text-center text-lg font-body">Entrar</Text>
          <Ionicons name="paper-plane-outline" size={24} color="#fff" />
        </Pressable>

        <Pressable onPress={() => router.push("/auth/cadastro")}>
          <Text className="mt-4 text-text-light text-center text-xl font-body">
            Não tem uma conta?{" "}
            <Text className="text-blue-600 font-bodyBold">Cadastre-se</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
