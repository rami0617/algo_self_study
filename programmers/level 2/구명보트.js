function solution(people, limit) {
  people.sort((a, b) => b - a);

  let result = people.length;
  let i = 0;
  let j = people.length - 1;

  while (i < j) {
    if (people[i] + people[j] <= limit) {
      result--;
      i++;
      j--;
    } else {
      if (i + 1 === j) {
        j--;
      }
      i++;
    }
  }
  return result;
}
