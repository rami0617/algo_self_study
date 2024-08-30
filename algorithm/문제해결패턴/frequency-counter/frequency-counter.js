function navieFunction(arr1, arr2) {
  // O(n)^
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i]);
    // indexOf는 루프를 돌며 찾아냄.

    if (correctIndex === -1) {
      return false;
    }

    arr1.splice(correctIndex, 1);
  }

  return true;
}

function refactorFunction(arr1, arr2) {
  //O(n)

  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const value of arr1) {
    frequencyCounter1[value] = frequencyCounter1[value]
      ? ++frequencyCounter1[value]
      : 1;
  }

  for (const value of arr2) {
    frequencyCounter2[value] = frequencyCounter2[value]
      ? ++frequencyCounter2[value]
      : 1;
  }

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

export function validAnagram(originalString, compareString) {
  if (originalString.length !== compareString.length) return false;

  let originalStringCounter = {};
  let compareStringCounter = {};

  for (const value of originalString) {
    originalStringCounter[value] = originalStringCounter[value]
      ? ++originalStringCounter[value]
      : 1;
  }

  for (const value of compareString) {
    compareStringCounter[value] = compareStringCounter[value]
      ? ++compareStringCounter[value]
      : 1;
  }

  for (const key in originalStringCounter) {
    if (!key in compareStringCounter) {
      return false;
    }

    if (originalStringCounter[key] !== compareStringCounter[key]) {
      return false;
    }
  }

  return true;
}

function refactoringValidAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const lookup = {};

  for (let i = 0; i < arr1.length; i++) {
    let letter = arr1[i];

    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < arr2.length; i++) {
    let letter = arr2[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
