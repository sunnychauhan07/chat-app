import "react-native-gesture-handler";
import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import type { StackScreenProps } from "@react-navigation/stack";
import ChatListScreen from "./screens/ChatListScreen";
import ChatSettingScreen from "./screens/ChatSettingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./screens/SettingsScreen";

export type HomeTabParamList = {
  ChatList: undefined;
  Setting: undefined;
};
export type RootStackParamListe = {
  Home: NavigatorScreenParams<HomeTabParamList>;
  ChatSettings: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

const Tab = createBottomTabNavigator<HomeTabParamList>();
type RootStackParamList = {
  Home: undefined;
  ChatSettings: undefined;
};

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerTitle: "" }}>
      <Tab.Screen
        name='ChatList'
        component={ChatListScreen}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='chatbubble' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Setting'
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='settings' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
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
          <Stack.Screen name='Home' component={TabNavigator} />
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

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
