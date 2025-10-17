import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "./hooks/useTheme";

export default function welcome() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to SecUp</Text>
        <Image
          source={require("../assets/secup/officier.png")}
          style={styles.image}
          contentFit="contain"
          transition={1000}
        />
        <Text style={styles.subtitle}>
          Start a new traffic stop and fill in the details
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Link href="/alertes" style={styles.nextButton}>
          Next
        </Link>
      </View>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 5,
      backgroundColor: colors.background,
    },
    contentContainer: {
      alignItems: "center",
      gap: 20,
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      color: colors.text,
    },
    image: {
      width: 200,
      height: 200,
    },
    subtitle: {
      textAlign: "center",
      fontSize: 24,
      color: colors.text,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: "flex-end",
    },
    nextButton: {
      backgroundColor: colors.primary,
      color: colors.primaryText,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      fontSize: 18,
      width: 200,
      textAlign: "center",
    },
  });
