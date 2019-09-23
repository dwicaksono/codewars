// Given arr1 = [3,10,5], arr2 = [20,7,15,8]
//  should return [17,2] because 20 - 3 = 17, 10 - 8 = 2
//  maxAndMin([3,10,5],[20,7,15,8]) === [17,2]
//  maxAndMin([3],[20]) === [17,17]
//  maxAndMin([3,10,5],[3,10,5]) === [7,0]
//  maxAndMin([1,2,3,4,5],[6,7,8,9,10]) === [9,1]

// a = max dari arr2 - min dari arr1
// b = max dari arr1 - min genap dari arr2

// cari nilai terkecil genap dari arr2 lalu simpan
// sort arr1(asending) dan arr2 sort(desending)

// function maxAndMin(arr1, arr2) {
//   //coding and coding..
//   var evenArr2 = [];
//   //   var result = [];
//   var des = arr1.sort((a, b) => b - a);
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 === 0) {
//       evenArr2.push(arr2[i]);
//     }
//   }
//   evenArr2.sort((a, b) => a - b);
//   var b = Math.abs(des[0] - evenArr2[0]);
//   var sortArr1 = arr1.sort((a, b) => a - b);
//   var sortArr2 = arr2.sort((a, b) => b - a);
//   var a = sortArr2[0] - sortArr1[0];

//   return [a, b];
// }

function maxAndMin(arr1, arr2) {
  var genapArr2 = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
      genapArr2.push(arr2[i]);
    }
  }
  genapArr2.sort((a, b) => a - b);
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => b - a);
  genapArr2;
  arr1;
  arr2;
  var result = [];
  var a = Math.abs(arr1[0] - arr2[0]);
  var b = Math.abs(arr1[arr1.length - 1] - genapArr2[0]);
  b;
  a;
  result.push(a, b);
  return result;
}

// console.log(maxAndMin([3, 10, 5], [20, 7, 15, 8]), [17, 2]);
// console.log(maxAndMin([3], [20]), [17, 17]);
// console.log(maxAndMin([3, 10, 5], [3, 10, 5]), [7, 0]);
// console.log(maxAndMin([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [9, 1]);
console.log(
  maxAndMin(
    [
      99144,
      -57433,
      34647,
      -39005,
      -37079,
      -51119,
      15940,
      61541,
      76240,
      -61681,
      95932,
      -79439,
      -41419,
      -71292,
      -81485,
      -86704
    ],
    [
      -86363,
      61265,
      5808,
      59971,
      50469,
      31841,
      84666,
      -97400,
      -29239,
      33444,
      82876,
      -19918,
      -72856,
      66667,
      -72980,
      21258,
      56742,
      22431,
      92572,
      89524,
      -6096,
      24087,
      97302,
      -29429
    ]
  ),
  [196544, 276]
);
