function makeUnique(arr) {
  // return an array of unique values
  //   let makeUnique = arr => [...new Set(arr)];
  var result = [];
  // // var same = [];
  for (let i = 0; i < arr.length; i++) {
    var select = false;
    if (arr[i] === arr[i + 1]) {
      select === true;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(makeUnique([])); //, []
console.log(makeUnique([1, 2, 3, 3])); //, [1, 2, 3];
console.log(makeUnique(["A", "A", 0])); //, ["A", 0]
