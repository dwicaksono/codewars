function array_diff(a, b) {
  //   var obj = {};
  //   for (let i = 0; i < a.length; i++) {
  //     obj[a[i]] = obj[a[i]] + 1 || 1;
  //   }
  //   obj;
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    console.log(b[i]);
    if (a[i] !== b.includes(a[i])) {
      return b[i];
    }
  }
  //   return a.filter(value => !b.includes(value));

  //   if (!a.length) {
  //     return a;
  //   } else if (!b.length) {
  //     return a;
  //   } else {
  //     return [filtered];
  //   }
}

// console.log(array_diff([], [4, 5])); //, [], "a was [], b was [4,5]");
// console.log(array_diff([4, 3, 3], [3])); //, [4], "a was [3,4], b was [3]");
// console.log(array_diff([1, 2, 2], [2])); //, [1], "a was [3,4], b was [3]");
console.log(array_diff([1, 2, 2], [1])); //, [1], "a was [3,4], b was [3]");
console.log(
  array_diff(
    [13, 2, -9, 13, -4, -5, 10, 12, 14, -2, -19, 13, 6, -15, 0],
    [-9, 10, 14, -15, 2, 13, -2, 13, -19, -5, -4, 6]
  )
); //, [12,0], "a was [3,4], b was [3]");
// console.log(array_diff([3], [2, 1])); //, [4], "a was [3,4], b was [3]");
// console.log(array_diff([1, 8, 2], [])); //, [1, 8, 2], "a was [1,8,2], b was []");
