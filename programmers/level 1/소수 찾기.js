function solution(n) {
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrimNumber(i)) {
      answer++;
    }
  }

  return answer;
}

function isPrimNumber(number) {
  const sqrtNumber = Math.sqrt(number);

  for (let i = 2; i <= sqrtNumber; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
