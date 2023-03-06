import { NavigationContainer } from "@react-navigation/native";
import AuthScreen from "../screens/AuthScreen";

import { MainNavigator } from "./MainNavigator";

export const AppNavigator = () => {
  const isAuh = false;
  return (
    <NavigationContainer>
      {isAuh && <MainNavigator />}
      {!isAuh && <AuthScreen />}
    </NavigationContainer>
  );
};
