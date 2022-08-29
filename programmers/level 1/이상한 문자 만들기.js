function solution(s) {
  let index = 0;
  let newS = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      index = 0;
      newS += " ";
    } else {
      if (index % 2 === 0) {
        newS += s[i].toUpperCase();
      } else {
        newS += s[i].toLowerCase();
      }
      index++;
    }
  }

  return newS;
}
