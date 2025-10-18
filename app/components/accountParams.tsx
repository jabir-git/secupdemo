import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Options from "./options";
import useTheme from "../hooks/useTheme";

export default function AccountParams() {
  const { colors } = useTheme();
  // Base profile data that drives the view
  const [profile, setProfile] = React.useState<Record<string, string>>({
    Firstname: "Bob",
    Lastname: "Smith",
    Email: "bobsmithmail@mail.com",
    Password: "********",
  });
  // Ordered list of properties to render
  const properties = Object.keys(profile);
  // Which field is currently being edited (null means read-only state)
  const [editingField, setEditingField] = useState<string | null>(null);
  // Editable draft values used while in edit mode
  const [draft, setDraft] = React.useState<Record<string, string>>(profile);

  const enableEdit = (field: string) => {
    // Start with a fresh copy of current profile for editing
    setDraft(profile);
    setEditingField(field);
  };

  const saveField = (field: string) => {
    setProfile((prev) => ({ ...prev, [field]: draft[field] }));
    setEditingField(null);
  };
  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
        >
          {/* User card */}
          <View style={styles.userCard}>
            {/* Profile fields */}
            <View style={styles.infoContainer}>
              {properties.map((property) => (
                <View key={property} style={styles.field}>
                  {editingField === property ? (
                    <View style={styles.fieldEdit}>
                      <Text style={styles.label}>{property}</Text>
                      <TextInput
                        style={styles.input}
                        value={draft[property]}
                        onChangeText={(val) =>
                          setDraft((prev) => ({ ...prev, [property]: val }))
                        }
                        placeholderTextColor={colors.placeholder}
                        secureTextEntry={property.toLowerCase() === "password"}
                      />
                      <Pressable
                        style={styles.buttonWrap}
                        onPress={() => saveField(property)}
                      >
                        <Text style={styles.button}>Save</Text>
                      </Pressable>
                    </View>
                  ) : (
                    <View style={styles.fieldRead}>
                      <View style={styles.fieldReadText}>
                        <Text style={styles.label}>{property}</Text>
                        <ScrollView
                          horizontal
                          showsHorizontalScrollIndicator={false}
                          contentContainerStyle={{ alignItems: "center" }}
                          style={styles.valueScroll}
                        >
                          <Text style={styles.value}>{profile[property]}</Text>
                        </ScrollView>
                      </View>
                      <Pressable
                        style={styles.buttonWrap}
                        onPress={() => enableEdit(property)}
                      >
                        <Text style={styles.button}>Edit</Text>
                      </Pressable>
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    userCard: {
      flexDirection: "column",
      gap: 16,
      padding: 5,
    },
    infoContainer: {
      flexDirection: "column",
      gap: 16,
    },
    field: {
      flexDirection: "column",
      padding: 12,
      gap: 8,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    fieldRead: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    fieldReadText: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      width: "70%",
    },
    valueScroll: {
      flex: 1,
    },
    fieldEdit: {
      flexDirection: "column",
      gap: 6,
    },
    label: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.textSecondary,
    },
    value: {
      fontSize: 14,
      fontWeight: "500",
      color: colors.text,
    },
    input: {
      padding: 12,
      borderColor: colors.inputBorder,
      borderWidth: 1,
      width: "100%",
      borderRadius: 8,
      backgroundColor: colors.inputBackground,
      color: colors.text,
    },
    buttonWrap: {
      alignSelf: "flex-start",
      backgroundColor: colors.link,
      borderRadius: 8,
      padding: 12,
    },
    button: { color: "white", fontSize: 14, fontWeight: "600" },
  });
