function solution(n, m, section) {
  if (m === 1) {
    return section.length;
  }

  let answer = 0;
  let copiedSection = section;

  while (copiedSection.length > 0) {
    copiedSection = copiedSection.filter(
      (item) => copiedSection[0] + m - 1 < item
    );

    answer++;
  }

  return answer;
}
