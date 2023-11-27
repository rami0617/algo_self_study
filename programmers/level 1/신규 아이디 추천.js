function solution(new_id) {
  let answer = "";

  const acceptedCharacter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "-", "_", "."];

  for (let i = 0; i < new_id.length; i++) {
    let lowerCaseNewId = new_id[i].toLowerCase();

    if (/[a-z]/.test(lowerCaseNewId)) {
      answer += lowerCaseNewId;
    }

    if (
      acceptedCharacter.includes(new_id[i]) ||
      acceptedCharacter.includes(Number(new_id[i]))
    ) {
      answer += new_id[i];
    }

    if (/\.{2,}/g.test(new_id)) {
      answer = answer.replace(/\.{2,}/g, ".");
    }
  }

  if (/\.{2,}/g.test(answer)) {
    answer = answer.replace(/\.{2,}/g, ".");
  }

  if ("." === answer[0]) {
    answer = answer.slice(1);
  }

  if ("." === answer[answer.length - 1]) {
    answer = answer.slice(0, -1);
  }

  if (!answer) {
    answer = "a";
  }

  if (answer.length >= 16) {
    answer = answer.slice(0, 15);

    if (answer[answer.length - 1] === ".") {
      answer = answer.slice(0, -1);
    }
  }

  if (answer.length <= 3) {
    answer = answer.padEnd(3, answer[answer.length - 1]);
  }

  return answer;
}
