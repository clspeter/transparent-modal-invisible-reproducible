import { View, Text, Button } from "react-native";

import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{ gap: 16 }}>
      <Text>go to Stack0</Text>
      <Button onPress={() => router.navigate("/stack")} title="Stack0" />
    </View>
  );
}
