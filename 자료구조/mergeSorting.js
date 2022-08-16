//내가 처음에 작성한것
function merge(arr1, arr2) {
  //빈배열에 arr1[i]와 arr2[j]를 (둘다 0번째부터 시작) 비교한후
  //만약 arr1[i]가 arr2[j]가 더 크다면 작은걸 새배열에 넣고 i를 증가시킨 뒤 또 비교해봄
  //반대라면 새배열에 arr2[j]를 넣고 j를 증가시킨뒤 또 비교함
  let result = [];
  let i = 0;
  let j = 0;

  let length = arr1.length < arr2.length ? arr2.length : arr1.length;

  while (j < length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return result;
}

console.log(merge([], [2, 14, 99, 100]));

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
// Recrusive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
console.log(mergeSort([10, 24, 76, 73]));
