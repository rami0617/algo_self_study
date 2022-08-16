function solution(lottos, win_nums) {
  //민우번호 lottos 44, 1, 0, 0, 31, 25
  //당첨번호 win_nums 31, 10, 45, 1, 6, 19
  //[최고순위, 최저순위]
  //같은 숫자가 몇개인지 세야함
  //0으로 처리된것들을 다 맞다고 해주고 다 안맞다고 해주고 그걸로 최고, 최저순위 표현
  let count = 0;
  const lotto = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) {
      count++;
    }
  }
  const zeroLength = lottos.filter((item) => item === 0).length;

  return [lotto[count + zeroLength], lotto[count]];
}
