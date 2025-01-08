import { View, Text, Pressable, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

const StackMainIndex = () => {
  return (
    <View style={{ gap: 16 }}>
      <Text>Stack1Index</Text>
      <Button onPress={() => router.navigate("/stack1")} title="Stack1Index" />
      <Button onPress={() => router.navigate("/stack2")} title="Stack2Index" />
      <Button
        onPress={() => router.navigate("/stack/modal-page")}
        title="TransparentModal"
      />
    </View>
  );
};

export default StackMainIndex;
