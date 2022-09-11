function solution(n) {
  const string = n.toString(3);

  const newString = string.split("").reverse().join("");

  return parseInt(newString, 3);
}
