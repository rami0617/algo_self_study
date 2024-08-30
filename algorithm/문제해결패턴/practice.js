export function sameFrequency(originalNumber, compareNumber) {
  const originalNumberObj = {};

  const originalNumberStr = originalNumber.toString();
  const compareNumberStr = compareNumber.toString();

  for (let i = 0; i < originalNumberStr.length; i++) {
    const number = originalNumberStr[i];

    if (originalNumberObj[number]) {
      originalNumberObj[number] = originalNumberObj[number] + 1;
    } else {
      originalNumberObj[number] = 1;
    }
  }

  for (let i = 0; i < compareNumberStr.length; i++) {
    const number = compareNumberStr[i];

    if (originalNumberObj[number]) {
      originalNumberObj[number] = originalNumberObj[number] - 1;
    } else {
      return false;
    }
  }

  return true;
}

export function areThereDuplicates(...args) {
  const argsObj = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (argsObj[arg]) {
      argsObj[arg] = argsObj[arg] + 1;
    } else {
      argsObj[arg] = 1;
    }
  }

  for (const key in argsObj) {
    if (argsObj[key] > 1) {
      return true;
    }
  }
  return false;
}

export function averagePair(array, average) {
  if (array.length === 0) return false;

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const middle = (array[left] + array[right]) / 2;

    if (middle === average) {
      return true;
    } else if (middle < average) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

export function isSubsequence(originalString, compareString) {
  //연속되지 않고 순서대로 포함만 되어있으면 됨.

  let i = 0;
  let j = 0;

  while (j < compareString.length) {
    if (originalString[i] === compareString[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  return i === originalString.length;
}

export function maxSubarraySum(array, number) {
  if (array.length < number) return null;

  let maxNumer = 0;
  let sum = 0;

  for (let i = 0; i < number; i++) {
    sum += array[i];
  }

  let temp = sum;
  for (let j = number; j < array.length; j++) {
    temp = temp - array[j - number] + array[j];
    maxNumer = Math.max(maxNumer, temp);
  }

  return maxNumer;
}

export function minSubArrayLen(array, number) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let length = Infinity;

  while (left < array.length) {
    if (sum < number && left < array.length) {
      sum += array[right];
      right++;
    } else if (sum >= number) {
      length = Math.min(length, Math.abs(left - right));
      sum -= array[left];
      left++;
    } else {
      break;
    }
  }

  return length === Infinity ? 0 : length;
}

export function findLongestSubstring(string) {
  //i, j에 문자열의 위치넣기
  let j = 0;
  let lookup = {};
  let max = 0;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (lookup[char] !== undefined && lookup[char] >= j) {
      j = lookup[char] + 1;
    }

    lookup[char] = i;

    max = Math.max(max, i - j + 1);
  }

  return max;
}
