import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "./hooks/useTheme";

export default function CreateAccount() {
  const [checked, setChecked] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const { colors } = useTheme();

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

  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={20}
      >
        <View style={styles.mainContent}>
          {!isKeyboardVisible && (
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>SecUp</Text>
            </View>
          )}
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="First Name"
                placeholderTextColor={colors.placeholder}
                style={styles.input}
              />
              <TextInput
                placeholder="Last Name"
                placeholderTextColor={colors.placeholder}
                style={styles.input}
              />
              <TextInput
                placeholder="E-mail"
                placeholderTextColor={colors.placeholder}
                style={styles.input}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor={colors.placeholder}
                secureTextEntry
                style={styles.input}
              />
            </View>

            <View style={styles.buttonContainer}>
              <Link href="/alertes" style={styles.loginButton}>
                Sign Up
              </Link>
            </View>
            <View style={styles.linksContainer}>
              <Link href="/" style={styles.redirectLink}>
                Already have an account? Log In
              </Link>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 5,
    },
    keyboardView: {
      flex: 1,
    },
    mainContent: {
      flex: 1,
    },
    logoContainer: {
      alignItems: "center",
    },
    logo: {
      fontWeight: "bold",
      fontSize: 32,
      color: colors.primary,
    },
    formContainer: {
      flex: 1,
      justifyContent: "center",
      gap: 20,
      padding: 10,
    },
    inputContainer: {
      alignItems: "center",
      gap: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: colors.inputBorder,
      borderRadius: 10,
      padding: 15,
      width: "100%",
      backgroundColor: colors.inputBackground,
      color: colors.text,
    },
    buttonContainer: {
      flexDirection: "column",
      gap: 15,
    },
    loginButton: {
      backgroundColor: colors.primary,
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      color: colors.primaryText,
      fontWeight: "bold",
      textAlign: "center",
    },
    linksContainer: {
      flexDirection: "column",
      alignSelf: "center",
      gap: 10,
      width: 200,
    },
    redirectLink: {
      color: colors.link,
      textAlign: "center",
    },
  });
