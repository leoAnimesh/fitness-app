import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../styles/constants";

const Catagories = ({
  item: { heading, title, time, cals, workouts, img },
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
      <Image source={img} style={{ width: 140, height: 170 }} />
      <View style={{ backgroundColor: COLORS.blue, width: "100%", height: 30 }}>
        <Text
          style={{
            fontSize: 15,
            paddingTop: 5,
            color: "#fff",
            textAlign: "center",
          }}
        >
          {heading}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 200,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#81C1FECC",
    alignItems: "center",
    textAlign: "right",
    overflow: "hidden",
  },
});

export default Catagories;
