# Theme System Documentation

## Overview

The SecUp app now supports **Light**, **Dark**, and **Auto** theme modes with persistent theme preferences using a custom hook.

## Architecture

### ✨ Hook-Based Implementation

Instead of using React Context, this theme system uses a **custom hook** (`useTheme`) for better performance and simpler implementation:

- ⚡ No Context overhead
- 🎯 Direct state management
- 🚀 Faster re-renders
- 📦 Smaller bundle size

## Features

### 🎨 Three Theme Modes

- **Light Mode**: Clean, bright interface with light backgrounds
- **Dark Mode**: Eye-friendly dark interface with OLED-friendly blacks
- **Auto Mode**: Automatically switches between light and dark based on system preferences

### 💾 Persistent Storage

Theme preferences are saved locally using AsyncStorage and persist across app restarts.

### 🔄 Easy Theme Switching

Users can cycle through themes by tapping the theme toggle button in the Profile screen:

- ☀️ Light Mode
- 🌙 Dark Mode
- 🔄 Auto Mode

## Color Palette

### Light Theme Colors

- Background: `#ffffff`
- Surface: `#f9f9f9`
- Text: `#000000`
- Text Secondary: `#666666`
- Primary: `#0080009a`
- Link: `#007AFF`
- Borders: `#cccccc`

### Dark Theme Colors

- Background: `#000000`
- Surface: `#1c1c1e`
- Text: `#ffffff`
- Text Secondary: `#a0a0a0`
- Primary: `#00b300`
- Link: `#0a84ff`
- Borders: `#3a3a3c`

## Implementation

### useTheme Hook

Located in `app/hooks/useTheme.ts`, this custom hook provides:

- `theme`: Current theme setting ("light" | "dark" | "auto")
- `colors`: Current color palette object
- `isDark`: Boolean indicating if dark mode is active
- `setTheme`: Function to change the theme
- `isLoaded`: Boolean indicating if the theme has been loaded from storage

### Usage in Components

```tsx
import { useTheme } from "./hooks/useTheme";

export default function MyComponent() {
  const { colors, theme, isDark, setTheme, isLoaded } = useTheme();

  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
    },
    text: {
      color: colors.text,
    },
  });
```

### Advantages of Hook-Based Approach

1. **No Provider Needed**: Simply import and use the hook anywhere
2. **Better Performance**: Each component only re-renders when theme changes
3. **Simpler Code**: No need for Provider wrapper in root layout
4. **TypeScript Friendly**: Better type inference
5. **Easier Testing**: Can be mocked easily in tests
6. **Cleaner Architecture**: Less boilerplate code

## Files Updated

### Core Theme System

- ✅ `app/hooks/useTheme.ts` - Custom theme hook (replaces Context API)
- ✅ `app/_layout.tsx` - Root layout (no Provider needed)

### Screens

- ✅ `app/index.tsx` - Login screen
- ✅ `app/welcome.tsx` - Welcome screen
- ✅ `app/alertes.tsx` - Alerts screen
- ✅ `app/interventions.tsx` - Interventions screen
- ✅ `app/profil.tsx` - Profile screen (includes theme toggle)
- ✅ `app/scanLicense.tsx` - Scan license screen

### Components

- ✅ `app/components/options.tsx` - Bottom navigation
- ✅ `app/components/camera.tsx` - Camera component

## Dependencies Added

- `@react-native-async-storage/async-storage` - For persistent theme storage

## Theme Toggle Location

The theme toggle is located in the **Profile screen** at the bottom of the user information card. Users can tap it to cycle through:

1. Light Mode ☀️
2. Dark Mode 🌙
3. Auto Mode 🔄

## How It Works

### State Management

Each component that uses `useTheme()` maintains its own subscription to:

- System color scheme changes (via React Native's `useColorScheme`)
- AsyncStorage for persistence
- Theme state changes

### Performance Optimization

- Theme preferences are loaded once on first mount
- Colors are calculated based on current theme
- No unnecessary re-renders across the component tree

## Migration from Context to Hooks

The system was originally built with React Context but migrated to custom hooks for:

- **Better Performance**: No provider re-renders
- **Simpler Implementation**: Less boilerplate
- **Easier Maintenance**: Single source of truth
- **Modern Pattern**: Follows React best practices

## Future Enhancements

- Add animation transitions when switching themes
- Add more color customization options
- Add theme preview before applying
- Add accessibility settings (high contrast mode)
- Add custom color schemes
- Add per-screen theme overrides
