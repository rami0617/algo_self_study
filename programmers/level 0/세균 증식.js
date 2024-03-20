function solution(n, t) {
  let time = t;
  let result = n;

  while (time !== 0) {
    result = result * 2;
    time--;
  }

  return result;
}
