import { Stack } from "expo-router";

export default function Stack1Layout() {
  return (
    <Stack>
      <Stack.Screen
        name={"index"}
        options={{ headerTitle: "Stack1", headerShown: false }}
      />
    </Stack>
  );
}
