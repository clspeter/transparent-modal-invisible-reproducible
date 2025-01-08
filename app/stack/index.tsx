import { View, Text, Pressable, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

const StackMainIndex = () => {
  return (
    <View style={{ gap: 16 }}>
      <Text>Stack0 Index</Text>
      <Button onPress={() => router.navigate("/stack1")} title="Stack1" />
      <Button onPress={() => router.navigate("/stack2")} title="Stack2" />
      <Button
        onPress={() => router.navigate("/stack/modal-page")}
        title="Transparent Modal in Stack0"
      />
    </View>
  );
};

export default StackMainIndex;
