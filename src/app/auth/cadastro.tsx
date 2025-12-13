import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import FormInput from "@/src/components/formInput";
import { useState } from "react";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit() {
    setError("");

    if (!name || !email || !password) {
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
    <View className="flex-1 bg-background-darkblue">
      {/* Overlay gradiente */}
      <LinearGradient
        colors={[
          "rgba(59,130,246,0.35)",
          "rgba(99,102,241,0.25)",
          "rgba(0,0,0,0.9)",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="absolute w-full h-full"
      />

      <View className="flex-1 px-6 pt-16">
        {/* Voltar */}
        <Ionicons
          name="arrow-back"
          size={28}
          color="#fff"
          onPress={() => router.replace("/")}
        />

        <View className="items-center mt-12">
          <View className="w-24 h-24 rounded-2xl bg-black/40 items-center justify-center">
            <Ionicons name="planet" size={48} color="#38bdf8" />
          </View>
        </View>

        <View className="mt-2">
          <Text className="text-white text-3xl font-title text-center">
            Bem-vindo a Bordo
            
          </Text>

          <Text className="text-text-light text-center mt-2 mb-8">
            Crie sua conta para começar a jornada pelo cosmos.
          </Text>
        </View>

        {/* Inputs */}
        <FormInput
          label="Nome"
          icon="person"
          placeholder="Seu nome"
          value={name}
          onChangeText={setName}
        />

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
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {error !== "" && (
          <Text className="text-red-500 text-center mt-2">{error}</Text>
        )}

        <Pressable
          onPress={handleSubmit}
          className="bg-blue-600 py-4 rounded-xl mt-4"
        >
          <View className="flex-row items-center justify-center gap-2">
            <Text className="text-white text-center text-lg font-body">
              Criar conta
            </Text>
            <Ionicons name="rocket-outline" size={24} color="#fff" />
          </View>
        </Pressable>

        <Pressable onPress={() => router.push("/auth/login")}>
          <Text className="mt-4 font-body text-xl text-text-light mx-auto">
            Já é um explorador?{" "}
            <Text className="text-blue-600 font-bodyBold">Faça login</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
