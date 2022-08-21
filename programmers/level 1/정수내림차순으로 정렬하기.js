function solution(n) {
  const splitedN = n
    .toString()
    .split("")
    .sort((a, b) => b - a);

  const mapping = splitedN.map((item) => parseInt(item)).join("");

  return Number(mapping);
}
