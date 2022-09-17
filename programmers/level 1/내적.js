function solution(a, b) {
  if (a.length !== b.length) {
    return;
  }

  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}
