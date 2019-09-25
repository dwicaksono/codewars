function highestRank(arr) {
  //Your Code logic should written here
  var obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }
  var max = Math.max(...Array.from(Object.values(obj)));
  var keys = Array.from(Object.keys(obj));
  var values = Array.from(Object.values(obj));
  var result = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] === max) {
      result = keys[i];
    }
  }
  return parseInt(result);
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); //, 12);
console.log(highestRank([10, 8, 8, 8, 7, 8, 4, 10, 12])); //, 12);
