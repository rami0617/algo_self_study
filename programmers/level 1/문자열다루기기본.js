function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const numberS = Number(s[i]);

    if (Number.isNaN(numberS)) {
      return false;
    }
  }
  return true;
}
