import { ABSWorkout } from "./ABSWorkout";
import { FullBodyWorkOut } from "./FullBodyWorkout";
import { ArmWorkout } from "./ArmWorkout";

export const WorkoutCatagories = [
  {
    heading: "Fullbody",
    title: "Full body workout",
    time: 30,
    cals: 120,
    workouts: FullBodyWorkOut,
    img: require("../../assets/fullbody.png"),
  },
  {
    heading: "Abs",
    title: "Abs workout",
    time: 30,
    cals: 120,
    workouts: ABSWorkout,
    img: require("../../assets/body.png"),
  },
  {
    heading: "Arms",
    title: "Arms workout",
    time: 30,
    cals: 120,
    workouts: ArmWorkout,
    img: require("../../assets/Arms.png"),
  },
];
