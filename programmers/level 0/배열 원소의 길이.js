function solution(strlist) {
  const lengthArray = [];

  for (let i = 0; i < strlist.length; i++) {
    lengthArray.push(strlist[i].length);
  }

  return lengthArray;
}
