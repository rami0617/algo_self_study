function solution(number) {
  let result = 0;

  for (let i = 0; i < number.length; i++) {
    result += addNumber(number[i], number.slice(i + 1, number.length));
  }

  return result;
}

function addNumber(specificNumber, remainingNumber) {
  let count = 0;

  for (let i = 0; i < remainingNumber.length; i++) {
    for (let j = i; j < remainingNumber.length; j++) {
      const specificNumberArray = [specificNumber];

      if (i === j) {
        continue;
      }

      specificNumberArray.push(remainingNumber[i], remainingNumber[j]);

      const reducedArray = specificNumberArray.reduce((acc, cur) => acc + cur);

      if (reducedArray === 0) {
        count++;
      }
    }
  }
  return count;
}
