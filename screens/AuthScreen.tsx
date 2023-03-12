import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";

import SignInform from "../components/SignInform";
import SignUpForm from "../components/SignUpForm";
import { Colors } from "../contant/colors";

const AuthScreen = () => {
  const [isSignUp, setIsSignup] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {/* todo should add the logo of the application */}

      <PageContainer>
        <ScrollView>
          <KeyboardAvoidingView
            style={styles.keyboardavoidingview}
            behavior={Platform.OS === "ios" ? "height" : undefined}
            keyboardVerticalOffset={100}
          >
            {isSignUp ? <SignUpForm /> : <SignInform />}
            <TouchableOpacity
              onPress={() => setIsSignup((prev) => !prev)}
              style={styles.linkContainer}
            >
              <Text style={styles.link}>{`Switch to ${
                isSignUp ? "Sign in" : "Sign up"
              }`}</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  link: {
    color: Colors.blue,
    letterSpacing: 0.4,
  },
  keyboardavoidingview: {
    flex: 1,
    justifyContent: "center",
  },
});
export default AuthScreen;
