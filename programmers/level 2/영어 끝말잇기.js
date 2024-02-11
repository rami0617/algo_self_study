function solution(n, words) {
  let result = [0, 0];
  let firstElement = words[0];
  const usedWord = [words[0]];

  for (let i = 1; i < words.length; i++) {
    const personOrder = (i % n) + 1;

    if (firstElement[firstElement.length - 1] !== words[i][0]) {
      result = [personOrder, Math.ceil((i + 1) / n)];
      break;
    }

    if (usedWord.includes(words[i])) {
      result = [personOrder, Math.ceil((i + 1) / n)];
      break;
    }

    usedWord.push(words[i]);
    firstElement = words[i];
  }

  return result;
}
