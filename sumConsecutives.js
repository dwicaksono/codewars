// function sumConsecutives(s) {
//   // your code
//   var arr = [];
//   var arr1 = [];
//   for (let i = 0; i < s.length; i = i + 2) {
//     var count = 0;
//     console.log(s[i]);
//     var now = s[0];
//     if (s[i] !== now) {
//       arr.push(s[i], s[i + 1]);
//       s[0] === s[i];
//       now = s[i];
//       count++;
//     } else {
//       arr1.push(s[i]);
//     }
//   }
//   count;
//   arr;
//   arr1;
// }

function sumConsecutives(s) {
  var sum = 0,
    sums = [];
  for (var i = 0; i < s.length; i++) {
    sum += s[i];
    if (s[i] != s[i + 1]) {
      sums.push(sum);

      sum = 0;
    }
  }

  return sums;
}

console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1]), [1, 12, 0, 4, 6, 1]);
// console.log(sumConsecutives([1, 1, 7, 7, 3]), [2, 14, 3]);
// console.log(sumConsecutives([-5, -5, 7, 7, 12, 0]), [-10, 14, 12, 0]);
// console.log(sumConsecutives([3, 3, 3, 3, 1]), [12, 1]);
