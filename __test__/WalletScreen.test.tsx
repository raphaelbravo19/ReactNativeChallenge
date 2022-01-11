import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import renderer from "react-test-renderer";
import WalletScreen from "../screens/WalletScreen";
test("wallet renders", () => {
  const tree = renderer.create(<WalletScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
