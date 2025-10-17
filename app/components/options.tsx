import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type TabOption = {
  id: string;
  label: string;
  icon: any;
  route: string;
};

const tabOptions: TabOption[] = [
  {
    id: "alertes",
    label: "Alertes",
    icon: require("../../assets/secup/alertes.png"),
    route: "/alertes",
  },
  {
    id: "scanLicense",
    label: "Scan Plaque",
    icon: require("../../assets/secup/scan-plaque.png"),
    route: "/scanLicense",
  },
  {
    id: "interventions",
    label: "Interventions",
    icon: require("../../assets/secup/interventions.png"),
    route: "/interventions",
  },
  {
    id: "profil",
    label: "Profil",
    icon: require("../../assets/secup/profil.png"),
    route: "/profil",
  },
];

interface OptionsProps {
  activeTab: string;
}

export default function Options({ activeTab }: OptionsProps) {
  const router = useRouter();

  const handleTabPress = (tab: TabOption) => {
    router.push(tab.route as any);
  };

  return (
    <View style={styles.container}>
      {tabOptions.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[
            styles.tabButton,
            activeTab === tab.id && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress(tab)}
        >
          <View style={styles.tabContent}>
            <Image
              source={tab.icon}
              style={[styles.icon, activeTab === tab.id && styles.activeIcon]}
              contentFit="contain"
            />
            <Text
              style={[
                styles.tabText,
                activeTab === tab.id && styles.activeTabText,
              ]}
            >
              {tab.label}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 12,
    gap: 8,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabButton: {
    backgroundColor: "#008000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabContent: {
    alignItems: "center",
    gap: 4,
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: "#666",
  },
  activeIcon: {
    tintColor: "#fff",
  },
  tabText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#666",
    textAlign: "center",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "700",
  },
});
