function solution(numbers, hand) {
  const left = [1, 4, 7];
  const right = [3, 6, 9];
  const middle = [2, 5, 8, 0];

  const result = [];

  let currentRight = [3, 0];
  let currentLeft = [3, 2];

  for (let i = 0; i < numbers.length; i++) {
    if (right.includes(numbers[i])) {
      currentRight = [right.indexOf(numbers[i]), 2];
      result.push("R");
      continue;
    } else if (left.includes(numbers[i])) {
      currentLeft = [left.indexOf(numbers[i]), 0];
      result.push("L");
      continue;
    } else {
      const target = [middle.indexOf(numbers[i]), 1];
      let leftDifference =
        Math.abs(target[0] - currentLeft[0]) +
        Math.abs(target[1] - currentLeft[1]);

      let rightDifference =
        Math.abs(target[0] - currentRight[0]) +
        Math.abs(target[1] - currentRight[1]);

      if (leftDifference < rightDifference) {
        result.push("L");
        currentLeft = [middle.indexOf(numbers[i]), 1];
      } else if (leftDifference > rightDifference) {
        result.push("R");
        currentRight = [middle.indexOf(numbers[i]), 1];
      } else if (leftDifference === rightDifference) {
        if (hand === "right") {
          result.push("R");
          currentRight = [middle.indexOf(numbers[i]), 1];
        } else {
          result.push("L");
          currentLeft = [middle.indexOf(numbers[i]), 1];
        }
      }
    }
  }

  return result.join("");
}
