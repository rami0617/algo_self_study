function solution(s) {
  const lowerS = s.toLowerCase();

  let numberOfp = 0;
  let numberOfy = 0;

  for (let i = 0; i < lowerS.length; i++) {
    if (lowerS[i] === "p") {
      numberOfp++;
    }
    if (lowerS[i] === "y") {
      numberOfy++;
    }
  }

  return numberOfp === numberOfy;
}
