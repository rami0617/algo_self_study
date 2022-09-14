function solution(s, n) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }

    const isLowerCase = s[i].toLowerCase() === s[i];
    const index = alphabet.indexOf(s[i].toLowerCase());
    const newIndex = index + n;
    const oneMoreNewIndex = newIndex >= 26 ? newIndex - 26 : newIndex;

    if (isLowerCase) {
      answer += alphabet[oneMoreNewIndex];
    } else {
      answer += alphabet[oneMoreNewIndex].toUpperCase();
    }
  }

  return answer;
}
