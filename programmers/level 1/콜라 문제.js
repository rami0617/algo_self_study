function solution(a, b, n) {
  let answer = 0;
  let bottle = n;

  while (bottle >= a) {
    const divideCoke = Math.floor(bottle / a) * b;

    answer += divideCoke;
    bottle = divideCoke + (bottle % a);
  }

  return answer;
}
