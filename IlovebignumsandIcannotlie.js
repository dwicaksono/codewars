// function biggest(nums) {
//   //code me
//   var str = "";
//   for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
//     str += nums[i];
//   }
//   var arrFromstr = [];
//   for (let i = 0; i < str.length; i = i + 2) {
//     console.log(str[i]);
//     arrFromstr.push([str[i], str[i + 1]]);
//   }
//   var filter = [];
//   for (let i = 0; i < arrFromstr.length; i++) {
//     var und = [];
//     var noUnd = [];
//     for (let j = 0; j < arrFromstr[i].length; j++) {
//       console.log(arrFromstr[i][j]);
//       if (arrFromstr[i][j] === undefined) {
//         und.push(arrFromstr[i][j]);
//       } else {
//         noUnd.push(arrFromstr[i][j]);
//       }
//     }
//     filter.push(noUnd);
//     und;
//   }
//   filter;
// }

function biggest(nums) {
  nums = nums.sort(
    (a, b) =>
      parseInt(b.toString() + a.toString()) -
      parseInt(a.toString() + b.toString())
  );
  if (nums[0] == 0) {
    return "0";
  }
  return nums.join("");
}

console.log(biggest([1, 2, 3]), "321");
console.log(biggest([121, 12]), "12121");
console.log(biggest([3, 30, 34, 5, 9]), "9534330");
