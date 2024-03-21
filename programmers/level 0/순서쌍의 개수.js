function solution(n) {
  let result = 1;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      result++;
    }
  }
  return result;
}
