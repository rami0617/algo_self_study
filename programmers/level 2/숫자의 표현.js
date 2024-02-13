function solution(n) {
  if (n === 1) return 1;

  let count = 1;
  let index = 1;

  for (let i = index; i <= Math.ceil(n / 2); i++) {
    let result = 0;
    for (let j = index; j <= n; j++) {
      result += j;
      if (result === n) {
        count++;
        index++;
        break;
      }
      if (result > n || j === n) {
        index++;
        break;
      }
    }
  }

  return count;
}
