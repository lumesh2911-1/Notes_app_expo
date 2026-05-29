import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  isDark: boolean;
  onSave: (note: {
    id: string;
    title: string;
    description: string;
    date: string;
    color: string;
  }) => void;
};

export default function AddNoteModal({
  visible,
  onClose,
  isDark,
  onSave,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [date, setDate] = useState(new Date());

  const handleSave = () => {
    if (!title.trim()) return;

    onSave({
      id: Date.now().toString(),
      title,
      description,
      date: date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      color: "#CFEAF2",
    });

    setTitle("");
    setDescription("");
    setDate(new Date());

    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: isDark ? "#1A1A1A" : "#FFF",
            },
          ]}
        >
          <Text
            style={[
              styles.heading,
              {
                color: isDark ? "#FFF" : "#111",
              },
            ]}
          >
            Add New Note
          </Text>

          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            placeholderTextColor="#9CA3AF"
            style={[
              styles.input,
              {
                color: isDark ? "#FFF" : "#111",
                backgroundColor: isDark ? "#111" : "#F3F4F6",
              },
            ]}
          />

          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            multiline
            placeholderTextColor="#9CA3AF"
            style={[
              styles.description,
              {
                color: isDark ? "#FFF" : "#111",
                backgroundColor: isDark ? "#111" : "#F3F4F6",
              },
            ]}
          />

          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(_, selectedDate) => {
              if (selectedDate) {
                setDate(selectedDate);
              }
            }}
          />

          <View style={styles.actions}>
            <Pressable style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>

            <Pressable style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  container: {
    padding: 24,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

  input: {
    height: 55,
    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  description: {
    height: 120,
    borderRadius: 16,
    padding: 16,
    textAlignVertical: "top",
    marginBottom: 20,
  },

  actions: {
    flexDirection: "row",
    marginTop: 20,
  },

  cancelButton: {
    flex: 1,
    height: 50,
    backgroundColor: "#EF4444",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  saveButton: {
    flex: 1,
    height: 50,
    backgroundColor: "#6366F1",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
});
