import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  isDark: boolean;
  onAddPress: () => void;
};

export default function SearchBar({
  value,
  onChangeText,
  isDark,
  onAddPress,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDark ? "#111" : "#FFF",
          },
        ]}
      >
        <Ionicons name="search" size={20} color="#9CA3AF" />

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Search notes..."
          placeholderTextColor="#9CA3AF"
          style={[
            styles.input,
            {
              color: isDark ? "#FFF" : "#111",
            },
          ]}
        />
      </View>

      <Pressable
        onAddPress={() => setModalVisible(true)}
        style={[
          styles.addButton,
          {
            backgroundColor: isDark ? "#111" : "#FFF",
          },
        ]}
      >
        <Ionicons name="add" size={28} color={isDark ? "#FFF" : "#111"} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 24,
  },

  container: {
    flex: 1,
    height: 55,
    borderRadius: 18,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },

  addButton: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: "#0274DF",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
});
