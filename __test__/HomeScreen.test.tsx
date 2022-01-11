import React from "react";
import renderer from "react-test-renderer";
import HomeScreen from "../screens/HomeScreen";

test("home renders", () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
