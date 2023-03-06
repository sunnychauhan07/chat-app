import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import ChatListScreen from "../screens/ChatListScreen";

import { Ionicons } from "@expo/vector-icons";
import SettingsScreen from "../screens/SettingsScreen";
import ChatSettingScreen from "../screens/ChatSettingScreen";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ChatScreen from "../screens/ChatScreen";
const Stack = createStackNavigator<RootStackParamListe>();

export type HomeTabParamList = {
  ChatList: undefined;
  Setting: undefined;
};
export type RootStackParamListe = {
  Home: NavigatorScreenParams<HomeTabParamList>;
  ChatSettings: undefined;
  ChatScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

type RootStackParamList = {
  Home: undefined;
  ChatSettings: undefined;
  ChatScreen: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;
const Tab = createBottomTabNavigator<HomeTabParamList>();
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
export const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Home'
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='ChatSettings'
        component={ChatSettingScreen}
        options={{
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name='ChatScreen'
        component={ChatScreen}
        options={{
          headerBackTitle: "back",
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamListe {}
  }
}
