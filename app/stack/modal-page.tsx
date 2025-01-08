import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";

const ModalPage = () => {
  useEffect(() => {
    console.log("ModalPage is mounted");
  }, []);

  return (
    <View style={styles.modalPage}>
      <Text style={{ fontSize: 24 }}>ModalPage</Text>
      <Pressable
        onPress={() => {
          console.log("Pressed Back");
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
