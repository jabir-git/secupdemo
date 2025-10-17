import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Camera from "./components/camera";
import Options from "./components/options";

export default function ScanPlaque() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          padding: 20,
        }}
      >
        <View style={{ width: "100%", height: 340 }}>
          <Camera />
        </View>
      </View>
      <View style={{ padding: 20, paddingTop: 10 }}>
        <Options activeTab="scanLicense" />
      </View>
    </SafeAreaView>
  );
}
