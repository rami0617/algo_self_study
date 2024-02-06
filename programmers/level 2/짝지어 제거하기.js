function solution(s) {
  if (s.length % 2 !== 0) return 0;

  const slitedString = s.split("");

  const stack = [s[0]];

  for (let i = 1; i < slitedString.length; i++) {
    if (stack[stack.length - 1] === slitedString[i]) {
      stack.pop();
    } else {
      stack.push(slitedString[i]);
    }
  }

  return stack.length > 0 ? 0 : 1;
}
