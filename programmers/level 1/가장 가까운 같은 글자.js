function solution(s) {
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    if (false === s.slice(0, i).includes(s[i])) {
      answer.push(-1);
    } else {
      answer.push(i - s.slice(0, i).lastIndexOf(s[i]));
    }
  }

  return answer;
}
