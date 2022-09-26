function solution(a, b) {
  const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let sum = 0;

  for (let i = 0; i < a; i++) {
    sum += month[i];
  }
  sum += b;

  if (sum % 7 === 0) {
    return "THU";
  } else {
    return day[(sum % 7) - 1];
  }
}
