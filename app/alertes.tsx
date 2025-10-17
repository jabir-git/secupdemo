import { Text, View } from "react-native";
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
      <View style={{ flex: 1, padding: 20 }}>
        <Text>Alertes</Text>
      </View>
      <View style={{ padding: 20, paddingTop: 10 }}>
        <Options activeTab="alertes" />
      </View>
    </SafeAreaView>
  );
}
