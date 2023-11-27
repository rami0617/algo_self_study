function solution(numbers, hand) {
  const left = [1, 4, 7];
  const right = [3, 6, 9];
  const middle = [2, 5, 8, 0];

  const result = [];

  let currentRight = -1;
  let currentLeft = -1;

  for (let i = 0; i < numbers.length; i++) {
    if (right.includes(numbers[i])) {
      currentRight = numbers[i];
      result.push("R");
      continue;
    }

    if (left.includes(numbers[i])) {
      currentLeft = numbers[i];
      result.push("L");
      continue;
    }

    let leftDifference = Math.abs(numbers[i] - currentLeft);
    let rightDifference = Math.abs(numbers[i] - currentRight);

    if (currentRight === numbers[i]) {
      result.push("R");
      continue;
    }

    if (currentLeft == numbers[i]) {
      result.push("L");
      continue;
    }

    if (
      middle.includes(numbers[i]) &&
      !middle.includes(currentLeft) &&
      currentLeft > -1
    ) {
      leftDifference =
        Math.abs(left.indexOf(currentLeft) - middle.indexOf(numbers[i])) + 1;
    }
    if (
      middle.includes(numbers[i]) &&
      !middle.includes(currentRight) &&
      currentRight > -1
    ) {
      console.log(numbers[i]);
      rightDifference =
        Math.abs(right.indexOf(currentRight) - middle.indexOf(numbers[i])) + 1;
    }

    if (middle.includes(numbers[i]) && middle.includes(currentLeft)) {
      leftDifference = Math.abs(
        middle.indexOf(currentLeft) - middle.indexOf(numbers[i])
      );
    }

    if (middle.includes(numbers[i]) && middle.includes(currentRight)) {
      rightDifference = Math.abs(
        middle.indexOf(currentRight) - middle.indexOf(numbers[i])
      );
    }

    if (leftDifference === rightDifference) {
      if (hand === "right") {
        result.push("R");
        currentRight = numbers[i];
      } else {
        result.push("L");
        currentLeft = numbers[i];
      }
    } else if (leftDifference < rightDifference) {
      result.push("L");
      currentLeft = numbers[i];
    } else if (leftDifference > rightDifference) {
      result.push("R");
      currentRight = numbers[i];
    }
  }

  return result.join("");
}
