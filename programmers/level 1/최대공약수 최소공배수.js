function solution(n, m) {
  let min = 0;
  let max = 0;

  let number = n > m ? n : m;

  for (let i = 0; i < number; i++) {
    if (n % i === 0 && m % i === 0) {
      min = Math.max(min, i);
    }
  }

  if (min === 1) {
    max = n * m;
  }

  //최소공배수
  //n * m / 최대공약수 === 최소공배수
  max = (n * m) / min;

  return [min, max];
}
