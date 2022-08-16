function solution(n, lost, reserve) {
  //4번 => 3,5번에게만 빌려줄 수 있음
  //n =>전체학생수
  //lost => 도난당한 학생의 번호
  //reserve => 여벌의 체육복이 있는 학생들의 번호
  //여벌의체육복을 가지고 온 학생이 체육복을 도난당했을 수 있음
  //reserve랑 lost의 교집합인 학생은 reserve에서 제외시켜야함.

  const losedStudent = n - lost.length;
  let count = 0;

  reserve.filter((item) => !lost.includes(item));

  let lostPointer = 0;
  let reservePointer = 0;

  while (reservePointer < reserve.length) {
    if (
      lost[lostPointer] + 1 === reserve[reservePointer] ||
      lost[lostPointer] - 1 === reserve[reservePointer]
    ) {
      console.log("hello", lost[lostPointer], reservePointer);
      lostPointer++;
      reservePointer++;
      count++;
      continue;
    } else {
      lostPointer++;
      reservePointer++;
    }
  }

  return losedStudent + count;
}
