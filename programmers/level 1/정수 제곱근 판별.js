function solution(n) {
  const sqrt = Math.sqrt(n);

  if (Math.floor(sqrt) === sqrt) {
    //(sqrt+1) ** 2;
    return (sqrt + 1) * (sqrt + 1);
  }

  return -1;
}
