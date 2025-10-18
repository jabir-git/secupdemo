import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useTheme from "../hooks/useTheme";

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
    label: "Scan",
    icon: require("../../assets/secup/scan-plaque.png"),
    route: "/scanLicense",
  },
  {
    id: "interventions",
    label: "Catch",
    icon: require("../../assets/secup/interventions.png"),
    route: "/interventions",
  },
  {
    id: "profile",
    label: "Profile",
    icon: require("../../assets/secup/profile.png"),
    route: "/profile",
  },
];

interface OptionsProps {
  activeTab: string;
}

export default function Options({ activeTab }: OptionsProps) {
  const router = useRouter();
  const { colors } = useTheme();

  const handleTabPress = (tab: TabOption) => {
    router.push(tab.route as any);
  };

  const styles = createStyles(colors);

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

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      padding: 5,
      borderTopWidth: 1,
      borderColor: colors.tabBorder,
      gap: 8,
      backgroundColor: colors.background,
    },
    tabButton: {
      flex: 1,
      padding: 5,
      borderRadius: 8,
      backgroundColor: colors.tabBackground,
      alignItems: "center",
      justifyContent: "center",
    },
    activeTabButton: {
      backgroundColor: colors.activeTabBackground,
    },
    tabContent: {
      alignItems: "center",
      gap: 2,
    },
    icon: {
      width: 25,
      height: 25,
      tintColor: colors.tabIcon,
    },
    activeIcon: {
      tintColor: colors.activeTabIcon,
    },
    tabText: {
      fontSize: 11,
      fontWeight: "600",
      color: colors.tabText,
      textAlign: "center",
    },
    activeTabText: {
      color: colors.activeTabText,
    },
  });
