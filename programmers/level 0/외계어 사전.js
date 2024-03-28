function solution(spell, dic) {
  let hasAllSpell = false;

  for (let i = 0; i < dic.length; i++) {
    let hasSpell = true;
    for (let j = 0; j < spell.length; j++) {
      if (!dic[i].includes(spell[j])) {
        hasSpell = false;
      }

      if (j === spell.length - 1) {
        if (hasSpell === true) {
          hasAllSpell = true;
        }
      }
    }
  }

  return hasAllSpell ? 1 : 2;
}
