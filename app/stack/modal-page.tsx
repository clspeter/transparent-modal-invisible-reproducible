import { Pressable, StyleSheet, Text, ToastAndroid, View } from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";

const ModalPage = () => {
  const showToast = (text: string) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  };

  useEffect(() => {
    console.log("ModalPage is mounted");
    showToast("ModalPage is mounted");
  }, []);

  return (
    <View style={styles.modalPage}>
      <Text style={{ fontSize: 24 }}>ModalPage</Text>
      <Pressable
        onPress={() => {
          console.log("Back Pressed");
          showToast("Back Pressed");
          router.back();
        }}
        style={styles.backButton}
      >
        <Text>Press To Back</Text>
      </Pressable>
    </View>
  );
};

export default ModalPage;

const styles = StyleSheet.create({
  modalPage: {
    height: "70%",
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
  },
  backButton: {
    flex: 1,
    width: "100%",
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
});
