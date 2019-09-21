function countPositivesSumNegatives(input) {
  // var positiv = [];
  // var countpos = 0;
  // var negative = [];
  // var sumnegative = 0;
  // for (let i = 0; i < input.length; i++) {
  //   if (input[i] < 0) {
  //     negative.push(input[i]);
  //   } else {
  //     positiv.push(input[i]);
  //   }
  // }
  // positiv.sort((a, b) => a - b);
  // var arrPos = [];
  // for (let i = 0; i < positiv.length; i++) {
  //   if (positiv[i] === positiv[i + 1]) {
  //     positiv.splice(i, i + 1);
  //   } else {
  //     arrPos.push(positiv[i]);
  //   }
  // }
  // for (let i = 0; i < arrPos.length; i++) {
  //   countpos += 1;
  // }
  // for (let i = 0; i < negative.length; i++) {
  //   sumnegative += negative[i];
  // }
  // if (input.length === null || input.length === 0) {
  //   return [];
  // }
  // return [countpos, sumnegative];

  if (input == null || input.length == 0) return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0; i < input.length; ++i) {
    if (input[i] > 0) ++positive;
    else negative += input[i];
  }
  positive;

  return [positive, negative];
}
console.log(
  countPositivesSumNegatives([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    -11,
    -12,
    -13,
    -14,
    -15
  ])
); // [10, -65];
console.log(
  countPositivesSumNegatives([
    0,
    2,
    3,
    0,
    5,
    6,
    7,
    8,
    9,
    10,
    -11,
    -12,
    -13,
    -14
  ])
); //[8, -50];
