function solution(id_list, report, k) {
  let userId = {};
  let reportObject = new Set();

  for (let i = 0; i < id_list.length; i++) {
    userId[id_list[i]] = 0;
  }

  for (let i = 0; i < report.length; i++) {
    const [reporter, user] = report[i].split(" ");

    if (!reportObject[user]) {
      reportObject[user] = new Set();
    }

    reportObject[user].add(reporter);
  }

  for (const [key, value] of Object.entries(reportObject)) {
    if (value.size >= k) {
      value.forEach((item) => {
        userId[item]++;
      });
    }
  }

  return Object.values(userId);
}
