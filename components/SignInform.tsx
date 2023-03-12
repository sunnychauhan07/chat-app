import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";
import { FontAwesome, Feather } from "@expo/vector-icons";
import SubmitButton from "./SubmitButton";

const SignInform = () => {
  return (
    <>
      <Input label='Email' IconPack={Feather} icon='mail' errorText='error' />

      <Input
        label='Password'
        IconPack={Feather}
        icon='lock'
        errorText='error'
      />

      <SubmitButton onPress={() => console.log("hi")} title='sign up ' />
    </>
  );
};

export default SignInform;

const styles = StyleSheet.create({});
