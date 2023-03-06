import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState, useCallback } from "react";
import { images } from "../contant/img";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../contant/colors";
const ChatScreen = () => {
  const [messageText, setMessageText] = useState("");

  const onChangeText = (text: string) => {
    setMessageText(text);
  };

  const sendMessage = useCallback(() => {
    console.log("send");
    setMessageText("");
  }, [messageText]);

  console.log(messageText);
  return (
    <SafeAreaView edges={["right", "left", "bottom"]} style={styles.container}>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <ImageBackground
          source={images.ChatBackground}
          style={styles.backgroundImage}
        />
        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={() => console.log("pressed")}
            style={styles.mediaButton}
          >
            <Feather name='plus' size={24} color={Colors.blue} />
          </TouchableOpacity>

          <TextInput
            style={styles.textbox}
            onChangeText={onChangeText}
            value={messageText}
            onSubmitEditing={sendMessage}
          />

          {messageText === "" ? (
            <TouchableOpacity
              onPress={() => console.log("pressed")}
              style={styles.mediaButton}
            >
              <Feather name='camera' size={24} color={Colors.blue} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => sendMessage()}
              style={[styles.mediaButton, styles.sendButton]}
            >
              <Feather name='send' size={20} color={Colors.white} />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  screen: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },

  textbox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Colors.lightgrey,
    marginHorizontal: 15,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  mediaButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
  },
  sendButton: {
    backgroundColor: Colors.blue,
    borderRadius: 50,
    padding: 8,
    width: 35,
  },
});
export default ChatScreen;
