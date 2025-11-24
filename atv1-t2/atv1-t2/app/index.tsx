import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { LOCAL_DATA } from "../data/pizza-data";

export default function App() {
  const addToCart = useCallback((item: any) => {
    const defaultSizeLabel = "Padrão";
    Alert.alert(
      "Pedido",
      `${item.name} (${defaultSizeLabel}) adicionado ao pedido!\nPreço: ${item.value}`
    );
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  const renderItem = useCallback(
    ({ item }: { item: any }) => (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.itemPrice}>{`Valor: ${item.value}`}</Text>
        </View>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <Text style={styles.itemDescription}>{item.description}</Text>
        <View style={{ marginTop: 10, alignItems: "flex-end" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => addToCart(item)}
          >
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>
    ),
    [addToCart]
  );
  const openMenu = () => setShowMenu(true);
  const goHome = () => setShowMenu(false);

  if (!showMenu) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text style={styles.headerTitle}>Chopparium</Text>
        <View style={styles.locationRow}>
          <View style={{ marginRight: 8 }}>
            <FontAwesome6 name="location-dot" size={18} color="#facb13" />
          </View>
          <Text style={styles.subtitle}>
            R. Haguemu Matsuzawa, 78 - Vila Cabral, Registro - SP
          </Text>
        </View>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwDVJN4LapUxeTI6Ke-ZiAGxEmWzV17_adiA&s",
          }}
          style={styles.headerImage}
        />
        <TouchableOpacity style={styles.button} onPress={openMenu}>
          <Text style={styles.buttonText}>Abrir Cardápio</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <Text style={styles.headerTitle}>Cardápio</Text>
        <TouchableOpacity style={styles.smallButton} onPress={goHome}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={LOCAL_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 36 }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffffe",
    paddingTop: 56,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0f172a",
    textAlign: "center",
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  subtitle: {
    flexShrink: 1,
    fontSize: 13,
    textAlign: "center",
    color: "#374151",
  },
  headerImage: {
    width: "100%",
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  card: {
    borderWidth: 0,
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  itemTitle: { fontWeight: "600", fontSize: 16 },
  itemImage: { width: "100%", height: 140, borderRadius: 8, marginTop: 8 },
  itemDescription: { marginTop: 8, marginBottom: 8, color: "#6b7280" },
  itemPrice: { fontWeight: "600", color: "#111827" },
  button: {
    backgroundColor: "#facb13",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: { color: "#0f172a", fontWeight: "700" },
  smallButton: {
    backgroundColor: "#e5e7eb",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  footer: {
    marginTop: 20,
    paddingVertical: 24,
    alignItems: "center",
  },
  footerText: {
    color: "#6b7280",
    fontSize: 12,
  },
});
