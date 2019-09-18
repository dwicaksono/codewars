function sumOfDifferences(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });
  var result = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    result += arr[i] - arr[i + 1];
  }
  return result;
}

console.log(sumOfDifferences([1, 2, 10]), 9);

console.log(sumOfDifferences([-3, -2, -1]), 2);
