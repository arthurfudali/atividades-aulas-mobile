import { Image } from "expo-image";
import {
  Button,
  ScrollView,
  Text,
  View,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { WebView } from "react-native-webview";
import { useState } from "react";

export default function Index() {
  const [showGithub, setShowGithub] = useState(false);
  const [showProjeto1, setShowProjeto1] = useState(false);
  const [showProjeto2, setShowProjeto2] = useState(false);

  return (
    <ScrollView contentContainerStyle={{ padding: 32, gap: 16 }}>
      <View style={{ alignItems: "center", paddingTop: 10 }}>
        <Image
          source="https://github.com/arthurfudali.png"
          style={{ width: 100, height: 100, borderRadius: 99 }}
        />

        <Text style={{ fontSize: 32, textAlign: "center" }}>
          Hello there! I'm Arthur Fudali!
        </Text>

        <View style={{ padding: 30 }}>
          <Button
            title="Abrir GitHub"
            onPress={() => setShowGithub(true)}
            color="#1d1d1d"
          />
        </View>

        {/*  <Card title="Primeiro Card" body="Corpo do Card" href={"/buttons"} /> */}
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#6DB33F",
          padding: 12,
          borderRadius: 8,
          marginTop: 12,
        }}
        onPress={() => setShowProjeto1(true)}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Projeto Spring Boot
        </Text>
      </TouchableOpacity>

      <Pressable
        onPress={() => setShowProjeto2(true)}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#555" : "#0e76a8",
          padding: 12,
          borderRadius: 8,
          marginTop: 12,
        })}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Linkedin
        </Text>
      </Pressable>

      {/* Modal da WebView */}
      <Modal visible={showGithub} animationType="slide">
        <View style={{ flex: 1 }}>
          <WebView
            source={{ uri: "https://github.com/arthurfudali" }}
            style={{ flex: 1 }}
          />
          <Button title="Fechar" onPress={() => setShowGithub(false)} />
        </View>
      </Modal>
      <Modal visible={showProjeto1} animationType="slide">
        <View style={{ flex: 1 }}>
          <WebView
            source={{
              uri: "https://github.com/arthurfudali/workshop-springboot-jpa",
            }}
            style={{ flex: 1 }}
          />
          <Button title="Fechar" onPress={() => setShowProjeto1(false)} />
        </View>
      </Modal>
      <Modal visible={showProjeto2} animationType="slide">
        <View style={{ flex: 1 }}>
          <WebView
            source={{ uri: "https://www.linkedin.com/in/arthurfudali/" }}
            style={{ flex: 1 }}
          />
          <Button title="Fechar" onPress={() => setShowProjeto2(false)} />
        </View>
      </Modal>
    </ScrollView>
  );
}
