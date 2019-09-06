function squareSum(numbers) {
  var sum = 0;
  //   numbers.forEach(function(n) {
  //     sum += n * n;
  //   });
  //   return sum;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
    console.log(numbers[i]);
  }
  return sum;
}
console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
