import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import React, { useRef } from "react";
import {
  Animated,
  Easing,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { BLACK, TURQUOISE_500, TURQUOISE_700, WHITE } from "../../utils/colors";

const animationProps = {
  duration: 300,
  useNativeDriver: false,
  easing: Easing.cubic,
};

export default function TabBar(props: BottomTabBarProps<BottomTabBarOptions>) {
  const {
    navigation: { navigate },
    state: { routeNames, index: activeIndex },
  } = props;
  const quantity = routeNames.length;
  const leftFlex = useRef(new Animated.Value(0)).current;
  const rightFlex = useRef(new Animated.Value(quantity - 1)).current;

  const renderTabItem = (label: string, index: number) => {
    const isActive = activeIndex === index;
    const labelColor = isActive ? TURQUOISE_700 : BLACK;
    const onTabPressed = () => {
      Animated.timing(leftFlex, {
        ...animationProps,
        toValue: index,
      }).start();
      Animated.timing(rightFlex, {
        ...animationProps,
        toValue: quantity - 1 - index,
      }).start();
      navigate(label);
    };
    return (
      <View key={label} style={styles.flex}>
        <TouchableWithoutFeedback onPress={onTabPressed}>
          <View style={styles.tabItemContainer}>
            <Text
              style={[
                styles.tabItemLabel,
                {
                  color: labelColor,
                },
              ]}
            >
              {label}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.fillRowContainer}>
        <Animated.View style={{ flex: leftFlex }} />
        <Animated.View style={styles.flex}>
          <View style={styles.activeContainer}></View>
        </Animated.View>
        <Animated.View style={{ flex: rightFlex }} />
      </View>
      <View style={styles.fillRowContainer}>
        {routeNames.map(renderTabItem)}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: WHITE,
  },
  fillRowContainer: {
    width: "100%",
    flexDirection: "row",
  },
  flex: {
    flex: 1,
  },
  activeContainer: {
    height: 3,
    marginHorizontal: 31,
    backgroundColor: TURQUOISE_500,
  },
  tabItemContainer: {
    alignItems: "center",
    paddingVertical: 17,
  },
  tabItemLabel: {
    fontWeight: "700",
    fontSize: 16,
  },
});
