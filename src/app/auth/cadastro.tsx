import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import FormInput from "@/src/components/formInput";
import { useState } from 'react'

export default function Cadastro() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");

  return (
    <View className="flex-1 bg-background-darkblue">

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

        <Ionicons name="arrow-back" size={28} color="#fff"  onPress={() => router.replace("/")}/>

        <View className="items-center mt-12">
          <View className="w-24 h-24 rounded-2xl bg-black/40 items-center justify-center">
            <Ionicons name="planet" size={48} color="#38bdf8"/>
          </View>
        </View>

        <View className="mt-2">
          <Text className="text-white text-3xl font-title text-center">
            Bem-vindo a Bordo
          </Text>

          <Text className="text-text-light text-center mt-2 mb-8">
            Crie sua conta para começar a jornada
          </Text>
        </View>

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

      <Pressable className="bg-blue-600 py-4 rounded-xl mt-4">
        <Text className="text-white text-center text-lg font-body">
          Criar conta
        </Text>
      </Pressable>

    </View>
      </View>
  );
}
