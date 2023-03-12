import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../contant/colors";

interface props {
  disabled: boolean;
  color: string;
  title: string;
  onPress: () => void;
}
const SubmitButton = ({ disabled, color, title, onPress }: props) => {
  const enabledColor = color || Colors.primary;
  const disabledcolor = Colors.lightgrey;
  const bgColor = disabled ? disabledcolor : enabledColor;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{ ...styles.button, ...{ backgroundColor: bgColor } }}
      onPress={disabled ? () => {} : onPress}
    >
      <Text style={{ color: disabled ? Colors.nearlyWhite : "white" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
