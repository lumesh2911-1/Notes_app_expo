import React, { useMemo, useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
} from "react-native";

import AddNoteModal from "@/components/AddNoteModal";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import NoteCard from "../components/NoteCard";
import SearchBar from "../components/SearchBar";
import { dummyNotes } from "../constants/dummyNotes";

export default function NotesList() {
  const systemTheme = useColorScheme();

  const [isDark, setIsDark] = useState(systemTheme === "dark");

  const [search, setSearch] = useState("");

  const { width } = useWindowDimensions();

  const filteredNotes = useMemo(() => {
    return dummyNotes.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  // Modal Add Note

  const [notes, setNotes] = useState(dummyNotes);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: isDark ? "#000" : "#F7F7F7",
        },
      ]}
    >
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <Header isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />

      <SearchBar
        value={search}
        onChangeText={setSearch}
        isDark={isDark}
        onAddPress={() => setModalVisible(true)}
      />

      <FlatList
        data={filteredNotes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 30,
        }}
        renderItem={({ item }) => (
          <NoteCard
            title={item.title}
            description={item.description}
            date={item.date}
            color={item.color}
            width={width > 768 ? "48.5%" : "48%"}
          />
        )}
      />
      <AddNoteModal
        visible={modalVisible}
        isDark={isDark}
        onClose={() => setModalVisible(false)}
        onSave={(note) => {
          setNotes((prev) => [note, ...prev]);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  row: {
    justifyContent: "space-between",
  },
});
