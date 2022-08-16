function solution(s) {
  if (s.length === 0) {
    return;
  }

  const splitedS = s.split("");
  splitedS.sort().reverse();

  for (let i = 0; i < splitedS.length; i++) {
    if (splitedS[i].toLowerCase() !== splitedS[i]) {
      splitedS.concat(splitedS[i]);
    }
  }

  return splitedS.join("");
}
