function solution(N, stages) {
  const failure = [];
  let hash = {};
  const result = [];

  for (let i = 0; i < stages.length; i++) {
    if (hash[stages[i]]) {
      hash[stages[i]]++;
    } else {
      hash[stages[i]] = 1;
    }
  }

  let keys = Object.keys(hash);

  for (let i = 1; i < N + 1; i++) {
    if (keys[i] > N + 1) {
      continue;
    }
    if (keys.includes(i.toString())) {
      failure.push({ key: i, value: hash[i] / stages.length });
      stages = stages.filter((item) => item !== i);
    } else {
      failure.push({ key: i, value: 0 / i });
    }
  }

  failure.sort((a, b) => b.value - a.value);

  for (const key in failure) {
    result.push(failure[key].key);
  }

  return result;
}
