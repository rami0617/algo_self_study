function solution(s) {
  //🍘 argument를 수정할 수 있다.
  const number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < number.length; i++) {
    s = s.split(number[i]).join(i);
  }

  return Number(s);
}
