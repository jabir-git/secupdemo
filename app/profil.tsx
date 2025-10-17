import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Options from "./components/options";
import useTheme from "./hooks/useTheme";

export default function Profil() {
  const { colors } = useTheme();

  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* User card */}
        <View style={styles.userCard}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Firstname</Text>
            <Text style={styles.infoText}>Lastname</Text>
            <Text style={styles.infoText}>Email</Text>
            <Text style={styles.infoText}>Password</Text>
          </View>
        </View>
      </ScrollView>
      <View>
        <Options activeTab="profil" />
      </View>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    userCard: {
      flex: 1,
      flexDirection: "column",
      gap: 40,
      padding: 12,
      borderRadius: 12,
      marginBottom: 12,
    },
    infoContainer: {
      flexDirection: "column",
      gap: 40,
    },
    infoText: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.text,
    },
  });
