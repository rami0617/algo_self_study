import { validAnagram } from "./frequency-counter";

describe("1. validAnagram", () => {
  test("", () => {
    expect(validAnagram("", "")).toBeTruthy();
    expect(validAnagram("aaz", "zza")).toBeFalsy();
    expect(validAnagram("anagram", "nagaram")).toBeTruthy();
    expect(validAnagram("awesome", "awesom")).toBeFalsy();
    expect(validAnagram("qwerty", "qeywrt")).toBeTruthy();
    expect(validAnagram("texttwisttime", "timetwisttext")).toBeTruthy();
    expect(
      validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")
    ).toBeFalsy();
  });
});
