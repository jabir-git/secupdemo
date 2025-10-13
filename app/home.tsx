import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function Home() {
  const options = [
    {
      title: "Scan plaque",
      image: require("../assets/secup/scan-plaque.png"),
      href: "/scanPlaque",
    },
    {
      title: "Alertes",
      image: require("../assets/secup/alertes.png"),
      href: "/alertes",
    },
    {
      title: "Interventions",
      image: require("../assets/secup/interventions.png"),
      href: "/interventions",
    },
    {
      title: "Profil",
      image: require("../assets/secup/profil.png"),
      href: "/profil",
    },
  ];
  return (
    <View>
      <View style={{ alignItems: "center", marginTop: 25 }}>
        <Image
          source={require("../assets/secup/secup-logo.png")}
          style={{ width: 200, height: 300 }}
          contentFit="contain"
          transition={1000}
        />
      </View>
      <ScrollView
        style={{ marginTop: 20 }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {options.map((option, index) => (
          <Link
            key={index}
            href={option.href}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 10,
              padding: 10,
              width: 250,
              backgroundColor: "#f9f9f9",
            }}
          >
            <Image
              source={option.image}
              style={{
                width: 20,
                height: 20,
                marginRight: 30,
              }}
              contentFit="contain"
              transition={1000}
            />
            <View>
              <Text style={{ fontSize: 18 }}>{option.title}</Text>
            </View>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}
