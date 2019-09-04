function maps(x) {
  var result = [];
  for (let i = 0; i < x.length; i++) {
    result.push(x[i] * 2);
  }
  return result;
}

console.log(maps([1, 2, 3]), [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
