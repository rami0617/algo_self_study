function binarySearch(array, value) {
  //왼쪽과 오른쪽의 중간을 구해서 그 중간보다 값이 큰지 작은지 비교.
  //만약 크다면 왼쪽의 포인터를 가운데 + 1해서 다시 중간을 구함
  //만약 작다면 오른쪽의 포인터를 가운데 -1해서 다시 중간을 구함

  let left = 0;
  let right = array.length - 1;
  let center = Math.floor((right + left) / 2);

  while (array[center] !== value && left <= right) {
    if (array[center] > value) {
      //오른쪽의 포인터를 가운데로 옮겨야함
      right = center - 1;
    } else {
      //왼쪽의 포인터를 가운데로 옮겨야함
      left = center + 1;
    }
    center = Math.floor((right + left) / 2);
    if (array[center] === value) {
      return center;
    }
  }
  return -1;
}
