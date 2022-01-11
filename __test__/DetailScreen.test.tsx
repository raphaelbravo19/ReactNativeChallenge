import React from "react";
import renderer from "react-test-renderer";
import DetailScreen from "../screens/DetailScreen";

test("detail renders", () => {
  const tree = renderer.create(<DetailScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
