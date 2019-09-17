// function oddOnesOut(nums) {
//   // your code here
//   nums.sort();
//   nums;

//   var list = [];
//   for (let i = 0; i < nums.length; i += 2) {
//     console.log(nums[i]);
//     if (nums[i] === nums[i + 1]) {
//       list.push(nums[i], nums[i + 1]);
//     }
//   }
//   console.log(list);
// }

function oddOnesOut(nums) {
  var ans = [];
  for (var i = 0; i < nums.length; ++i) {
    var count = 0;
    for (var j = 0; j < nums.length; ++j) {
      if (nums[i] == nums[j]) count++;
    }
    count;
    console.log(typeof count);
    if (count % 2 == 0) ans.push(nums[i]);
  }
  return ans;
}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3])); //, [1, 1]
console.log(oddOnesOut([75, 68, 75, 47, 68])); // , [75, 68, 75, 68]
console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67])); //, [67, 67]
console.log(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100])); // [100, 100, 100, 100]
console.log(
  oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50])
); // [44, 79, 50, 44, 79, 50]
