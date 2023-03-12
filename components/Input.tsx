import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Colors } from "../contant/colors";
import { FontAwesome } from "@expo/vector-icons";

interface props {
  label: string;
  IconPack: any;
  icon: string;
  errorText: string;
}
const Input = ({ label, IconPack, icon, errorText }: props) => {
  console.log("child render");
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {icon && (
          <IconPack name={icon} size={24} color='black' style={styles.icon} />
        )}
        <TextInput style={styles.input} />
      </View>

      {errorText && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    marginVertical: 8,

    letterSpacing: 0.3,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: Colors.nearlyWhite,
    borderRadius: 2,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
    color: Colors.lightgrey,
  },
  input: {
    color: Colors.blue,
    flex: 1,
    letterSpacing: 0.3,
    paddingTop: 0,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: "red",
    fontSize: 15,
    letterSpacing: 0.3,
  },
});

export default Input;
