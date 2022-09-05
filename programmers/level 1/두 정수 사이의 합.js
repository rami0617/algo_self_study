function solution(a, b) {
  let result = 0;

  if (a < b) {
    let newA = a;

    while (newA <= b) {
      result += newA;

      newA++;
    }
  } else {
    let newB = b;

    while (newB <= a) {
      result += newB;

      newB++;
    }
  }

  return result;
}
