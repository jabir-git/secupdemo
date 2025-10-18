import { useColorScheme } from "react-native";

export const lightColors = {
  background: "#ffffff",
  surface: "#f9f9f9",
  text: "#000000",
  textSecondary: "#666666",
  border: "#cccccc",
  primary: "#008000e1",
  primaryText: "#ffffff",
  link: "#007AFF",
  inputBackground: "#f9f9f9",
  inputBorder: "#cccccc",
  placeholder: "#888888",
  shadow: "#000000",
  tabBackground: "transparent",
  activeTabBackground: "#008000e1",
  tabIcon: "#666666",
  activeTabIcon: "#ffffff",
  tabText: "#666666",
  activeTabText: "#ffffff",
  tabBorder: "#dddddd",
};

export const darkColors = {
  background: "#000000",
  surface: "#1c1c1e",
  text: "#ffffff",
  textSecondary: "#a0a0a0",
  border: "#3a3a3c",
  primary: "#008000e1",
  primaryText: "#ffffff",
  link: "#0a84ff",
  inputBackground: "#1c1c1e",
  inputBorder: "#3a3a3c",
  placeholder: "#8e8e93",
  shadow: "#ffffff",
  tabBackground: "transparent",
  activeTabBackground: "#008000e1",
  tabIcon: "#a0a0a0",
  activeTabIcon: "#ffffff",
  tabText: "#a0a0a0",
  activeTabText: "#ffffff",
  tabBorder: "#3a3a3c",
};

export default function useTheme() {
  const systemColorScheme = useColorScheme();

  const isDark = systemColorScheme === "dark";
  const colors = isDark ? darkColors : lightColors;

  return { colors, isDark };
}
