function solution(sides) {
  if (sides[0] <= 2 && sides[1] <= 2) {
    return 1;
  }

  let count = 0;

  const maxSide = Math.max(sides[0], sides[1]);
  const minSide = Math.min(sides[0], sides[1]);

  for (let i = maxSide - minSide + 1; i < maxSide; i++) {
    count++;
  }

  for (let i = maxSide; i < minSide + maxSide; i++) {
    count++;
  }

  return count;
}
