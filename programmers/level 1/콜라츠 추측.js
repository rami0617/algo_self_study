function solution(num) {
  let count = 0;
  let num2 = num;

  while (count <= 500) {
    if (count === 500) {
      return -1;
    }

    if (num2 === 1) {
      return count;
    }

    if (num2 % 2 === 0) {
      num2 = num2 / 2;
    } else {
      num2 = num2 * 3 + 1;
    }
    count++;
  }
}
