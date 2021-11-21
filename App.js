import React from "react";
import { StyleSheet, StatusBar, useColorScheme } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Home";
import WorkoutList from "./src/Screens/WorkoutList";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="workoutList"
          component={WorkoutList}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
});
