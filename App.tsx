import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppNavigator } from "./navigations/AppNavigators";

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
      <AppNavigator />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
