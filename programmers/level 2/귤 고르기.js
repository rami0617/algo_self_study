function solution(k, tangerine) {
  if (k === 1) return 1;

  let count = {};
  let result = 0;

  for (let i = 0; i < tangerine.length; i++) {
    if (undefined === count[tangerine[i]]) {
      count[tangerine[i]] = 1;
    } else {
      count[tangerine[i]]++;
    }
  }

  const sortedArray = Object.entries({ ...count }).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < sortedArray.length; i++) {
    k = k - sortedArray[i][1];
    result++;
    if (k <= 0) {
      break;
    }
  }

  return result;
}
