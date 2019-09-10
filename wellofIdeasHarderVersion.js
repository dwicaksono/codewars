function well(x) {
  var good = 0;
  //   x.map(a => a.toUpperCase())
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
      //   var low = x[i][j].toLowerCase();
      if (x[i][j] === "good" || x[i][j] === "gOOd" || x[i][j] === "GOOD") {
        good++;
      }
    }
  }
  good;
  if (good === 0) return "Fail!";
  if (good > 2) return "I smell a series!";
  if (good >= 1 && good <= 2) return "Publish!";
}

console.log(
  well([["bad", "bAd", "bad"], ["bad", "bAd", "bad"], ["bad", "bAd", "bad"]])
); //, 'Fail!'
console.log(
  well([
    ["gOOd", "bad", "BAD", "bad", "bad"],
    ["bad", "bAd", "bad"],
    ["GOOD", "bad", "bad", "bAd"]
  ])
); //, 'Publish!';
console.log(
  well([["gOOd", "bAd", "BAD", "bad", "bad", "GOOD"], ["bad"], ["gOOd", "BAD"]])
); //, 'I smell a series!'
