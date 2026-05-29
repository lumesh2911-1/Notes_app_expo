import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Props = {
  visible: boolean;
  isDark: boolean;
  onClose: () => void;
  onSave: (note: { title: string; description: string; date: string }) => void;
};

export default function AddNoteModal({
  visible,
  isDark,
  onClose,
  onSave,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const formatDate = (selectedDate: Date) => {
    return selectedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleSave = () => {
    if (!title.trim()) return;

    onSave({
      title,
      description,
      date: formatDate(date),
    });

    setTitle("");
    setDescription("");
    setDate(new Date());
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setDate(new Date());
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View
          style={[
            styles.modal,
            {
              backgroundColor: isDark ? "#111827" : "#FFFFFF",
            },
          ]}
        >
          <Text
            style={[
              styles.heading,
              {
                color: isDark ? "#FFF" : "#111827",
              },
            ]}
          >
            Add New Note
          </Text>

          <TextInput
            placeholder="Title"
            placeholderTextColor="#9CA3AF"
            value={title}
            onChangeText={setTitle}
            style={[
              styles.input,
              {
                backgroundColor: isDark ? "#1F2937" : "#F3F4F6",
                color: isDark ? "#FFF" : "#111827",
              },
            ]}
          />

          <TextInput
            placeholder="Description"
            placeholderTextColor="#9CA3AF"
            value={description}
            onChangeText={setDescription}
            multiline
            style={[
              styles.input,
              styles.descriptionInput,
              {
                backgroundColor: isDark ? "#1F2937" : "#F3F4F6",
                color: isDark ? "#FFF" : "#111827",
              },
            ]}
          />

          <Pressable
            onPress={() => setShowDatePicker(true)}
            style={[
              styles.dateButton,
              {
                backgroundColor: isDark ? "#1F2937" : "#F3F4F6",
              },
            ]}
          >
            <Text
              style={{
                color: isDark ? "#FFF" : "#111827",
              }}
            >
              {formatDate(date)}
            </Text>
          </Pressable>

          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);

                if (selectedDate) {
                  setDate(selectedDate);
                }
              }}
            />
          )}

          <View style={styles.buttonRow}>
            <Pressable
              style={[styles.button, styles.cancelButton]}
              onPress={handleCancel}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.saveButton]}
              onPress={handleSave}
            >
              <Text style={styles.saveText}>Save</Text>
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
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  modal: {
    borderRadius: 24,
    padding: 20,
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },

  input: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 15,
  },

  descriptionInput: {
    minHeight: 120,
    textAlignVertical: "top",
  },

  dateButton: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  button: {
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 14,
  },

  cancelButton: {
    backgroundColor: "#E5E7EB",
    marginRight: 10,
  },

  saveButton: {
    backgroundColor: "green",
  },

  cancelText: {
    color: "#111827",
    fontWeight: "600",
  },

  saveText: {
    color: "#FFF",
    fontWeight: "600",
  },
});
