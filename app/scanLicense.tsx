import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Camera from "./components/camera";
import Options from "./components/options";
import useTheme from "./hooks/useTheme";

export default function ScanPlaque() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.infoText}>Scan license</Text>
        <View style={styles.cameraContainer}>
          <Camera />
        </View>
      </ScrollView>
      <View>
        <Options activeTab="scanLicense" />
      </View>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollView: {
      flex: 1,
      padding: 5,
    },
    cameraContainer: {
      width: "100%",
      height: 340,
    },
    infoText: { fontSize: 16, fontWeight: "700", color: colors.text },
  });
