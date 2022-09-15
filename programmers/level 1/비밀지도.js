function solution(n, arr1, arr2) {
  let answer = "";
  const answerArray = [];

  for (let i = 0; i < arr1.length; i++) {
    let firstRadixTwo = arr1[i].toString(2);
    let secondRadixTwo = arr2[i].toString(2);

    if (firstRadixTwo.length !== n) {
      firstRadixTwo = firstRadixTwo.padStart(n, "0");
    }

    if (secondRadixTwo.length !== n) {
      secondRadixTwo = secondRadixTwo.padStart(n, "0");
    }

    for (let j = 0; j < n; j++) {
      if (firstRadixTwo[j] === "0" && secondRadixTwo[j] === "0") {
        answer += " ";
      } else {
        answer += "#";
      }
    }
    answerArray.push(answer);
    answer = "";
  }

  return answerArray;
}
