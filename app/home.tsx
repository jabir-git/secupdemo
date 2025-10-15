import { Image } from "expo-image";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Options from "./components/options";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Image
              source={require("../assets/secup/secup-logo.png")}
              style={{ width: 150, height: 150 }}
              contentFit="contain"
              transition={1000}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Options />
          </View>
        </View>
    </SafeAreaView>
  );
}
