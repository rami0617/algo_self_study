function solution(s) {
  let result = "";

  result += typeof s[0] === "string" ? s[0].toUpperCase() : s[0];

  for (let i = 1; i < s.length; i++) {
    result +=
      typeof s[i] === "string" && s[i - 1] === " "
        ? s[i].toUpperCase()
        : s[i].toLowerCase();
  }

  return result;
}
