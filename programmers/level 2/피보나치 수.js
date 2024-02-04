function solution(n) {
  let result = [0, 1];

  for (let i = 2; i <= n; i++) {
    result[i] = (result[i - 2] % 1234567) + (result[i - 1] % 1234567);
  }

  return result[result.length - 1] % 1234567;
}
