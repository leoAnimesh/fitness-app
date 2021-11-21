import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const Navbar = () => {
  return (
    <View style={styles.container}>
      <Feather name="home" size={25} color="black" />
      <MaterialCommunityIcons name="google-analytics" size={25} color="black" />
      <FontAwesome name="user-circle" size={25} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Navbar;
