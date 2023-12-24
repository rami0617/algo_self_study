function solution(today, terms, privacies) {
  let termsObject = {};

  let newToday = Number(today.split(".").join(""));

  newToday = calculateDay(
    newToday.toString().slice(0, 4),
    newToday.toString().slice(4, 6),
    newToday.toString().slice(6)
  );

  const resultArray = [];

  for (let i = 0; i < terms.length; i++) {
    termsObject = { ...termsObject, [terms[i][0]]: terms[i].slice(2) };
  }

  for (let i = 0; i < privacies.length; i++) {
    const [date, type] = privacies[i].split(" ");
    const expirationDate =
      calculateDay(date.slice(0, 4), date.slice(5, 7), date.slice(8)) +
      termsObject[type] * 28;

    if (expirationDate <= newToday) {
      resultArray.push(i + 1);
    }
  }

  return resultArray;
}

function calculateDay(year, month, day) {
  return Number(year) * 12 * 28 + Number(month) * 28 + Number(day);
}
