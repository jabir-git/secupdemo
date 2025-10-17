import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Options from "./components/options";
import useTheme from "./hooks/useTheme";

export default function Interventions() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>Interventions</Text>
      </ScrollView>
      <View>
        <Options activeTab="interventions" />
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
    text: {
      color: colors.text,
    },
  });
