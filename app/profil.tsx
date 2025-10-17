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
      <View
        style={{
          flex: 1,
          padding: 20,
          gap: 20,
        }}
      >
        <ScrollView>
          {/* User card */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              gap: 40,
              backgroundColor: "#F5F5F5",
              padding: 12,
              borderRadius: 12,
              marginBottom: 12,
            }}
          >
            <Image
              source={require("../assets/secup/officier.png")}
              style={{ width: 48, height: 48 }}
              contentFit="contain"
            />
            <View style={{ flexDirection: "column", gap: 40 }}>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>Firstname</Text>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>Lastname</Text>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>Email</Text>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>Password</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ padding: 20, paddingTop: 10 }}>
        <Options activeTab="profil" />
      </View>
    </SafeAreaView>
  );
}
