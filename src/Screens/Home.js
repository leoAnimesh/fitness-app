import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TextInput, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../styles/constants";
import Cards from "../components/Cards";
import Catagories from "../components/Catagories";
import Navbar from "../components/Navbar";
import { StatusBar } from "expo-status-bar";

const Home = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.Conatiner}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <View style={{ flex: 0.8 }}>
        {/* top header  */}
        <View style={styles.TopHeader}>
          <Ionicons name="menu" size={24} color="black" />
          <Text style={{ fontSize: 18 }}>Home</Text>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>

        {/* search bar  */}
        <View style={styles.searchbar}>
          <Ionicons name="search" size={20} color="black" />
          <TextInput style={styles.TextInput} placeholder="Search.." />
          <Octicons name="settings" size={20} color="black" />
        </View>
      </View>

      <View style={{ flex: 1.5 }}>
        <Text style={{ fontSize: 18, marginVertical: 10, opacity: 0.6 }}>
          Top Workouts 💪
        </Text>
        {/* top workouts */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.Workouts}
        >
          <Cards bgColor={"#99D8EF80"} navigation={navigation} />
          <Cards bgColor={"#FDA0DD80"} />
        </ScrollView>
      </View>

      <View style={{ flex: 1.5 }}>
        <Text style={{ fontSize: 18, paddingBottom: 10, opacity: 0.6 }}>
          Catagories
        </Text>
        {/* catgories */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.Catagories}
        >
          <Catagories />
          <Catagories />
          <Catagories />
        </ScrollView>
      </View>

      {/* bottom nav */}
      <View style={{ flex: 0.2 }}>
        <Navbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Conatiner: {
    padding: SIZES.md,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  TopHeader: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 50,
    marginVertical: SIZES.lg,
    paddingHorizontal: SIZES.sm,
    borderRadius: 20,
    backgroundColor: COLORS.gray,
  },
  TextInput: {
    width: "85%",
    height: 45,
    paddingHorizontal: SIZES.sm,
    backgroundColor: COLORS.gray,
    opacity: 0.5,
  },
  Workouts: {
    marginBottom: SIZES.sm,
    borderRadius: SIZES.md,
  },
  Catagories: {
    marginBottom: SIZES.sm,
    borderRadius: SIZES.md,
  },
});

export default Home;
