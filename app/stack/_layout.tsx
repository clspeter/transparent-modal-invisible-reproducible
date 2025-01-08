import React, { ComponentProps } from "react";

import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"index"} />
      <Stack.Screen name={"modal-page"} options={modalStackScreenOptions} />
    </Stack>
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
