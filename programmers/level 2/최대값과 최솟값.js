function solution(s) {
  let maxNumber = -Infinity;
  let minNumber = Infinity;

  s.split(" ").forEach((num) => {
    maxNumber = Math.max(Number(num), maxNumber);
    minNumber = Math.min(Number(num), minNumber);
  });

  return minNumber.toString() + " " + maxNumber.toString();
}
