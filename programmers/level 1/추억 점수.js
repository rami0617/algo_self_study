function solution(name, yearning, photo) {
  const nameObject = [];
  const answer = [];

  for (let i = 0; i < name.length; i++) {
    nameObject.push({ name: name[i], yearning: yearning[i] });
  }

  for (let i = 0; i < photo.length; i++) {
    let yearning = 0;
    const nameList = nameObject.map((item) => item.name);

    for (let j = 0; j < photo[i].length; j++) {
      if (nameList.includes(photo[i][j])) {
        yearning += nameObject.filter((item) => item.name === photo[i][j])[0]
          .yearning;
      }
      if (photo[i].length - 1 === j) {
        answer.push(yearning);
      }
    }
  }

  return answer;
}
