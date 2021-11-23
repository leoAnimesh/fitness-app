import { FullBodyWorkOut } from "./FullBodyWorkout";
import { ABSWorkout } from "./ABSWorkout";
import { ArmWorkout } from "./ArmWorkout";

export const TopWorkout = [
  {
    heading: "Weight loss training",
    title: "Full body workout",
    time: 30,
    cals: 120,
    bgColor: "#99D8EF80",
    workouts: FullBodyWorkOut,
  },
  {
    heading: "Belly fat loss training",
    title: "Abs workout",
    time: 30,
    cals: 120,
    bgColor: "#FDA0DD80",
    workouts: ABSWorkout,
  },
  {
    heading: "Arms training",
    title: "Arms workout",
    time: 30,
    cals: 120,
    bgColor: "#AEACF980",
    workouts: ArmWorkout,
  },
];
