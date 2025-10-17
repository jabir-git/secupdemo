import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Options from "./components/options";


export default function Alertes() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView style={{ flex: 1, padding: 5 }}>
        <Text>Alertes</Text>
      </ScrollView>
      <View>
        <Options activeTab="alertes" />
      </View>
    </SafeAreaView>
  );
}
