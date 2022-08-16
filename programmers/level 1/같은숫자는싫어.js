function solution(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result[result.length - 1] !== arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
}
