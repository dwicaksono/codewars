function mostFrequentItemCount(collection) {
  // Do your magic. :)
  if (!collection.length) {
    return 0;
  }
  var obj = {};
  for (let i = 0; i < collection.length; i++) {
    obj[collection[i]] = obj[collection[i]] + 1 || 1;
  }
  var arr = Array.from(new Set(Object.values(obj)));
  //   var sorting = arr.sort((a, b) => b - a);
  return (result = Math.max(...arr));
}

console.log(mostFrequentItemCount([3, -1, -1])); //, 2);
console.log(
  mostFrequentItemCount([
    -13,
    5,
    -12,
    -5,
    -8,
    13,
    -4,
    3,
    -12,
    9,
    7,
    -5,
    9,
    14,
    12,
    -11,
    -14,
    -9,
    2
  ])
); //, 2);
console.log(
  mostFrequentItemCount([
    -7,
    -11,
    8,
    -15,
    -2,
    10,
    -9,
    5,
    -4,
    13,
    10,
    -7,
    -2,
    -10,
    1,
    -2,
    -5,
    -12,
    -6,
    3,
    -13,
    7,
    11,
    0
  ])
); //, 3);
console.log(mostFrequentItemCount([9])); //, 1);
console.log(mostFrequentItemCount([])); //, 0);
console.log(
  mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])
); //, 5);
