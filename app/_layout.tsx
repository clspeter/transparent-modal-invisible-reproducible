import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { ComponentProps, useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Main" }} />
        <Stack.Screen name="stack" options={{ headerTitle: "Stack0" }} />
        <Stack.Screen name="stack1" options={{ headerTitle: "Stack1" }} />
        <Stack.Screen name="stack2" options={{ headerTitle: "Stack2" }} />
        <Stack.Screen name="modal-page" options={modalStackScreenOptions} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

export const modalStackScreenOptions: ComponentProps<
  typeof Stack.Screen
>["options"] = {
  presentation: "transparentModal",
  animation: "none",
  animationDuration: 0,
  contentStyle: {
    justifyContent: "flex-end",
    backgroundColor: "transparent",
  },
};
