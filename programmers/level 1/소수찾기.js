function solution(n) {
  //π₯ν¨μ¨μ±μ΄ μ’μ§ μμ. λ€μνμ΄λ΄μΌν .
  let number = 0;
  const result = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        number++;
      }
      if (i === j) {
        if (number === 2) {
          result.push(i);
        }
        number = 0;
      }
    }
  }
  return result.length;
}
