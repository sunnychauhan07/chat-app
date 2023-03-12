import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import Input from "../components/Input";
import { FontAwesome, Feather } from "@expo/vector-icons";

const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PageContainer>
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
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
export default AuthScreen;
