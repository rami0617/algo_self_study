function solution(number, limit, power) {
  let answer = 1;

  for (let i = 2; i <= number; i++) {
    const count = getDivisor(i);

    if (count > limit) {
      answer += power;
    } else {
      answer += count;
    }
  }

  return answer;
}

function getDivisor(number) {
  if (number <= 3) {
    return 2;
  }

  let index = 1;
  let count = 0;

  const divider = Math.floor(Math.sqrt(number));

  while (index <= divider) {
    if (number / index == divider) {
      count = count - 1;
    }

    if (number % index === 0) {
      count = count + 2;
    }
    index++;
  }

  //첫번째 한 방식
  //시간초과로 통과되지 않았음.
  //   while (index <= number / 2) {
  //     if (number % index === 0) {
  //       count++;
  //     }
  //     index++;
  //   }

  return count;
}
