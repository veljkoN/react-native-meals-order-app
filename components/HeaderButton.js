import React from "react";
import { StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      IconComponent={Ionicons}
      iconSize={23}
      //color={Platform.OS === "android" ? "yellow" : Colors.primary}
      {...props}
    />
  );
};

export default CustomHeaderButton;
