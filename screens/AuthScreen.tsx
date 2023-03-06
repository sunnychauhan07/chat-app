import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import Input from "../components/Input";

const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PageContainer>
        <Input label='First Name' />
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
export default AuthScreen;
