function beggars(values, n) {
  //your code here

  var result = [];
  for (let i = 0; i < n; i++) {
    var sum = 0;
    for (let j = i; j < values.length; j += n) {
      sum += values[j];
    }
    result.push(sum);
  }
  return result;
}

// function beggars(values, n){
//     var outputValues = [];
//     for (var i = 0; i < n; i++) {
//       var sum = 0;
//       for (var j = i; j < values.length; j += n) {
//         sum += values[j];
//       }
//       outputValues.push(sum);
//     }
//     return outputValues;
//   }

console.log(beggars([1, 2, 3, 4, 5], 1), [15]);
console.log(beggars([1, 2, 3, 4, 5], 2), [9, 6]);
console.log(beggars([1, 2, 3, 4, 5], 3), [5, 7, 3]);
console.log(beggars([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 0]);
console.log(beggars([1, 2, 3, 4, 5], 0), []);
