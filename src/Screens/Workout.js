import { useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Workout = ({ route }) => {
  const [workout, setWorkOut] = useState(0);
  const [hide, sethide] = useState(false);
  const { heading, workouts } = route.params;
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar barstyle="light-content" backgroundColor={colors.background} />
      <View>
        <Text>Execise Animation</Text>
      </View>
      <View>
        <View>
          <Text>{heading}</Text>
          <Text>{workouts[workout].name}</Text>
          <Text>
            {workouts[workout].steps === 0
              ? `Time : ${workouts[workout].time} sec`
              : `Steps : ${workouts[workout].steps}x`}
          </Text>
          {hide ? null : (
            <TouchableOpacity
              onPress={() => {
                for (let i = 0; i < workouts.length; i++) {
                  setTimeout(() => {
                    setWorkOut(workout + 1);
                  }, 3000);
                }
              }}
            >
              <Text>Next 👉</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Workout;
