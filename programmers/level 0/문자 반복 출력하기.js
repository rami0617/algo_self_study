function solution(my_string, n) {
  let newString = "";

  for (let i = 0; i < my_string.length; i++) {
    newString += my_string[i].repeat(n);
  }

  return newString;
}
