import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import FormInput from "@/src/components/formInput";
import { useState } from "react";
import { MotiView } from "moti";
import { MotiPressable } from "moti/interactions";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    if (loading) return;

    setError("");
    setLoading(true);

    setTimeout(() => {
      if (!name || !email || !password) {
        setError("Preencha todos os campos.");
        setLoading(false);
        return;
      }

      router.replace("/home/home");
    }, 900);
  }

  return (
    <View className="flex-1 bg-background-darkblue">
      <LinearGradient
        colors={[
          "rgba(59,130,246,0.35)",
          "rgba(99,102,241,0.25)",
          "rgba(0,0,0,0.9)",
        ]}
        className="absolute w-full h-full"
      />

      <View className="flex-1 px-6 pt-16">
      <MotiView
        from={{ opacity: 0, translateX: -20 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 100 }}
        className="absolute top-16 left-6 z-10"
      >
        <Pressable onPress={() => router.replace("/")}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </Pressable>
      </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 150 }}
          className="items-center mt-12"
        >
          <View className="w-24 h-24 rounded-2xl bg-black/40 items-center justify-center">
            <Ionicons name="planet-outline" size={48} color="#38bdf8" />
          </View>
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 300 }}
          className="mt-4"
        >
          <Text className="text-white text-3xl font-title text-center">
            Bem-vindo a Bordo
          </Text>
          <Text className="text-text-light text-center mt-2 mb-8">
            Crie sua conta para começar a jornada pelo cosmos.
          </Text>
        </MotiView>

        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 450 }}
        >
          <FormInput label="Nome" icon="person" value={name} onChangeText={setName} placeholder="Seu nome"/>
          <FormInput label="Email" icon="mail" value={email} onChangeText={setEmail} placeholder="seu@email.com"/>
          <FormInput
            label="Senha"
            icon="lock-closed"
            placeholder="••••••••"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </MotiView>

        {error !== "" && (
          <Text className="text-red-500 text-center mt-2">{error}</Text>
        )}

        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 650 }}
          className="mt-4"
        >
          <MotiPressable
            onPress={handleSubmit}
            animate={({ pressed }) => ({
              scale: pressed ? 0.95 : 1,
            })}
          >
            <View
              className={`bg-blue-600 py-4 rounded-xl flex-row items-center justify-center gap-2 ${
                loading && "opacity-70"
              }`}
            >
              {loading ? (
                <MotiView
                  from={{ rotate: "0deg" }}
                  animate={{ rotate: "360deg" }}
                  transition={{ loop: true, duration: 800 }}
                >
                  <Ionicons name="sync" size={22} color="#fff" />
                </MotiView>
              ) : (
                <>
                  <Text className="text-white text-lg font-body">
                    Criar conta
                  </Text>
                  <Ionicons name="rocket-outline" size={24} color="#fff" />
                </>
              )}
            </View>
          </MotiPressable>
        </MotiView>

        <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 800 }}>
          <Pressable onPress={() => router.push("/auth/login")}>
            <Text className="mt-4 text-center text-text-light font-body">
              Já é um explorador?{" "}
              <Text className="text-blue-600 font-bodyBold pb-4">
                Faça login
              </Text>
            </Text>
          </Pressable>
        </MotiView>
      </View>
    </View>
  );
}
