import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function welcome() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", padding: 20 }}>
      <View style={{ position: "absolute", top: 10, left: 10 }}>
        <Link href="/"></Link>
      </View>
      <View style={{ alignItems: "center", gap: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          welcome to SecUp
        </Text>
        <Image
          source={require("../assets/secup/officier.png")}
          style={{ width: 300, height: 300 }}
          contentFit="contain"
          transition={1000}
        />
        <Text style={{ textAlign: "center", fontSize: 24 }}>
          Start a new traffic stop and fill in the details
        </Text>
        <Link
          href="/home"
          style={{
            backgroundColor: "#007AFF",
            color: "white",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 10,
            fontSize: 18,
          }}
        >
          Next
        </Link>
      </View>
    </SafeAreaView>
  );
}
