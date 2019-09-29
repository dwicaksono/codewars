// function nthSmallest(arrays, n) {
//   // Good luck!

//   var arr = [].concat(...arrays);
//   var sortArr = arr.sort((a, b) => a - b);
//   sortArr;
//   return sortArr[n - 1];
// }

function nthSmallest(...arrays) {
  let n = arrays.pop();
  return [].concat(...arrays).sort((a, b) => a - b)[n - 1];
}

console.log(nthSmallest([[1, 5], [2], [4, 8, 9]], 4)); // === 5);
