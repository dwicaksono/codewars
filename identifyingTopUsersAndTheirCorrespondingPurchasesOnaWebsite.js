// function idBestUsers(...agrs) {
//   // your code here
//   console.log(agrs);
//   var limit = agrs.length;
//   limit;
//   var comb = [].concat(...agrs);
//   console.log(comb);

//   var obj = {};
//   for (let i = 0; i < comb.length; i++) {
//     obj[comb[i]] = obj[comb[i]] + 1 || 1;
//   }
//   obj;
//   var arrEntries = Object.entries(obj);
//   var sortEntrie = arrEntries.sort();
//   sortEntrie;
//   var arrValues = Array.from(new Set(Object.values(obj)));
//   arrValues;
//   var idUser = [];
//   for (let i = 0; i < sortEntrie.length; i++) {}
//   idUser;
// }

function idBestUsers(...arg) {
  // your code here
  let data = arg;
  console.log(data);

  let counts = {};
  let users = {};

  data.forEach((month, index) => {
    month.forEach(user => {
      if (!users[user]) users[user] = { months: {}, count: 0 };
      users[user].months[index] = true;
      users[user].count += 1;
    });
  });
  for (user in users) {
    let allMonths = Object.keys(users[user].months).length === data.length;
    if (allMonths) {
      if (!counts[users[user].count]) counts[users[user].count] = [];
      counts[users[user].count].push(user);
    }
  }

  let result = [];
  for (count in counts) {
    result.unshift([Number(count), counts[count].sort()]);
  }

  return result;
}
// var a1 = ["A042", "B004", "A025", "A042", "C025"];
// var a2 = ["B009", "B040", "B004", "A042", "A025", "A042"];
// var a3 = ["A042", "A025", "B004"];
// console.log(idBestUsers(a1, a2, a3), [[5, ["A042"]], [3, ["A025", "B004"]]]);

// var a1 = ["A043", "B004", "A025", "A042", "C025"];
// var a2 = ["B009", "B040", "B003", "A042", "A027", "A044"];
// var a3 = ["A041", "A026", "B005"];
// console.log(idBestUsers(a1, a2, a3), []);

a1 = ["A042", "B004", "A025", "A042", "C025"];
a2 = ["B009", "B040", "B004", "A042", "A025", "A042"];
a3 = [
  "A042",
  "B004",
  "A025",
  "A042",
  "C025",
  "B009",
  "B040",
  "B004",
  "A042",
  "A025",
  "A042"
];
var a4 = ["A042", "A025", "B004"];
console.log(idBestUsers(a1, a2, a3, a4), [
  [9, ["A042"]],
  [5, ["A025", "B004"]]
]);
