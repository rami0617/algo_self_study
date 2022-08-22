function solution(phone_number) {
  const slicePhonNumberLength = phone_number.length - 4;
  const newPhoneNumber = "*".repeat(slicePhonNumberLength);

  return newPhoneNumber + phone_number.slice(slicePhonNumberLength);
}
