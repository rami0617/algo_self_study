function solution(absolutes, signs) {
  //🍅 for문
  // let answer = 0;

  // for(let i = 0; i < absolutes.length; i++) {
  //     if(signs[i]) {
  //         answer += absolutes[i];
  //     } else {
  //         answer -= absolutes[i];
  //     }
  // }
  // return answer;

  //🍇 reduce
  return absolutes.reduce(
    (prev, current, index) =>
      signs[index] === true ? prev + current : prev - current,
    0
  );
}
