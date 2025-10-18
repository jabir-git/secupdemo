import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Options from "./components/options";
import useTheme from "./hooks/useTheme";

export default function Alertes() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.infoText}>Alertes</Text>
      </ScrollView>
      <View>
        <Options activeTab="alertes" />
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
    scrollView: {
      flex: 1,
      padding: 5,
    },
    infoText: { fontSize: 16, fontWeight: "700", color: colors.text },
    text: {
      color: colors.text,
    },
  });
