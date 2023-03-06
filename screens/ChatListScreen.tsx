import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { HomeTabScreenProps } from "../navigations/MainNavigator";

const ChatListScreen = ({ navigation }: HomeTabScreenProps<"ChatList">) => {
  return (
    <SafeAreaView>
      <Text>ChatListScreen</Text>
      <Button
        title='Go to setting'
        onPress={() => navigation.navigate("ChatScreen")}
      />
    </SafeAreaView>
  );
};

export default ChatListScreen;
