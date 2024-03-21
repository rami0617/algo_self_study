function solution(n) {
  if (n === 0) return 0;

  return n
    .toString()
    .split("")
    .reduce((acc, cur) => Number(acc) + Number(cur));
}
