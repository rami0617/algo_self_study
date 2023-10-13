function solution(k, m, score) {
  let answer = 0;
  let index = 0;
  const scoreArray = [];

  const filteredScore = score.filter((item) => item <= k).sort((a, b) => b - a);

  while (index < filteredScore.length) {
    if (filteredScore.slice(index, index + m).length === m) {
      scoreArray.push(filteredScore.slice(index, index + m));
    }

    index += m;
  }

  for (let i = 0; i < scoreArray.length; i++) {
    answer += scoreArray[i][m - 1] * m * 1;
  }

  return answer;
}
