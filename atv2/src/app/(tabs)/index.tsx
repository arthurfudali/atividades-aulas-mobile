import { ProfileStorage } from "@/services/profileStorage";
import { UserProfile } from "@/types/profile";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  Button,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { WebView } from "react-native-webview";

export default function PortfolioScreen() {
  const [profile, setProfile] = useState<UserProfile>({
    name: "Usuário",
    sobrenome: "",
    idade: "",
    instituicao: "",
    curso: "",
    github: "",
    fileUri: "",
  });

  const [showGithub, setShowGithub] = useState(false);
  const [showProjeto1, setShowProjeto1] = useState(false);
  const [showProjeto2, setShowProjeto2] = useState(false);

  useFocusEffect(
    useCallback(() => {
      let mounted = true;
      async function load() {
        const saved = await ProfileStorage.load();
        if (mounted && saved) setProfile(saved);
      }
      load();
      return () => {
        mounted = false;
      };
    }, [])
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: profile.fileUri
              ? profile.fileUri
              : profile.github
              ? profile.github.trim().startsWith("http")
                ? profile.github.trim()
                : `https://github.com/${profile.github.trim()}.png`
              : "https://github.com/github.png",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>
          {profile.name + " " + profile.sobrenome || "Usuário"}
        </Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Idade</Text>
          <Text style={styles.infoValue}>
            {profile.idade || "Não informada"}
          </Text>

          <Text style={styles.infoLabel}>Instituição</Text>
          <Text style={styles.infoValue}>
            {profile.instituicao || "Não informada"}
          </Text>

          <Text style={styles.infoLabel}>Curso</Text>
          <Text style={styles.infoValue}>
            {profile.curso || "Não informado"}
          </Text>
        </View>

        <View style={{ width: "100%", marginTop: 12 }}>
          <Button
            title="Abrir GitHub"
            color="#1d1d1d"
            onPress={() => setShowGithub(true)}
          />
        </View>
      </View>

      <Modal visible={showGithub} animationType="slide">
        <View style={{ flex: 1 }}>
          <WebView
            source={{
              uri: profile.github
                ? profile.github.trim().startsWith("http")
                  ? profile.github.trim()
                  : `https://github.com/${profile.github.trim()}`
                : "https://github.com",
            }}
            style={{ flex: 1 }}
          />
          <Button title="Fechar" onPress={() => setShowGithub(false)} />
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 16,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: { alignItems: "center", paddingTop: 8, width: "100%" },
  avatar: { width: 100, height: 100, borderRadius: 99 },
  name: { fontSize: 28, textAlign: "center", marginTop: 12 },
  greenButton: {
    backgroundColor: "#6DB33F",
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    width: "100%",
  },
  blueButton: { padding: 12, borderRadius: 8, marginTop: 12, width: "100%" },
  whiteText: { color: "#fff", textAlign: "center", fontWeight: "600" },
  infoContainer: {
    width: "100%",
    marginTop: 12,
    gap: 8,
    paddingHorizontal: 10,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666666",
    marginTop: 8,
  },
  infoValue: {
    fontSize: 16,
    color: "#333333",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
});
