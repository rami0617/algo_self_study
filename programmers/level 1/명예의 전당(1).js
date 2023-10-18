function solution(k, score) {
  let topK = [];
  const answer = [];

  for (let i = 0; i < score.length; i++) {
    topK.push(score[i]);
    topK.sort((a, b) => b - a);
    topK = topK.slice(0, i < k ? i + 1 : k);

    answer.push(topK[topK.length - 1]);
  }

  return answer;
}
