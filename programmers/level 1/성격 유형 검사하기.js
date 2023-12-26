function solution(survey, choices) {
  const countList = [-3, -2, -1, 0, 1, 2, 3];
  let answerObject = {};
  const type = ["RT", "CF", "JM", "AN"];

  for (let i = 0; i < choices.length; i++) {
    const choice = countList[choices[i] - 1];

    if (Math.abs(choice) === choice) {
      if (answerObject[survey[i][1]]) {
        answerObject[survey[i][1]] = answerObject[survey[i][1]] + choice;
      } else {
        answerObject[survey[i][1]] = choice;
      }
    } else {
      if (answerObject[survey[i][0]]) {
        console.log(choice);
        answerObject[survey[i][0]] = choice * -1 + answerObject[survey[i][0]];
      } else {
        answerObject[survey[i][0]] = choice * -1;
      }
    }
  }

  const orderResult = [];
  const keys = Object.keys(answerObject);

  for (let i = 0; i < type.length; i++) {
    if (keys.indexOf(type[i][0]) !== -1 || keys.indexOf(type[i][1]) !== -1) {
      if (keys.indexOf(type[i][0]) !== -1 && keys.indexOf(type[i][1]) !== -1) {
        if (answerObject[type[i][0]] > answerObject[type[i][1]]) {
          orderResult[i] = type[i][0];
        } else if (answerObject[type[i][0]] < answerObject[type[i][1]]) {
          orderResult[i] = type[i][1];
        } else {
          if (type[i][0] < type[i][1]) {
            orderResult[i] = type[i][0];
          }
        }
      } else {
        if (keys.indexOf(type[i][0]) !== -1) {
          orderResult[i] = type[i][0];
        } else {
          orderResult[i] = type[i][1];
        }
      }
    } else {
      orderResult[i] = type[i][0];
    }
  }

  return orderResult.join("");
}
