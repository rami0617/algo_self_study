function solution(n, lost, reserve) {
  let number = n - lost.length;

  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  let newLost = lost.filter((item) => !reserve.includes(item));
  let newReserve = reserve.filter((item) => !lost.includes(item));

  number += lost.length - newLost.length;

  newLost.sort((a, b) => a - b);

  newLost.forEach((item) => {
    if (newReserve.length === 0) {
      return;
    }
    if (newReserve.includes(item - 1)) {
      number++;
      newReserve = newReserve.filter((reserveItem) => reserveItem !== item - 1);
    } else if (newReserve.includes(item + 1)) {
      number++;
      newReserve = newReserve.filter((reserveItem) => reserveItem !== item + 1);
    }
  });

  return number;
}
