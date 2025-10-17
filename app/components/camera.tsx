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
import useTheme from "../hooks/useTheme";

type Props = {
  // Callback with a detected or entered license plate string
  onPlateDetected?: (plate: string) => void;
};

export default function Camera({ onPlateDetected }: Props) {
  const facing: CameraType = "back";
  const [permission, requestPermission] = useCameraPermissions();
  const [manualPlate, setManualPlate] = useState("");
  const { colors } = useTheme();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    const styles = createStyles(colors);
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
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

  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cameraWrapper}>
        <CameraView style={StyleSheet.absoluteFill} facing={facing} />
        {/* Overlay sits above the camera to hint the scanning zone */}
        <View pointerEvents="none" style={styles.scanOverlay} />
      </View>

      <View style={styles.inputSection}>
        <View style={styles.inputRow}>
          <TextInput
            value={manualPlate}
            onChangeText={setManualPlate}
            placeholder="Enter plate manually"
            placeholderTextColor={colors.placeholder}
            autoCapitalize="characters"
            style={styles.textInput}
          />
          <Pressable style={styles.scanButton} onPress={simulateScan}>
            <Text style={styles.scanButtonText}>Scan</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    permissionContainer: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: colors.background,
    },
    permissionText: {
      textAlign: "center",
      paddingBottom: 10,
      color: colors.text,
    },
    cameraWrapper: {
      flex: 1,
      gap: 12,
      borderRadius: 12,
      overflow: "hidden",
    },
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
    inputSection: {
      gap: 8,
      paddingTop: 10,
    },
    inputRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    textInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: colors.inputBorder,
      borderRadius: 8,
      paddingHorizontal: 12,
      height: 40,
      backgroundColor: colors.inputBackground,
      color: colors.text,
    },
    scanButton: {
      backgroundColor: colors.primary,
      paddingHorizontal: 20,
      paddingVertical: 6,
      borderRadius: 8,
    },
    scanButtonText: {
      color: colors.primaryText,
      paddingVertical: 6,
    },
  });
