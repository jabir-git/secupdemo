import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AccountParams from "./components/accountParams";
import Options from "./components/options";
import useTheme from "./hooks/useTheme";

export default function Profile() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.infoText}>Officier profile</Text>
      <AccountParams />
      <View>
        <Options activeTab="profile" />
      </View>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 5,
      backgroundColor: colors.background,
    },
    infoText: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.text,
    },
  });
