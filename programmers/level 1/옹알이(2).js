function solution(babbling) {
  const nephewBabbling = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    count += getBabblingCount(babbling[i], nephewBabbling);
  }

  return count;
}

function getBabblingCount(babbling, nephewBabbling) {
  const fullNephewBabbling = ["aya", "ye", "woo", "ma"];

  if (0 === nephewBabbling.legnth) {
    return 0;
  }

  let copiedBabbling = babbling;
  let index = 0;
  let babblingElement = "";

  while (index < nephewBabbling.length) {
    if (
      copiedBabbling.startsWith(nephewBabbling[index]) ||
      copiedBabbling === nephewBabbling[index]
    ) {
      copiedBabbling = copiedBabbling.replace(nephewBabbling[index], "");
      babblingElement = nephewBabbling[index];
    }

    if (0 === copiedBabbling.length) {
      break;
    }

    index++;

    if (index === nephewBabbling.length) {
      const newNephewBabbling = fullNephewBabbling.filter(
        (item) => !babblingElement.includes(item)
      );

      const isContainedBabbling = newNephewBabbling.filter((item) =>
        copiedBabbling.startsWith(item)
      );

      if (isContainedBabbling.length && 4 > isContainedBabbling.length) {
        return getBabblingCount(copiedBabbling, newNephewBabbling);
      } else {
        break;
      }
    }
  }

  return 0 === copiedBabbling.length;
}
