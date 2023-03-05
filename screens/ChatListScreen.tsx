import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Props } from "../App";

const ChatListScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <Text>ChatListScreen</Text>
      <Button
        title='Go to setting'
        onPress={() => navigation.navigate("ChatSettings")}
      />
    </SafeAreaView>
  );
};

export default ChatListScreen;
