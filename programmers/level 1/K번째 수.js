function solution(array, commands) {
  let answer;
  let answerArray = [];

  for (let i = 0; i < commands.length; i++) {
    answer = array.slice(commands[i][0] - 1, commands[i][1]);
    answer.sort((a, b) => a - b);
    answerArray.push(answer[commands[i][2] - 1]);
    answer;
  }

  return answerArray;
}
