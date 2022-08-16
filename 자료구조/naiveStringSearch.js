function naiveSearch(longString, shortString) {
  //긴 문자열안에 짧은 문자열이 얼마나(몇 개)가 포함되어있는지 확인해야함.
  // for문을 돌며 확인할 수 있음.
  //만약 중복된 문자열이 여러개인것도 판단해야함
  let count = 0;
  if (longString === shortString) {
    return 1;
  }

  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < shortString.length; j++) {
      if (longString[i + j] !== shortString[j]) {
        break;
      }
      if (j === shortString.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch("lolie loled", "lol"));
