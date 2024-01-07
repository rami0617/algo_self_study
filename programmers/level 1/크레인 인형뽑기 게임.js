function solution(board, moves) {
  let newMoves = moves.slice();

  let newBoard = [];
  let count = 0;
  let result = [];

  for (let i = 0; i < board[0].length; i++) {
    newBoard[i] = [];
    for (let j = 0; j < board.length; j++) {
      newBoard[i].push(board[j][i]);
    }
  }

  for (let j = 0; j < newMoves.length; j++) {
    for (let i = 0; i < newBoard.length; i++) {
      if (i + 1 === newMoves[j]) {
        let index = 0;

        while (newBoard[i][index] === 0) {
          index++;
        }

        if (newBoard[i][index] === undefined) {
          break;
        }
        const element = newBoard[i][index];

        result.push(element);
        newBoard[i][index] = 0;
        if (
          result[result.length - 2] !== undefined &&
          result[result.length - 2] === result[result.length - 1]
        ) {
          count++;

          result.pop();
          result.pop();
        }
      }
    }
  }

  return count * 2;
}
