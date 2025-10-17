import React from "react";
import { ScrollView, View } from "react-native";
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
      <ScrollView
        style={{
          flex: 1,
          padding: 5,
        }}
      >
        <View style={{ width: "100%", height: 340 }}>
          <Camera />
        </View>
      </ScrollView>
      <View>
        <Options activeTab="scanLicense" />
      </View>
    </SafeAreaView>
  );
}
