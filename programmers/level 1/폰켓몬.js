function solution(nums) {
  const halfOfNum = Math.floor(nums.length / 2);
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1;
    }
  }

  if (Object.keys(hash).length >= halfOfNum) {
    return halfOfNum;
  } else {
    return Object.keys(hash).length;
  }
}
