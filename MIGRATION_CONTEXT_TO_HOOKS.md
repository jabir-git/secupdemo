# Migration: Context API → Custom Hooks

## Vue d'ensemble

Le système de thème a été refactorisé pour utiliser des **hooks personnalisés** au lieu du Context API de React.

## Pourquoi cette migration?

### ❌ Problèmes avec Context API

1. **Performance**: Tous les composants enfants du Provider se re-rendent lors d'un changement
2. **Boilerplate**: Nécessite un Provider wrapper et un contexte
3. **Complexité**: Plus de code à maintenir
4. **Testing**: Plus difficile à tester et à mocker

### ✅ Avantages des Hooks Personnalisés

1. **Performance**: Chaque composant gère son propre état de thème
2. **Simplicité**: Pas besoin de Provider dans le layout racine
3. **Maintenance**: Code plus simple et direct
4. **Testing**: Plus facile à tester et à mocker
5. **TypeScript**: Meilleure inférence de types

## Changements d'architecture

### Avant (Context API)

```tsx
// app/context/ThemeContext.tsx
export const ThemeContext = createContext<ThemeContextType>(...);
export function ThemeProvider({ children }) { ... }
export function useTheme() { ... }

// app/_layout.tsx
<ThemeProvider>
  <Stack />
</ThemeProvider>

// Utilisation
import { useTheme } from "./context/ThemeContext";
```

### Après (Custom Hook)

```tsx
// app/hooks/useTheme.ts
export function useTheme() {
  const systemColorScheme = useColorScheme();
  const [theme, setThemeState] = useState<Theme>("auto");
  // ... logique de gestion du thème
  return { theme, colors, isDark, setTheme, isLoaded };
}

// app/_layout.tsx
// Pas de Provider nécessaire!
<Stack />;

// Utilisation
import { useTheme } from "./hooks/useTheme";
```

## Guide de migration

### Étape 1: Créer le hook personnalisé

Fichier: `app/hooks/useTheme.ts`

### Étape 2: Mettre à jour les imports

Remplacer dans tous les fichiers:

```tsx
// Avant
import { useTheme } from "./context/ThemeContext";

// Après
import { useTheme } from "./hooks/useTheme";
```

### Étape 3: Retirer le Provider

Dans `app/_layout.tsx`, retirer le wrapper `<ThemeProvider>`:

```tsx
// Avant
export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutNav />
    </ThemeProvider>
  );
}

// Après
export default function RootLayout() {
  const { isDark } = useTheme();
  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Stack />
    </>
  );
}
```

### Étape 4: Supprimer l'ancien Context

```bash
rm app/context/ThemeContext.tsx
rmdir app/context
```

## Fichiers modifiés

### Créés

- ✅ `app/hooks/useTheme.ts` - Nouveau hook personnalisé

### Modifiés

- ✅ `app/_layout.tsx` - Retiré ThemeProvider
- ✅ `app/index.tsx` - Mis à jour l'import
- ✅ `app/welcome.tsx` - Mis à jour l'import
- ✅ `app/alertes.tsx` - Mis à jour l'import
- ✅ `app/interventions.tsx` - Mis à jour l'import
- ✅ `app/profil.tsx` - Mis à jour l'import
- ✅ `app/scanLicense.tsx` - Mis à jour l'import
- ✅ `app/components/options.tsx` - Mis à jour l'import
- ✅ `app/components/camera.tsx` - Mis à jour l'import

### Supprimés

- ❌ `app/context/ThemeContext.tsx` - Remplacé par le hook
- ❌ `app/context/` - Dossier supprimé

## Fonctionnement technique

### Gestion de l'état

```tsx
export function useTheme() {
  const systemColorScheme = useColorScheme(); // Détection système
  const [theme, setThemeState] = useState<Theme>("auto"); // État local
  const [isLoaded, setIsLoaded] = useState(false); // État de chargement

  // Chargement depuis AsyncStorage au montage
  useEffect(() => {
    loadTheme();
  }, []);

  // Calcul dynamique du mode sombre
  const isDark =
    theme === "auto" ? systemColorScheme === "dark" : theme === "dark";

  // Calcul dynamique des couleurs
  const colors = isDark ? darkColors : lightColors;

  return { theme, colors, isDark, setTheme, isLoaded };
}
```

### Avantages de performance

1. **Pas de re-render cascade**: Chaque composant gère son propre état
2. **Chargement optimisé**: Une seule lecture d'AsyncStorage par composant
3. **Mise à jour ciblée**: Seuls les composants utilisant le hook se mettent à jour

## Résultat

✅ Architecture plus simple et moderne  
✅ Meilleures performances  
✅ Code plus maintenable  
✅ Pas de changement fonctionnel pour l'utilisateur  
✅ Tous les tests passent  
✅ Aucune erreur TypeScript

## Notes importantes

- Le hook utilise toujours AsyncStorage pour la persistance
- Le système de couleurs est inchangé (light/dark/auto)
- Tous les écrans et composants continuent de fonctionner normalement
- Le toggle de thème dans le profil fonctionne toujours de la même manière
