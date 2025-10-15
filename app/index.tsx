import { Checkbox } from "@futurejj/react-native-checkbox";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [checked, setChecked] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const showEvent =
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent =
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const keyboardShowListener = Keyboard.addListener(showEvent, () =>
      setIsKeyboardVisible(true)
    );
    const keyboardHideListener = Keyboard.addListener(hideEvent, () =>
      setIsKeyboardVisible(false)
    );

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={20}
      >
        <View style={{ flex: 1 }}>
          {!isKeyboardVisible && (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/secup/secup-logo.png")}
                style={{ width: 150, height: 150 }}
                contentFit="contain"
                transition={1000}
              />
            </View>
          )}
          <View style={{ justifyContent: "center", gap: 20 }}>
            <View style={{ alignItems: "center", gap: 20 }}>
              <TextInput
                placeholder="E-mail"
                placeholderTextColor="#888"
                style={{
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 10,
                  padding: 15,
                  width: 280,
                  backgroundColor: "#f9f9f9",
                }}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#888"
                secureTextEntry
                style={{
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 10,
                  padding: 15,
                  width: 280,
                  backgroundColor: "#f9f9f9",
                }}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={toggleCheckbox}
              />
              <Text>Remember me</Text>
            </View>

            <View style={{ flexDirection: "column", gap: 15 }}>
              <Link
                href="/welcome"
                style={{
                  backgroundColor: "#0080009a",
                  padding: 15,
                  borderRadius: 10,
                  alignItems: "center",
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Login
              </Link>
              <Link
                href="/"
                style={{
                  color: "#007AFF",
                  textAlign: "center",
                }}
              >
                Forgot password?
              </Link>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
