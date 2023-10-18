function solution(s) {
  if (s.length <= 1) {
    return s.length;
  }

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const result = getDiffirentCount(s.slice(i, s.length), s[i]);
    i += result - 1;

    count++;
  }

  return count;
}

function getDiffirentCount(s, centerString) {
  let diffrenceCount = 0;
  let sameCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (centerString === s[i]) {
      sameCount++;
    } else if (centerString !== s[i]) {
      diffrenceCount++;
    }

    if (sameCount === diffrenceCount) {
      break;
    }
  }

  return diffrenceCount + sameCount;
}
