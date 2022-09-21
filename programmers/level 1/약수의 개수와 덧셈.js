function solution(left, right) {
  let count = 0;
  let answer = 0;

  for (let i = left; i <= right; i++) {
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
      if (j === i) {
        if (count % 2 === 0) {
          answer += i;
        } else {
          answer -= i;
        }
        count = 0;
      }
    }
  }

  return answer;
}
