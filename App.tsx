import "react-native-gesture-handler";
import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import ChatListScreen from "./screens/ChatListScreen";
import ChatSettingScreen from "./screens/ChatSettingScreen";

type RootStackParamList = {
  Home: undefined;
  ChatSettings: undefined;
};
export type Props = NativeStackScreenProps<RootStackParamList>;
const Stack = createStackNavigator<RootStackParamList>();

SplashScreen.hideAsync();
export default function App() {
  const [appIsLoading, setAppIsloading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppIsloading(true);
    }, 2000);
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoading) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoading]);
  return (
    <SafeAreaProvider onLayout={onLayout} style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={ChatListScreen} />
          <Stack.Screen name='ChatSettings' component={ChatSettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
