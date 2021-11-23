import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../styles/constants";

const ExeciseCard = ({ item: { name, steps, time, id } }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: 100,
        marginHorizontal: 10,
        backgroundColor: "#D9D9D930",
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <TouchableOpacity
        style={{
          width: 25,
          height: 25,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          marginLeft: 20,
          backgroundColor: COLORS.purple,
        }}
      >
        <Text width={{ width: 30 }}>{id}</Text>
      </TouchableOpacity>
      <View style={{ width: 100 }}>
        <Image
          style={{ width: "90%", flex: 1, resizeMode: "contain" }}
          source={require("../../assets/execise.webp")}
        />
      </View>
      <View>
        <Text style={{ marginBottom: 5, fontSize: 15 }}>{name}</Text>
        <Text style={{ fontSize: 18, opacity: 0.5 }}>
          {steps === 0 ? `${time} sec` : `${steps}x`}
        </Text>
      </View>
    </View>
  );
};

export default ExeciseCard;
