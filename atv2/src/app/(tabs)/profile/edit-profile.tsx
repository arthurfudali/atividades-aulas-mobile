import Button from "@/components/Button";
import { ProfileStorage } from "@/services/profileStorage";
import { UserProfile } from "@/types/profile";
import * as DocumentPicker from "expo-document-picker";
import { router, useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function EditProfileModal() {
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [idade, setIdade] = useState("");
  const [instituicao, setInstituicao] = useState("");
  const [curso, setCurso] = useState("");
  const [github, setGithub] = useState("");
  const [fileUri, setFileUri] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      async function loadProfile() {
        const savedProfile = await ProfileStorage.load();

        if (savedProfile) {
          setName(savedProfile.name || "");
          setSobrenome(savedProfile.sobrenome || "");
          setIdade(savedProfile.idade || "");
          setInstituicao(savedProfile.instituicao || "");
          setCurso(savedProfile.curso || "");
          setGithub(savedProfile.github || "");
          setFileUri(savedProfile.fileUri || null);
        }
      }

      loadProfile();
    }, [])
  );

  const handlePickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "image/*",
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const uri = result.assets[0].uri;
        setFileUri(uri);
      } else {
        console.warn("Nenhuma imagem selecionada");
      }
    } catch (error) {
      console.error("Erro ao selecionar imagem:", error);
      Alert.alert("Erro", "Não foi possível selecionar a imagem.");
    }
  };

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert("Validação", "O nome é obrigatório.");
      return;
    }

    if (!sobrenome.trim()) {
      Alert.alert("Validação", "O sobrenome é obrigatório.");
      return;
    }

    const updatedProfile: UserProfile = {
      name: name.trim(),
      sobrenome: sobrenome.trim(),
      idade: idade.trim(),
      instituicao: instituicao.trim(),
      curso: curso.trim(),
      github: github.trim(),
      fileUri: fileUri || undefined,
    };

    try {
      await ProfileStorage.save(updatedProfile);
      router.back();
    } catch (error) {
      console.error("Erro ao salvar perfil:", error);
      Alert.alert("Erro", "Não foi possível salvar o perfil.");
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>Editar Perfil</Text>

        <View style={styles.previewContainer}>
          <Image
            source={{
              uri: fileUri
                ? fileUri
                : github
                ? github.trim().startsWith("http")
                  ? github.trim()
                  : `https://github.com/${github.trim()}.png`
                : "https://github.com/github.png",
            }}
            style={styles.preview}
          />
        </View>

        <View style={styles.profileInfo}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Nome:</Text>
            <TextInput
              style={styles.textInput}
              value={name}
              onChangeText={setName}
              placeholder="Digite seu nome"
              placeholderTextColor="#999999"
            />
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Sobrenome:</Text>
            <TextInput
              style={styles.textInput}
              value={sobrenome}
              onChangeText={setSobrenome}
              placeholder="Digite seu sobrenome"
              placeholderTextColor="#999999"
            />
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Idade:</Text>
            <TextInput
              style={styles.textInput}
              value={idade}
              onChangeText={setIdade}
              placeholder="Digite sua idade"
              placeholderTextColor="#999999"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Instituição:</Text>
            <TextInput
              style={styles.textInput}
              value={instituicao}
              onChangeText={setInstituicao}
              placeholder="Digite sua instituição"
              placeholderTextColor="#999999"
            />
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Curso:</Text>
            <TextInput
              style={styles.textInput}
              value={curso}
              onChangeText={setCurso}
              placeholder="Digite seu curso"
              placeholderTextColor="#999999"
            />
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>GitHub:</Text>
            <TextInput
              style={styles.textInput}
              value={github}
              onChangeText={setGithub}
              placeholder="Digite seu usuário do GitHub"
              placeholderTextColor="#999999"
              autoCapitalize="none"
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="Selecionar imagem"
          variant="info"
          onPress={handlePickDocument}
        />
        <Button title="Salvar" onPress={handleSave} />
        <Button title="Cancelar" variant="secondary" onPress={handleCancel} />
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
  previewContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  preview: {
    width: 120,
    height: 120,
    borderRadius: 60,
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
  textInput: {
    fontSize: 16,
    color: "#333333",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  footer: {
    width: "100%",
    gap: 12,
    padding: 20,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
});
