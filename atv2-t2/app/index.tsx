import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const renderItem = ({ item }: { item: Product }) => (
  <View style={styles.card}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
    <View style={styles.content}>
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {item.description}
      </Text>
      <View style={styles.rating}>
        <Text style={styles.stars}>⭐ {item.rating.rate.toFixed(1)}</Text>
        <Text style={styles.ratingCount}>({item.rating.count})</Text>
      </View>
    </View>
  </View>
);

export default function Index() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("Falha ao buscar produtos");
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
      console.error("Erro ao buscar produtos:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContainer]}>
        <ActivityIndicator size="large" color="#2ecc71" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centerContainer]}>
        <Text style={styles.errorText}>Erro: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  listContent: {
    padding: 12,
  },
  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 5,
  },
  imageContainer: {
    height: 180,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  content: {
    padding: 14,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "800",
    color: "#2ecc71",
    marginBottom: 8,
  },
  category: {
    fontSize: 11,
    fontWeight: "600",
    color: "#fff",
    backgroundColor: "#7f8c8d",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  description: {
    fontSize: 12,
    color: "#555",
    marginBottom: 10,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ecf0f1",
    paddingTop: 10,
  },
  stars: {
    fontSize: 13,
    color: "#f39c12",
    fontWeight: "600",
    marginRight: 6,
  },
  ratingCount: {
    fontSize: 12,
    color: "#7f8c8d",
  },
  errorText: {
    fontSize: 16,
    color: "#e74c3c",
    textAlign: "center",
  },
});
