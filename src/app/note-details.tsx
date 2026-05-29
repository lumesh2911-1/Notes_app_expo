import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NoteDetails() {
  const theme = useColorScheme();

  const isDark = theme === "dark";

  const { title, description, color, date } = useLocalSearchParams();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: color as string,
        },
      ]}
    >
      <View style={styles.header}>
        <Pressable style={styles.iconButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="#111" />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>{description}</Text>

        <Text style={styles.paragraph}>{date}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 40,
  },

  iconButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 44,
    fontWeight: "700",
    lineHeight: 64,
    color: "#111",
    marginBottom: 10,
  },

  description: {
    fontSize: 20,
    lineHeight: 34,
    color: "#222",
    marginBottom: 20,
  },

  paragraph: {
    fontSize: 20,
    lineHeight: 34,
    color: "#222",
    marginBottom: 30,
  },

  list: {
    fontSize: 22,
    lineHeight: 42,
    color: "#111",
    fontWeight: "600",
  },
});
