function solution(n) {
  const oddNumber = n % 2 !== 0 ? n + 1 : n;
  const result = [1];

  for (let i = 2; i < oddNumber; i = i + 2) {
    result.push(i + 1);
  }

  return result;
}
