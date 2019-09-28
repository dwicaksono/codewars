function combine(...arr) {
  //code me
  console.log(...arr);
  let nuArr = [];
  let max = Math.max(...arr.map(v => v.length));
  //   max;
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < arr.length; i++) {
      //   console.log(arr);
    }
  }
}

// console.log(combine(['a', 'b', 'c'], [1, 2, 3]), ['a', 1, 'b', 2, 'c', 3]);
console.log(combine(["a", "b", "c"], [1, 2, 3, 4, 5])); // [ "a",1,"b",2,"c",3, 4,5]);
// console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]),['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]);
