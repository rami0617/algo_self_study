function solution(food) {
  const foodArray = food.filter((item, index) => index !== 0);

  for (let i = 0; i < foodArray.length; i++) {
    if (foodArray[i] <= 1) {
      continue;
    } else if (foodArray[i] % 2 !== 0) {
      foodArray[i] = foodArray[i] - 1;
    }
  }

  const count = foodArray.reduce((acc, item) => acc + item);

  let answer = "";
  let index = 0;

  for (let i = 0; i < foodArray.length; i++) {
    if (foodArray[i] > 1) {
      answer += String(index + 1).repeat(foodArray[index] / 2);
    }
    index++;
  }

  const splitedArray = answer.split("").reverse();

  answer += "0" + splitedArray.join("");

  return answer;
}
