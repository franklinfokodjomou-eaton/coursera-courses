import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View
      style={{
        flex: 0.15,
        backgroundColor: "#F4CE14",
      }}
    >
      <Text
        style={{
          padding: 20,
          fontSize: 30,
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
        }}
        numberOfLines={1}
      >
        Little Lemon
      </Text>
    </View>
  );
}
