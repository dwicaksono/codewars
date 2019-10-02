// function maxAndMin(arr1, arr2) {
//   //coding and coding..
//   // var limit = arr1.length;
//   // // limit;
//   // var sortArr1 = arr1.sort((a, b) => a - b);
//   // var sortArr2 = arr2.sort((a, b) => b - a);
//   // // console.log(sortArr1);
//   // // console.log(sortArr2);
//   // var countArr1 = 0;
//   // var countArr2 = 0;
//   // for (let i = 0; i < arr1.length; i++) {
//   //   countArr1 += arr1[i];
//   // }
//   // for (let i = 0; i < arr2.length; i++) {
//   //   countArr2 += arr2[i];
//   // }
//   // countArr1;
//   // countArr2;
//   // // console.log(sortArr1[limit - 1]);
//   // // console.log(sortArr2[limit - 1]);
//   // var out = [];
//   // if (countArr1 === countArr2) {
//   //   var out = [
//   //     Math.abs(sortArr1[0] - sortArr2[0]),
//   //     Math.abs(sortArr1[limit - 1] - sortArr2[0])
//   //   ];
//   // } else {
//   //   var out = [
//   //     Math.abs(sortArr1[0] - sortArr2[0]),
//   //     Math.abs(sortArr1[limit - 1] - sortArr2[limit - 1])
//   //   ];
//   // }

//   // //   for (let i = 0; i < limit; i++) {
//   // //   }
//   // return out;
//
// }

function maxAndMin(arr1, arr2) {
  let srt1 = arr1.slice().sort((a, b) => a - b),
    srt2 = arr2.slice().sort((a, b) => a - b),
    max = Math.max(
      srt2[srt2.length - 1] - srt1[0],
      srt1[srt1.length - 1] - srt2[0]
    ),
    min = Infinity;

  for (let i = 0, j = 0; i < srt1.length && j < srt2.length; )
    if (srt1[i] < srt2[j]) min = Math.min(srt2[j] - srt1[i++], min);
    else if (srt1[i] > srt2[j]) min = Math.min(srt1[i] - srt2[j++], min);
    else return [max, 0];

  return [max, min];
}
console.log(maxAndMin([3, 10, 5], [20, 7, 15, 8]), [17, 2]);
console.log(maxAndMin([3], [20]), [17, 17]);
console.log(maxAndMin([3, 10, 5], [3, 10, 5]), [7, 0]);
console.log(maxAndMin([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [9, 1]);

console.log(
  maxAndMin(
    [-870, 91, -141, -739, 707, -803, -195, -963, 99, 861],
    [796, -468, 889, 58, -765, -901, -311, -399, -764, -181, 841, -670, -589]
  ),
  [1852, 14]
);
