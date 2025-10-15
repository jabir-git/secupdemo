import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Options() {
  interface Option {
    title: string;
    image: string;
    href: `/scanLicense` | `/alertes` | `/interventions` | `/profil`;
  }

  const options: Array<Option> = [
    {
      title: "Profil",
      image: require("../../assets/secup/profil.png"),
      href: "/profil",
    },
    {
      title: "Scan plaque",
      image: require("../../assets/secup/scan-plaque.png"),
      href: "/scanLicense",
    },
    {
      title: "Alertes",
      image: require("../../assets/secup/alertes.png"),
      href: "/alertes",
    },
    {
      title: "Interventions",
      image: require("../../assets/secup/interventions.png"),
      href: "/interventions",
    },
  ];
  return (
    <View style={{ flexDirection: "column", gap: 20 }}>
      {options.map((option, index) => (
        <Link key={index} href={option.href}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              gap: 20,
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
                width: 30,
                height: 30,
              }}
              contentFit="contain"
              transition={1000}
            />
            <View>
              <Text style={{ fontSize: 18 }}>{option.title}</Text>
            </View>
          </View>
        </Link>
      ))}
    </View>
  );
}
