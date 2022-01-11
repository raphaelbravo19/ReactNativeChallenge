import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "../components/ui";

const HomeIllustration = require("../assets/home-illustration.png");

export default function ToDoScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.illustration} source={HomeIllustration} />
      <Text style={styles.title}>Howdy partner!</Text>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>
          {
            "This is your assignment.\nFollow the instructions on the Readme file."
          }
        </Text>
        <Text style={styles.subtitle}>
          Don’t worry, it’s easy! You should have the app looking smooth in no
          time.
        </Text>
      </View>
      <Button style={styles.button}>Get Started</Button>
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
  illustration: {
    width: 206,
    height: 194,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 12,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 12,
  },
  subtitleContainer: {
    alignItems: "center",
    paddingHorizontal: 30,
  },
  button: {
    alignSelf: "stretch",
    marginHorizontal: 35,
    marginTop: 44,
    marginBottom: 150,
  },
});
