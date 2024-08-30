import {
  sameFrequency,
  areThereDuplicates,
  averagePair,
  isSubsequence,
  maxSubarraySum,
  minSubArrayLen,
  findLongestSubstring,
} from "./practice";

describe("1. 문제 해결 패턴", () => {
  test("1) sameFrequency", () => {
    expect(sameFrequency(182, 281)).toBeTruthy();
    expect(sameFrequency(34, 14)).toBeFalsy();
    expect(sameFrequency(3589578, 5879385)).toBeTruthy();
    expect(sameFrequency(22, 222)).toBeFalsy();
  });
  test("2) areThereDuplicates", () => {
    expect(areThereDuplicates(1, 2, 3)).toBeFalsy();
    expect(areThereDuplicates(1, 2, 2)).toBeTruthy();
    expect(areThereDuplicates("a", "b", "c", "a")).toBeTruthy();
  });
  test("3) averagePair", () => {
    expect(averagePair([1, 2, 3], 2.5)).toBeTruthy();
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBeTruthy();
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBeFalsy();
    expect(averagePair([], 4)).toBeFalsy();
  });
  test("4) isSubsequence", () => {
    expect(isSubsequence("hello", "hello world")).toBeTruthy();
    expect(isSubsequence("sing", "sting")).toBeTruthy();
    expect(isSubsequence("abc", "abracadabra")).toBeTruthy();
    expect(isSubsequence("abc", "acb")).toBeFalsy();
  });
  test("5) maxSubarraySum", () => {
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
    expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
    expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toBe(5);
    expect(maxSubarraySum([2, 3], 3)).toBe(null);
  });
  test("6) minSubArrayLen ⛔️", () => {
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
    expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
    expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1);
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3);
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5);
    expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toBe(2);
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0);
  });
  test("7) findLongestSubstring ⛔️", () => {
    expect(findLongestSubstring("")).toBe(0);
    expect(findLongestSubstring("rithmschool")).toBe(7);
    expect(findLongestSubstring("thisisawesome")).toBe(6);
    expect(findLongestSubstring("thecatinthehat")).toBe(7);
    expect(findLongestSubstring("bbbbbb")).toBe(1);
    expect(findLongestSubstring("longestsubstring")).toBe(8);
    expect(findLongestSubstring("thisishowwedoit")).toBe(6);
  });
});
