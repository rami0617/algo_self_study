function solution(n) {
  if (n < 10) {
    return n;
  }

  const spltiedN = n.toString().split("");

  return spltiedN.reduce((prev, current) => Number(prev) + Number(current));
}
