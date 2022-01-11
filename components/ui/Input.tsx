import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { GRAY_100, GRAY_500, WHITE } from "../../utils/colors";

interface InputProps {
  containerStyle?: StyleProp<ViewStyle>;
}

export default function Input(props: TextInputProps & InputProps) {
  const { containerStyle, style, ...inputProps } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        {...inputProps}
        style={[styles.input, style]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderColor: GRAY_100,
    borderWidth: 1,
    borderRadius: 6,
    overflow: "hidden",
  },
  input: {
    paddingHorizontal: 13,
    paddingVertical: 9,
    fontSize: 16,
    fontWeight: "400",
    color: GRAY_500,
  },
});
