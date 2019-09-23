function findUniq(arr) {
  // do magic
  // var obj = {};
  // for (let i = 0; i < arr.length; i++) {
  //   obj[arr[i]] = obj[arr[i]] + 1 || 1;
  // }
  // var newArr1 = Array.from(Object.keys(obj));
  // for (let i = 0; i < newArr1.length; i++) {
  //   if (obj[newArr1[i]] === 1) {
  //     return parseFloat(newArr1[i]);
  //   }
  // }
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

console.log(findUniq([0, 1, 0])); //, 1);
console.log(findUniq([1, 1, 1, 2, 1, 1])); //, 2);
console.log(findUniq([3, 10, 3, 3, 3])); //, 10);
console.log(findUniq([3, 4, 4, 4, 10, 3, 3, 3])); //, 10);
console.log(findUniq([3, 4, 4, 4, 0.585694115774454, 3, 3, 3])); //, 10);
