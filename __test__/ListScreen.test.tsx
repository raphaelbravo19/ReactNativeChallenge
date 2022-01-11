import React from "react";
import renderer from "react-test-renderer";
import ListScreen from "../screens/ListScreen";

test("list renders", () => {
  const tree = renderer.create(<ListScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
