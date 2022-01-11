import { formatNumber } from "../utils/functions";

test("formats properly", () => {
  expect(formatNumber(2100, 2)).toBe("2,100.00");
});
