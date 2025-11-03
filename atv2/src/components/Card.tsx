import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type propsCard = {
  title?: string;
  body?: string;
  children?: ReactNode;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  borderColor?: string;
};

export default function Card({
  title,
  body,
  children,
  leftComponent,
  rightComponent,
  borderColor = "#bdbdbd",
}: propsCard) {
  return (
    <View style={[styles.container, { borderColor }]}>
      <View style={styles.content}>
        {leftComponent}
        <View style={styles.textContent}>
          {title && <Text style={styles.title}>{title}</Text>}
          {body && <Text style={styles.body}>{body}</Text>}
          {children}
        </View>
        {rightComponent}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "#bdbdbd",
  },
  content: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  body: {
    flexShrink: 1,
    fontSize: 18,
    color: "#4a4a4a",
  },
});
