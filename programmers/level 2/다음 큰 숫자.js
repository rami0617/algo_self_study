function solution(n) {
  const binaryNumber = n.toString(2);
  const oneCount = convertBinaryAndOneCount(binaryNumber);

  for (let i = n + 1; i < 1000000; i++) {
    const biggerNOneCount = convertBinaryAndOneCount(i.toString(2));

    if (biggerNOneCount === oneCount) {
      return i;
    }
  }

  function convertBinaryAndOneCount(binaryNumber) {
    return binaryNumber.split("").filter((item) => item === "1").length;
  }
}
