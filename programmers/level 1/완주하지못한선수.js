function solution(participant, completion) {
  let hashedParticipant = {};

  if (participant.length === completion.length) {
    return;
  }

  for (const key of participant) {
    hashedParticipant[key]
      ? hashedParticipant[key]++
      : (hashedParticipant[key] = 1);
  }

  // 🍓 reduce를 이용한 풀이
  //                                                  {}
  //   const hashedParticipant = participant.reduce((people, person) => {
  //     if (person in people) {
  //         people[person]++
  //     } else {
  //         people[person] = 1;
  //     }
  //     return people;
  // }, {})

  for (let i = 0; i < completion.length; i++) {
    if (participant.includes(completion[i])) {
      hashedParticipant[completion[i]]--;
    }
  }

  for (const key in hashedParticipant) {
    if (hashedParticipant[key] !== 0) {
      return key;
    }
  }
}

//hash 이용한 풀이

function solution(participant, completion) {
  if (participant.length === completion.length) {
    return;
  }

  const hashed = new Map();

  participant.forEach((name) =>
    hashed.set(name, hashed.get(name) ? hashed.get(name) + 1 : 1)
  );
  completion.forEach((name) => hashed.set(name, hashed.get(name) - 1));

  for (const [key, value] of hashed) {
    if (value !== 0) {
      return key;
    }
  }
}

//frequency counter

//1. for of
const hasehdParticipant1 = {};

for (const key of participant) {
  if (hasehdParticipant1[key]) {
    hasehdParticipant1[key]++;
  } else {
    hasehdParticipant1[key] = 1;
  }
}

//2. reduce

const hasehdParticipant2 = participant.reduce((people, person) => {
  if (person in people) {
    people[person]++;
  } else {
    people[person] = 1;
  }
  return people;
}, {});
