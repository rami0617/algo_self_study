import { countUniqueValues, maxSubarraySum } from "./multi-pointer";

describe("1. countUniqueValues", () => {
  test("", () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
    expect(countUniqueValues([])).toBe(0);
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
  });
});

describe("2. maxSubarraySum", () => {
  test("", () => {
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
    expect(maxSubarraySum([4, 2, 1, 6], 1)).toBe(6);
    expect(maxSubarraySum([], 4)).toBe(null);
  });
});
