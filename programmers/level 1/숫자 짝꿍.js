function solution(X, Y) {
  const arrayX = [...X];
  const arrayY = [...Y];
  let answer = "";

  for (let i = 0; i < 10; i++) {
    if (X.includes(i) && Y.includes(i)) {
      const numberOfX = arrayX.filter((item) => Number(item) === i).length;
      const numberOfY = arrayY.filter((item) => Number(item) === i).length;
      let repeatNumber = Math.min(numberOfX, numberOfY);

      answer += i.toString().repeat(repeatNumber);
    }
  }

  if (answer === "") {
    return "-1";
  }

  const isZero = answer.split("").every((item) => item === "0");
  if (isZero) {
    return "0";
  }

  return answer
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
