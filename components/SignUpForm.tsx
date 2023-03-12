import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../components/Input";
import { FontAwesome, Feather } from "@expo/vector-icons";
import SubmitButton from "./SubmitButton";
const SignUpForm = () => {
  console.log("render");
  return (
    <>
      <Input
        label='First Name'
        IconPack={FontAwesome}
        icon='user-o'
        errorText='error'
      />
      <Input
        label='Last Name'
        IconPack={FontAwesome}
        icon='user-o'
        errorText='error'
      />
      <Input label='email' IconPack={Feather} icon='mail' errorText='error' />

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

export default SignUpForm;

const styles = StyleSheet.create({});
