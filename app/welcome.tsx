import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function welcome() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ alignItems: "center", gap: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>
          Welcome to SecUp
        </Text>
        <Image
          source={require("../assets/secup/officier.png")}
          style={{ width: 200, height: 200 }}
          contentFit="contain"
          transition={1000}
        />
        <Text style={{ textAlign: "center", fontSize: 24 }}>
          Start a new traffic stop and fill in the details
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Link
          href="/home"
          style={{
            backgroundColor: "#0080009a",
            color: "white",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
            fontSize: 18,
            width: 200,
            textAlign: "center",
          }}
        >
          Next
        </Link>
      </View>
    </SafeAreaView>
  );
}
