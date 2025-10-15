import { Link } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Camera from "./components/camera";

export default function ScanPlaque() {

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          paddingBottom: 10,
          alignSelf: "flex-start",
        }}
      >
        <Link href="/home">
          <View
            style={{
              backgroundColor: "#0080009a",
              paddingHorizontal: 20,
              paddingVertical: 6,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
                color: "white",
              }}
            >
              ←
            </Text>
          </View>
        </Link>
      </View>
      <View style={{ width: "100%", height: 340 }}>
        <Camera />
      </View>
    </SafeAreaView>
  );
}
