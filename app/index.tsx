import { Checkbox } from "@futurejj/react-native-checkbox";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        SecUp
      </Text>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#888"
            style={{
              marginBottom: 20,
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 10,
              padding: 10,
              width: 250,
              backgroundColor: "#f9f9f9",
            }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
            style={{
              marginBottom: 20,
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 10,
              padding: 10,
              width: 250,
              backgroundColor: "#f9f9f9",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            paddingLeft: 20,
          }}
        >
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={toggleCheckbox}
          />
          <Text style={{ marginLeft: 8 }}>Remember me</Text>
        </View>
        <Link href="/welcome" style={{
          backgroundColor: "#007AFF",
          padding: 15,
          borderRadius: 10,
          alignItems: "center",
          marginBottom: 20,
          color: "#fff",
          fontWeight: "bold",
          textAlign: "center",
        }}>Login</Link>
        <Link href="/" style={{
          color: "#007AFF",
          textAlign: "center",
        }}>Forgot password?</Link>
      </View>
    </SafeAreaView>
  );
}
