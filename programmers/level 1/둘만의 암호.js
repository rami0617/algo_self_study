function solution(s, skip, index) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  alphabet = alphabet.filter((item) => !skip.includes(item));

  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let alphabetIndex = alphabet.indexOf(s[i]);

    if (
      alphabetIndex + index >= alphabet.length &&
      alphabet.length - skip.length >= index
    ) {
      answer += alphabet[alphabetIndex + index - alphabet.length];
    } else if (alphabet.length - skip.length <= index) {
      answer += alphabet[(index + alphabetIndex) % alphabet.length];
    } else {
      answer += alphabet[alphabetIndex + index];
    }
  }

  return answer;
}
