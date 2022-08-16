function solution(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }

  const newResult = new Set([...result]);
  const copiedResult = [...newResult];

  return copiedResult.sort((a, b) => a - b);
}
