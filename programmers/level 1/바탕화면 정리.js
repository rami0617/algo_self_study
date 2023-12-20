function solution(wallpaper) {
  let lowerRow = Infinity;
  let lowerCol = Infinity;
  let highestRow = 0;
  let highestCol = 0;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        lowerRow = Math.min(lowerRow, i + 1);
        lowerCol = Math.min(lowerCol, j + 1);
        highestRow = Math.max(highestRow, i + 1);
        highestCol = Math.max(highestCol, j + 1);
      }
    }
  }

  return [lowerRow - 1, lowerCol - 1, highestRow, highestCol];
}
