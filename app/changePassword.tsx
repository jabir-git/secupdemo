import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AccountParams from "./components/accountParams";
import useTheme from "./hooks/useTheme";

export default function changePassword() {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const [email, setEmail] = React.useState("");
  const [emailExists, setEmailExists] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailsArray = ["bob@mail.com", "alice@mail.com"];
  const checkEmail = () => {
    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    if (emailsArray.includes(email.toLowerCase())) {
      setEmailExists(true);
    } else {
      setEmailExists(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {emailExists ? (
        <View style={styles.container}>
          <Text style={styles.infoText}>Officier profile</Text>
          <AccountParams />
          <Link href="/" style={styles.redirectLink}>
            Log in with new password
          </Link>
        </View>
      ) : (
        <View style={styles.field}>
          <Text>
            Please enter your email address to receive password reset
            instructions.
          </Text>
          <TextInput
            placeholder="Email Address"
            onChangeText={setEmail}
            style={styles.input}
          />
          <Pressable style={styles.buttonWrap} onPress={() => checkEmail()}>
            <Text style={styles.button}>Submit</Text>
          </Pressable>
          <View>
            {emailError && (
              <Text style={styles.error}>
                Please enter a valid email address.
              </Text>
            )}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 5,
      backgroundColor: colors.background,
    },
    infoText: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.text,
    },
    redirectLink: {
      color: colors.link,
      textAlign: "center",
      fontSize: 16,
    },
    buttonWrap: {
      alignSelf: "flex-start",
      backgroundColor: colors.link,
      borderRadius: 8,
      padding: 12,
    },
    button: { color: "white", fontSize: 14, fontWeight: "600" },
    input: {
      padding: 12,
      borderColor: colors.inputBorder,
      borderWidth: 1,
      width: "100%",
      borderRadius: 8,
      backgroundColor: colors.inputBackground,
      color: colors.text,
    },
    field: {
      flexDirection: "column",
      padding: 12,
      gap: 20,
    },
    error: {
      color: "red",
      fontSize: 14,
      fontWeight: "600",
    },
  });
