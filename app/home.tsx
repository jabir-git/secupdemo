import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";
import Options from "./components/options";

export default function Home() {
  return (
    <View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Image
          source={require("../assets/secup/secup-logo.png")}
          style={{ width: 200, height: 200 }}
          contentFit="contain"
          transition={1000}
        />
      </View>
      <Options />
    </View>
  );
}
