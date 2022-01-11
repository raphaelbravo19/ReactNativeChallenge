import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { TURQUOISE_500, WHITE } from "../../utils/colors";

interface ButtonProps {
  children: string;
}
export default function Button(props: TouchableOpacityProps & ButtonProps) {
  const { style, children } = props;
  return (
    <TouchableOpacity {...props} style={[styles.container, style]}>
      <Text style={styles.label}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: TURQUOISE_500,
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: WHITE,
  },
});
