function findOutlier(integers) {
  //your code here

  var odd = [];
  var even = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      even.push(integers[i]);
    } else {
      odd.push(integers[i]);
    }
  }

  if (even.length > odd.length) {
    return odd[0];
  }
  return even[0];
}

// function findOutlier(arr){
//     var even = arr.filter(function(num) {
//         return num % 2 === 0;
//     });
//     var odd = arr.filter(function(num) {
//         return num % 2 !== 0;
//     });
//     return even.length > odd.length ? odd[0] : even[0];
//   }

console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);
