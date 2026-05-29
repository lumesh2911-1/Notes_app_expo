import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export default function Header({ isDark, onToggleTheme }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={[
            styles.title,
            {
              color: isDark ? "#FFF" : "#111",
            },
          ]}
        >
          My Notes
        </Text>

        <Text
          style={[
            styles.subtitle,
            {
              color: isDark ? "#A1A1AA" : "#6B7280",
            },
          ]}
        >
          All your important notes in one place
        </Text>
      </View>

      <Pressable
        style={[
          styles.themeButton,
          {
            backgroundColor: isDark ? "#1F1F1F" : "#FFFFFF",
          },
        ]}
        onPress={onToggleTheme}
      >
        <Ionicons
          name={isDark ? "sunny" : "moon"}
          size={24}
          color={isDark ? "#fff" : "#111"}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 42,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 4,
    fontSize: 15,
  },

  themeButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});
