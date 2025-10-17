import { Image } from "expo-image";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Options from "./components/options";

export default function Profil() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView>
        {/* User card */}
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            gap: 40,
            padding: 12,
            borderRadius: 12,
            marginBottom: 12,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/secup/officier.png")}
              style={{ width: 100, height: 100, borderRadius: "100%" }}
              contentFit="contain"
            />
          </View>
          <View style={{ flexDirection: "column", gap: 40 }}>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>Firstname</Text>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>Lastname</Text>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>Email</Text>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>Password</Text>
          </View>
        </View>
      </ScrollView>
      <View>
        <Options activeTab="profil" />
      </View>
    </SafeAreaView>
  );
}
