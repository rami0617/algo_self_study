function solution(players, callings) {
  const copiedPlayers = players.slice();
  const newPlayers = {};

  players.forEach((player, index) => {
    newPlayers[player] = index;
  });

  callings.forEach((call) => {
    const tempIndex = newPlayers[call];
    const temp = copiedPlayers[tempIndex - 1];

    copiedPlayers[tempIndex - 1] = call;
    copiedPlayers[tempIndex] = temp;

    newPlayers[copiedPlayers[tempIndex - 1]] = tempIndex - 1;
    newPlayers[copiedPlayers[tempIndex]] = tempIndex;
  });

  return copiedPlayers;
}

// 처음풀이
// let newPlayers = players.slice();
// for(let i = 0; i < callings.length; i++) {
//   const currentIndex = newPlayers.indexOf(callings[i])
//   const swapElement = newPlayers[currentIndex - 1];
//    newPlayers[currentIndex - 1] = callings[i];
//    newPlayers[currentIndex] = swapElement;
//  }
// return newPlayers;
