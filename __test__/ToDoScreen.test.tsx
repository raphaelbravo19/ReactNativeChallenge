import React from "react";
import renderer from "react-test-renderer";
import ToDoScreen from "../screens/ToDoScreen";

test("todo renders", () => {
  const tree = renderer.create(<ToDoScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
