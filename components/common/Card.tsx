import React, { ReactNode } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { VBLACK, WHITE } from "../../utils/colors";
interface CardProps {
  children: ReactNode | ReactNode[];
}
export default function Card(props: ViewProps & CardProps) {
  const { style, children } = props;
  return (
    <View {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: 8,
    elevation: 2,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { height: 1, width: 0 },
    shadowColor: VBLACK,
  },
});
