function solution(s) {
  if (s.length === 1) return Number(s);

  const withoutGap = s.split(" ");

  return withoutGap.reduce((acc, cur, index) => {
    if ("Z" === cur) {
      return (acc -= Number(withoutGap[index - 1]));
    } else {
      return Number(acc) + Number(cur);
    }
  }, 0);
}
