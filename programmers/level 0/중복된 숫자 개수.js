function solution(array, n) {
  let result = 0;

  array.forEach((element) => {
    if (element === n) {
      result++;
    }
  });

  return result;
}
