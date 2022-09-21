import React from "react";
import { StyleSheet, View } from "react-native";

const Row = ({ children }) => {
  return <View style={styles.row}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default Row;
