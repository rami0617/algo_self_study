function solution(n, a, b) {
  if (a + 1 === b && a % 2 !== 0) return 1;

  let result = 0;

  while (a !== b) {
    a = Math.round(a / 2);
    b = Math.round(b / 2);
    result++;
  }

  return result;
}
