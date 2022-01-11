import * as React from "react";
import { Image, StyleSheet } from "react-native";

const LogoIcon = require("../../assets/logo.png");
export default function Logo() {
  return <Image style={styles.image} source={LogoIcon} />;
}

const styles = StyleSheet.create({
  image: {
    width: 28.53,
    height: 26.07,
  },
});
