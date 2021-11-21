import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import ExeciseCard from "../components/ExeciseCard";
import { COLORS } from "../styles/constants";
import { FullBodyWorkOut } from "../Data/FullBodyWorkout";

const WorkoutList = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barstyle="light-content" backgroundColor={COLORS.purple} />
      <View
        style={{
          backgroundColor: COLORS.purple,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          flex: 1,
          paddingTop: 20,
          paddingLeft: 20,
        }}
      >
        <View
          style={{
            width: "50%",
          }}
        >
          <Text style={{ fontSize: 25, marginBottom: 20, color: "#fff" }}>
            Full Body {"\n"}Workout
          </Text>
          <Text style={{ fontSize: 15, marginBottom: 10 }}>⏰ 30 min</Text>
          <Text style={{ fontSize: 15 }}>💪 19 workouts</Text>
        </View>
        <View style={{ width: "50%" }}>
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
      <View style={{ flex: 2 }}>
        <ScrollView style={{ flex: 1 }}>
          {FullBodyWorkOut.map((item, idx) => (
            <ExeciseCard key={idx} item={item} />
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.blue,
        }}
      >
        <Text style={{ fontSize: 15, textTransform: "uppercase" }}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutList;
