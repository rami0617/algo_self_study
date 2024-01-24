function solution(s) {
  const stack = [];

  if (s.length % 2 !== 0) return false;

  [...s].forEach((item) => {
    if (item === "(") {
      stack.push(item);
    } else if (item === ")") {
      stack.pop();
    }
  });

  return stack.length === 0;
}
