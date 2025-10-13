import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Camera from "./components/camera";

export default function ScanPlaque() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", margin: 10 }}>
        Scanner
      </Text>
      <View style={{ width: "100%", height: 300 }}>
        <Camera />
      </View>
    </SafeAreaView>
  );
}
