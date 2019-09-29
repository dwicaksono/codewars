// function combine(...arr) {
//   //code me
//   console.log(...arr);
//   let genapStep1 = [];
//   let ganjilStep1 = [];

//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       genapStep1.push(arr[i]);
//     } else {
//       ganjilStep1.push(arr[i]);
//     }

//     var transArr = [].concat(...arr);
//     var arrStep;
//     for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
//        arrStep = arr[i];
//     }
//     arrStep
//     //   let max = Math.max(...arr.map(v => v.length));
//     //     max;
//     //   for (let i = 0; i < max; i++) {
//     //     for (let j = 0; j < arr.length; i++) {
//     //         // console.log(arr);
//     //         arr[j][i]?nuArr.push(arr[j][i]):1
//     //     }
//     //     console.log(arr)
//     //   }
//     nuArr;
//   }
// }
function combine(...args) {
  let max = args.slice();
  args;
  max;
  max.sort((a, b) => b.length - a.length);
  console.log(max);
  let res = [];
  for (let i = 0; i < max[0].length; i++) {
    for (let j = 0; j < max[0].length; j++) {
      if (args[j] !== undefined && args[j][i] !== undefined)
        res.push(args[j][i]);
    }
  }
  return res;
}
// console.log(combine(['a', 'b', 'c'], [1, 2, 3]), ['a', 1, 'b', 2, 'c', 3]);
// console.log(combine(["a", "b", "c"], [1, 2, 3, 4, 5])); // [ "a",1,"b",2,"c",3, 4,5]);
console.log(combine(["a", "b", "c"], [1, 2, 3, 4, 5], [6, 7], [8])); //, ["a",1,6,8,"b",2,7,"c",3, 4,5]);
