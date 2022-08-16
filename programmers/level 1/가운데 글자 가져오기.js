function solution(s) {
  const center = s.length % 2;

  if (center === 1) {
    return s[Math.floor(s.length / 2)];
  } else {
    return s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)];
  }
}
