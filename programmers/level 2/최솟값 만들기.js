function solution(A, B) {
  let result = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  A.forEach((element, index) => {
    result += element * B[index];
  });

  return result;
}
