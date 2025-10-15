import { Image } from "expo-image";
import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profil() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
        gap: 20,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Link href="/home">
          <View
            style={{
              backgroundColor: "#0080009a",
              paddingHorizontal: 20,
              paddingVertical: 6,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
                color: "white",
              }}
            >
              ←
            </Text>
          </View>
        </Link>
        <Link
          href="/"
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            borderRadius: 20,
            backgroundColor: "#ff3a30d0",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "white" }}>Logout</Text>
        </Link>
      </View>
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
    </SafeAreaView>
  );
}
