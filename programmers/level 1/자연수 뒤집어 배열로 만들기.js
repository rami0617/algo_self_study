function solution(n) {
  return n
    .toString()
    .split("")
    .map((item) => parseInt(item))
    .reverse();
}
