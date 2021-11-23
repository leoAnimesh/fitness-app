import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SIZES } from "../styles/constants";
const Cards = ({
  item: { heading, title, time, cals, bgColor, workouts },
  navigation,
}) => {
  return (
    <View>
      <View style={[styles.Topcards, { backgroundColor: bgColor }]}>
        <View style={styles.CardTexts}>
          <Text
            style={{
              fontSize: SIZES.md,
              paddingHorizontal: SIZES.md,
            }}
          >
            {heading}
          </Text>
          <Text
            style={{
              fontSize: SIZES.sm + 3,
              opacity: 0.5,
              paddingHorizontal: SIZES.md,
            }}
          >
            {title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: SIZES.md,
            }}
          >
            <TouchableOpacity
              style={styles.cardButtons}
              onPress={() => {
                navigation.navigate("workoutList", {
                  heading,
                  title,
                  time,
                  cals,
                  bgColor,
                  workouts,
                  navigation,
                });
              }}
            >
              <Text style={{ fontSize: 11 }}>▶ {time} min</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardButtons}>
              <Text style={{ fontSize: 11 }}>🔥 {cals} Cal </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.imageCard}>
          <Image
            style={{
              flex: 1,
              width: "100%",
              resizeMode: "contain",
            }}
            source={require("../../assets/fullbody.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Topcards: {
    backgroundColor: "#99D8EF80",
    borderRadius: SIZES.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.md,
    width: 300,
    height: 170,
    marginRight: SIZES.sm,
  },
  CardTexts: {
    width: "50%",
    justifyContent: "space-evenly",
    height: 140,
  },
  cardButtons: {
    backgroundColor: "#fff",
    width: 65,
    height: 25,
    borderRadius: SIZES.sm,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SIZES.sm,
    marginTop: SIZES.sm,
  },
  imageCard: {
    width: "50%",
    marginTop: SIZES.sm,
  },
});

export default Cards;
