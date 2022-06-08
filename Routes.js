import React from 'react';
const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import WorkoutList from './src/Screens/WorkoutList';
import Workout from './src/Screens/Workout';
import WorkoutsData from './src/Screens/WorkoutsData';

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{ animation: 'slide_from_right' }}>
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
      <Stack.Screen
        name="StartWorkout"
        component={Workout}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WorkoutStats"
        component={WorkoutsData}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
