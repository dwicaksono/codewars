function makeUnique(arr) {
  // Your code here

  // var list = [];
  // for (let i = 0; i < arr.length; i++) {
  //   var dontPush = false;
  //   for (let j = 0; j < list.length; j++) {
  //     if (arr[i] === list[j]) dontPush = true;
  //   }
  //   if (dontPush === false) list.push(arr[i]);
  // }
  // return list;
  return Array.from(new Set(arr));
}

console.log(makeUnique([])); //  []
console.log(makeUnique([1, 2, 3, 3])); //  [1, 2, 3]
console.log(makeUnique(["A", "A", 0])); //  ["A", 0]
