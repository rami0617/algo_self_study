function solution(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  const minimunNumber = n % 1234567;

  return fibonacci(minimunNumber + 1) % 1234567;
}

let memoization = {};

function fibonacci(x) {
  if (x === 0 || x === 1) {
    return x;
  }

  if (memoization[x] !== undefined) {
    return memoization[x];
  }

  memoization[x] = fibonacci(x - 2) + fibonacci(x - 1);

  return memoization[x] % 1234567;
}
