import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FormInput from "@/src/components/formInput";
import { useState } from "react";
import { router } from "expo-router";
import { MotiView } from "moti";
import { MotiPressable } from "moti/interactions";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    if (loading) return;

    setError("");
    setLoading(true);

    setTimeout(() => {
      if (!email || !password) {
        setError("Preencha todos os campos.");
        setLoading(false);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Digite um email válido.");
        setLoading(false);
        return;
      }

      if (password.length < 6) {
        setError("A senha deve ter no mínimo 6 caracteres.");
        setLoading(false);
        return;
      }

      router.replace("/home/home");
    }, 900);
  }

  return (
    <View className="flex-1">
      <Image
        source={require("../../../assets/images/LoginBackground.jpg")}
        className="absolute w-full h-full"
        resizeMode="cover"
      />

      <View className="absolute w-full h-full bg-background-darkblue/70" />

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
        className="items-center mt-32"
      >
        <Ionicons name="moon-outline" size={48} color="#38bdf8" />

        <Text className="font-title text-text-light text-3xl mt-3">
          Bem-vindo de volta
        </Text>

        <Text className="font-body text-text-purple mt-1 text-center px-6">
          Insira seus dados para acessar sua conta
        </Text>
      </MotiView>

      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 350 }}
        className="px-6 mt-12"
      >
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

        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 550 }}
          className="mt-6"
        >
          <MotiPressable
            onPress={handleLogin}
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
                    Entrar
                  </Text>
                  <Ionicons
                    name="paper-plane-outline"
                    size={24}
                    color="#fff"
                  />
                </>
              )}
            </View>
          </MotiPressable>
        </MotiView>

        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 700 }}
        >
          <Pressable onPress={() => router.push("/auth/cadastro")}>
            <Text className="mt-4 text-text-light text-center text-xl font-body">
              Não tem uma conta?{" "}
              <Text className="text-blue-600 font-bodyBold">
                Cadastre-se
              </Text>
            </Text>
          </Pressable>
        </MotiView>
      </MotiView>
    </View>
  );
}
