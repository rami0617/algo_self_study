function naiveFunction(arr) {
  //시간복잡도 O(n^2)
  //공간복잡도 O(1)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

function refactorFunction(arr) {
  //시간복잡도 O(n)
  //공간복잡도 O(1)

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

export function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let count = 1;
  let left = 0;
  let right = left + 1;

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      count++;
      left = right;
      right++;
    }
  }

  // count 변수를 사용하지 않는 법
  //   while (right < arr.length) {
  //     if (arr[left] === arr[right]) {
  //       right++;
  //     } else {
  //       left++;
  //       arr[left] = arr[right];
  //     }
  //   }

  //   return left + 1;

  return count;
}

function refactorCountUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

export function maxSubarraySum(array, count) {
  //write a function called maxSubarraySum which accepts an array of integers and a number called n.
  //The function should caculate the maximum sum of n consecutive elements in the array
  //연속된 count만큼 더했을 때 가장 큰 수 구하기

  if (array.length < count) return null;

  let i = 0;
  let sum = 0;

  for (let j = i + count; j < array.length + 1; j++) {
    const rangeSum = array.slice(i, j).reduce((acc, cur) => acc + cur, 0);
    sum = Math.max(sum, rangeSum);
    i++;
  }

  return sum;
}

function refactormaxSubarraySum(arr, num) {
  //시간복잡도 O(n)
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    //처음 한번의 합만 구하면 된다.
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    //앞에 element를 빼고 뒤에 element를 더한다.
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
