function solution(arr) {
  const total = arr.reduce((prev, current) => prev + current);

  return total / arr.length;
}
