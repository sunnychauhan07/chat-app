import { View, Text, StyleSheet } from "react-native";
import React, { ReactElement, ReactPortal } from "react";
import { Colors } from "../contant/colors";

undefined;

type Props = {
  children: any;
};

const PageContainer = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: Colors.white,
  },
});
export default PageContainer;
