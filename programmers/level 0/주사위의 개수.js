function solution(box, n) {
  const answer = [];

  box.forEach((item) => answer.push(Math.floor(item / n)));

  return answer.reduce((acc, cur) => acc * cur);
}
