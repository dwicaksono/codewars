function sumMix(x) {
  var sum = 0;
  //   for (let i = 0; i < x.length; i++) sum += parseFloat(x[i]);
  //   return sum;
  for (let n of x) {
    sum += parseFloat(n);
  }
  return sum;
}

console.log(sumMix([9, 3, "7", "3"]), 22);
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42);
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 41);
