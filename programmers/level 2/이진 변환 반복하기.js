function solution(s) {
  let zeroCount = 0;
  let repeatCount = 0;
  let numberArray = [...s];

  while (numberArray.length !== 1) {
    numberArray = numberArray.filter((item) => {
      if (item === "0") {
        zeroCount++;
      } else {
        return item;
      }
    });

    numberArray = numberArray.length.toString(2).split("");

    repeatCount++;
  }

  return [repeatCount, zeroCount];
}
