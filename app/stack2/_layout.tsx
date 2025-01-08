import { Stack } from "expo-router";

export default function Stack2Layout() {
  return (
    <Stack>
      <Stack.Screen
        name={"index"}
        options={{ headerTitle: "Stack2", headerShown: false }}
      />
    </Stack>
  );
}
