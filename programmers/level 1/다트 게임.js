function solution(dartResult) {
  const numberList = [];
  let index = -1;

  for (let i = 0; i < dartResult.length; i++) {
    if (
      "S" !== dartResult[i] &&
      "D" !== dartResult[i] &&
      "T" !== dartResult[i] &&
      "*" !== dartResult[i] &&
      "#" !== dartResult[i]
    ) {
      let pow = 0;

      if (dartResult[i] === "1") {
        if (dartResult[i + 2] === "S") {
          pow = 1;
        } else if (dartResult[i + 2] === "D") {
          pow = 2;
        } else if (dartResult[i + 2] === "T") {
          pow = 3;
        }
        numberList.push(Math.pow(10, pow));
      } else {
        if (dartResult[i + 1] === "S") {
          pow = 1;
        } else if (dartResult[i + 1] === "D") {
          pow = 2;
        } else if (dartResult[i + 1] === "T") {
          pow = 3;
        }
        numberList.push(Math.pow(Number(dartResult[i]), pow));
      }
    }
  }

  for (let i = 0; i < dartResult.length; i++) {
    if ("#" === dartResult[i]) {
      numberList[index] = numberList[index] * -1;
    } else if ("*" === dartResult[i]) {
      if (index - 1 >= 0) {
        numberList[index - 1] = numberList[index - 1] * 2;
        numberList[index] = numberList[index] * 2;
      } else {
        numberList[0] = numberList[0] * 2;
      }
    }

    if (
      "S" === dartResult[i] ||
      "D" === dartResult[i] ||
      "T" === dartResult[i]
    ) {
      index++;
    }
  }

  return numberList.reduce((acc, cur) => acc + cur);
}
