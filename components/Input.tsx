import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Colors } from "../contant/colors";

interface props {
  label: string;
}
const Input = ({ label }: props) => {
  return (
    <View>
      <Text>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: Colors.nearlyWhite,
    borderRadius: 2,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});

export default Input;
