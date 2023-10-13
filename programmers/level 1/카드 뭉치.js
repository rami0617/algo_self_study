function solution(cards1, cards2, goal) {
  let copiedCards1 = cards1;
  let copiedCards2 = cards2;
  let count = 0;

  for (let i = 0; i < goal.length; i++) {
    if (copiedCards1[0] === goal[i]) {
      copiedCards1.shift();
      count++;
    } else if (copiedCards2[0] === goal[i]) {
      copiedCards2.shift();
      count++;
    }
  }

  if (
    (copiedCards1.length === 0 && copiedCards2.length === 0) ||
    count === goal.length
  ) {
    return "Yes";
  } else {
    return "No";
  }
}
