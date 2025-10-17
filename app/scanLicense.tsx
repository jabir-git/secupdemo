import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
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
  });
