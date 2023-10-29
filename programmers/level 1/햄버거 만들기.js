function solution(ingredient) {
  let count = 0;
  const answer = "1231";

  if (ingredient.length < 4) return 0;
  if (ingredient.length === 4 && ingredient.join("") === answer) return 1;

  const copiedIngredeint = ingredient.slice();

  for (let i = 0; i < copiedIngredeint.length - 3; i++) {
    const slicedIngredient = copiedIngredeint.slice(i, i + 4);

    if (slicedIngredient.join("") === answer) {
      count++;
      copiedIngredeint.splice(i, 4);
      i = i - 3;
      //i를 0으로 되돌리는 것이 아니라 이미 i가 현재 i가 될때까지 햄버거를 만들 수 없었으므로
      //원래 i가 시작된 지점으로 옮겨 놓는것이 맞음.
      //[2, 1, 1, 2, 3, 1, 2, 3, 1]
      //2번째 인덱스부터 1231이 되고 1231을 잘라낸 뒤 1이 시작된 지점으로 옮김.
    }
  }

  return count;
}
