function solution(arr) {
  if (arr.length === 1) {
    arr[0] = -1;

    return arr;
  }

  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    min = Math.min(arr[i], min);
  }

  const result = arr.filter((item) => item !== min);

  return result;
}
