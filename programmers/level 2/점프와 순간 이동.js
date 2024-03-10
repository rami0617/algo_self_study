function solution(n) {
  let result = 1;

  while (n > 1) {
    if (n % 2 !== 0) {
      result++;
      n = Math.ceil(n / 2) - 1;
    } else {
      n = n / 2;
    }
  }
  return result;
}
