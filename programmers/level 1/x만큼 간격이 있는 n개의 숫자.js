function solution(x, n) {
  const result = [];
  let i = 0;

  while (n > i) {
    i++;
    result.push(x + x * (i - 1));
  }

  return result;
}
