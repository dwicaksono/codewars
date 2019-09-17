function numPrimorial(n) {
  var result = 1;
  for (var i = 2, k = 0; k != n; i++) {
    var isItPrime = true;
    for (var j = 2; j < i; j++) {
      if (i % j === 0) {
        isItPrime = false;
        break;
      }
    }
    if (isItPrime == true) {
      result *= i;
      k++;
    }
  }
  return result;
}

console.log(numPrimorial(3), 30);
console.log(numPrimorial(4), 210);
console.log(numPrimorial(5), 2310);
console.log(numPrimorial(8), 9699690);
console.log(numPrimorial(9), 223092870);
