function solution(keymap, targets) {
  if (keymap.length === 1 && targets.length === 1) {
    const result = keymap.findIndex((item) => targets.includes(item));

    if (result === -1) {
      return [-1];
    }
  }

  let indexKeymapList = [];
  let minKeymapList = [];

  for (let i = 0; i < targets.length; i++) {
    let keyIndexList = [];
    for (let j = 0; j < targets[i].length; j++) {
      keyIndexList.push(getIndexKeymap(targets[i][j], keymap));
    }
    indexKeymapList[i] = keyIndexList;
  }

  for (let i = 0; i < indexKeymapList.length; i++) {
    let minKeymap = 0;
    for (let j = 0; j < indexKeymapList[i].length; j++) {
      const isAllInfinity = (item) => item === Infinity;
      if (indexKeymapList[i][j].every(isAllInfinity)) {
        minKeymap = 0;
        break;
      } else if (Infinity !== Math.min(...indexKeymapList[i][j])) {
        minKeymap += Math.min(...indexKeymapList[i][j]) + 1;
      }
    }

    if (minKeymap === 0) {
      minKeymapList.push(-1);
    } else {
      minKeymapList.push(minKeymap);
    }
  }

  return minKeymapList;
}

function getIndexKeymap(target, keymap) {
  let keyMapIndexList = [];

  for (let i = 0; i < keymap.length; i++) {
    if (keymap[i].indexOf(target) === -1) {
      keyMapIndexList.push(Infinity);
    } else {
      keyMapIndexList.push(keymap[i].indexOf(target));
    }
  }

  return keyMapIndexList;
}
