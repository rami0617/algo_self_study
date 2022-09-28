function solution(n) {
  //🥜효율성이 좋지 않음. 다시풀어봐야햠.
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
