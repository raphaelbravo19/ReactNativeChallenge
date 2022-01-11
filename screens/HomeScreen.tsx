import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "../components/ui";
import { Store } from "../context";
import { WHITE } from "../utils/colors";

export default function HomeScreen() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { dispatch } = useContext(Store);

  const navigation = useNavigation();

  const onSignIn = () => {
    if (name === "" || password === "") {
      alert("Incorrect username or password");
      return;
    }
    dispatch({ type: "SIGNIN", payload: { username: name } });
    navigation.navigate("List");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Input
        value={name}
        onChangeText={setName}
        placeholder={"Enter your name"}
        containerStyle={styles.input}
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder={"Enter your password"}
        secureTextEntry
        containerStyle={styles.input}
      />
      <Button onPress={onSignIn} style={styles.button}>
        Sign in
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 28,
  },
  input: {
    marginTop: 16,
  },
  button: {
    marginTop: 44,
    marginHorizontal: 5,
    marginBottom: 200,
  },
});
