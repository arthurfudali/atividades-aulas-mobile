import Button from "@/components/Button";
import { ProfileStorage } from "@/services/profileStorage";
import { UserProfile } from "@/types/profile";
import { router, useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  const [profile, setProfile] = useState<UserProfile>({
    name: "Usuário",
    sobrenome: "",
    idade: "",
    instituicao: "",
    curso: "",
    github: "",
    fileUri: "",
  });

  useFocusEffect(
    useCallback(() => {
      async function loadProfile() {
        const savedProfile = await ProfileStorage.load();

        if (savedProfile) {
          setProfile(savedProfile);
        }
      }

      loadProfile();
    }, [])
  );

  const handleEditProfile = () => {
    router.push("/profile/edit-profile");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>Meu Perfil</Text>

        {/* Foto padrão */}
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
          style={styles.profileImage}
        />

        <View style={styles.profileInfo}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Nome:</Text>
            <Text style={styles.infoValue}>
              {profile.name || "Não informado"}
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Sobrenome:</Text>
            <Text style={styles.infoValue}>
              {profile.sobrenome || "Não informado"}
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Idade:</Text>
            <Text style={styles.infoValue}>
              {profile.idade || "Não informada"}
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Instituição:</Text>
            <Text style={styles.infoValue}>
              {profile.instituicao || "Não informada"}
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Curso:</Text>
            <Text style={styles.infoValue}>
              {profile.curso || "Não informado"}
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>GitHub:</Text>
            <Text style={styles.infoValue}>
              {profile.github || "Não informado"}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button title="EDITAR PERFIL" onPress={handleEditProfile} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  footer: {
    width: "100%",
    gap: 12,
    padding: 20,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 24,
  },
  profileInfo: {
    width: "100%",
  },
  infoItem: {
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666666",
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
    color: "#333333",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
});
