function solution(x, n) {
  let i = 0;
  const result = [];

  while (n > i) {
    result.push(x + x * i);
    i++;
  }

  return result;
}
