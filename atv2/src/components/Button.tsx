import React, { useState } from "react";
import {
  Animated,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Variant = "primary" | "secondary" | "info";

type Props = PressableProps & {
  title: string;
  variant?: Variant;
};

export default function Button({ title, variant = "primary", ...rest }: Props) {
  const [pressAnim] = useState(new Animated.Value(0));

  const handlePressIn = () => {
    Animated.timing(pressAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(pressAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const translateY = pressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 4],
  });

  const shadowOpacity = pressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const buttonShadowVariantStyle =
    variant === "secondary"
      ? styles.secondaryButtonShadow
      : variant === "info"
      ? styles.infoButtonShadow
      : styles.primaryButtonShadow;
  const buttonVariantStyle =
    variant === "secondary"
      ? styles.secondaryButton
      : variant === "info"
      ? styles.infoButton
      : styles.primaryButton;
  const buttonTextVariantStyle =
    variant === "secondary"
      ? styles.secondaryButtonText
      : variant === "info"
      ? styles.infoButtonText
      : styles.primaryButtonText;

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} {...rest}>
      <View style={styles.buttonWrapper}>
        <Animated.View
          style={[
            styles.buttonShadow,
            buttonShadowVariantStyle,
            {
              opacity: shadowOpacity,
            },
          ]}
        />
        <Animated.View
          style={[
            styles.button,
            buttonVariantStyle,
            {
              transform: [{ translateY }],
            },
          ]}
        >
          <Text style={[styles.buttonText, buttonTextVariantStyle]}>
            {title}
          </Text>
        </Animated.View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    position: "relative",
    width: "100%",
    height: 56,
  },
  buttonShadow: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 56,
    borderRadius: 16,
  },
  primaryButtonShadow: {
    backgroundColor: "#926D00",
  },
  secondaryButtonShadow: {
    backgroundColor: "#a3a3a3",
  },
  infoButtonShadow: {
    backgroundColor: "#1565C0",
  },
  button: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 52,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderBottomWidth: 0,
  },
  primaryButton: {
    backgroundColor: "#F7c325",
    borderColor: "#926D00",
  },
  secondaryButton: {
    backgroundColor: "#f4f4f4",
    borderColor: "#bdbdbd",
  },
  infoButton: {
    backgroundColor: "#2196F3",
    borderColor: "#1565C0",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  primaryButtonText: {
    color: "#5C4400",
  },
  secondaryButtonText: {
    color: "#4a4a4a",
  },
  infoButtonText: {
    color: "#FFFFFF",
  },
});
