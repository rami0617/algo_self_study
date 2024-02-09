function solution(brown, yellow) {
  const totalColor = brown + yellow;
  const divisor = [];
  const result = [];

  for (let i = totalColor - 1; i > 1; i--) {
    if (totalColor % i === 0) {
      divisor.push(i);
    }
  }

  for (let i = 0; i < divisor.length; i++) {
    const isSameYellow =
      Math.abs((divisor[i] - 2) * (divisor[divisor.length - i - 1] - 2)) ===
      yellow;

    if (isSameYellow) {
      result.push(divisor[i]);
    }
  }

  if (result.length === 1) {
    return Array(2).fill(result[0]);
  }

  return result;
}
