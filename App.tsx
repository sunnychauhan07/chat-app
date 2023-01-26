import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
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
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
