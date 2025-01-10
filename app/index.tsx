import { View, Text, Button } from "react-native";

import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{ gap: 16 }}>
      <Text>Start Here</Text>
      <Button onPress={() => router.navigate("/stack")} title="Stack0" />
      <Text>
        This bug needs to init in a nested stack, will not happened from here
      </Text>
      <Button onPress={() => router.navigate("/stack1")} title="Stack1" />
      <Button onPress={() => router.navigate("/stack2")} title="Stack2" />
      <Button
        onPress={() => router.navigate("/stack/modal-page")}
        title="Transparent Modal In Stack0"
      />
    </View>
  );
}
