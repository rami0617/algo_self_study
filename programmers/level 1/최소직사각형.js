function solution(sizes) {
  //모두 가로가 긴걸로 바꿔주기

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      let temp = sizes[i][0];
      sizes[i][0] = sizes[i][1];
      sizes[i][1] = temp;
    }
  }

  let maxWidth = 0;
  let maxHeight = 0;

  for (let i = 0; i < sizes.length; i++) {
    maxWidth = Math.max(sizes[i][0], maxWidth);
    maxHeight = Math.max(sizes[i][1], maxHeight);
  }

  return maxWidth * maxHeight;
}
