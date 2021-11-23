import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Catagories = ({
  item: { heading, title, time, cals, workouts },
  navigation,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate("workoutList", {
          heading,
          title,
          time,
          cals,
          workouts,
        });
      }}
      style={styles.container}
    >
      <Text>{heading}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 180,
    borderRadius: 20,
    marginRight: 10,
    marginVertical: 10,
    backgroundColor: "#81C1FECC",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Catagories;
