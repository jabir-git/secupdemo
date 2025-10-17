import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  // Callback with a detected or entered license plate string
  onPlateDetected?: (plate: string) => void;
};

export default function Camera({ onPlateDetected }: Props) {
  const facing: CameraType = "back";
  const [permission, requestPermission] = useCameraPermissions();
  const [manualPlate, setManualPlate] = useState("");

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ textAlign: "center", paddingBottom: 10 }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const simulateScan = () => {
    // Simulate a recognition result; keep it simple and valid-ish
    const sample = manualPlate.trim() || "AA-123-BB";
    const normalized = sample.toUpperCase();
    onPlateDetected?.(normalized);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, gap: 12, borderRadius: 12, overflow: "hidden" }}>
        <CameraView style={StyleSheet.absoluteFill} facing={facing} />
        {/* Overlay sits above the camera to hint the scanning zone */}
        <View pointerEvents="none" style={styles.scanOverlay} />
      </View>

      <View style={{ gap: 8, paddingTop: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <TextInput
            value={manualPlate}
            onChangeText={setManualPlate}
            placeholder="Enter plate manually"
            placeholderTextColor="#333"
            autoCapitalize="characters"
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 8,
              paddingHorizontal: 12,
              height: 40,
              backgroundColor: "#fff",
            }}
          />
          <Pressable
            style={{
              backgroundColor: "#0080009a",
              paddingHorizontal: 20,
              paddingVertical: 6,
              borderRadius: 8,
            }}
            onPress={simulateScan}
          >
            <Text style={{ color: "white", paddingVertical: 6 }}>Scan</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scanOverlay: {
    position: "absolute",
    top: "35%",
    left: "10%",
    right: "10%",
    height: 80,
    borderWidth: 2,
    borderColor: "#00E0FF",
    borderStyle: "dashed",
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
});
