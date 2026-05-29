import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  description: string;
  date: string;
  color: string;
  width: string | number;
};

export default function NoteCard({
  title,
  description,
  date,
  color,
  width,
}: Props) {
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/note-details",
          params: {
            title,
            description,
            date,
            color,
          },
        })
      }
      style={[
        styles.card,
        {
          backgroundColor: color,
          width,
        },
      ]}
    >
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="note-text-outline"
          size={28}
          color="#111"
        />
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text numberOfLines={4} style={styles.description}>
        {description}
      </Text>

      <View style={styles.dateContainer}>
        <Ionicons name="calendar-outline" size={14} color="#4B5563" />

        <Text style={styles.date}>{date}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 28,
    padding: 18,
    minHeight: 230,
    marginBottom: 16,
  },

  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.4)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    lineHeight: 22,
    color: "#374151",
    flex: 1,
  },

  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  date: {
    marginLeft: 6,
    color: "#4B5563",
    fontSize: 13,
  },
});
