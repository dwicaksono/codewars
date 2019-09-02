function cubeOdd(arr) {
  // insert code here >.<
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    var cubed = arr[i] * arr[i] * arr[i];
    if (isNaN(cubed)) return undefined;
    if (arr[i] % 2 !== 0) sum += cubed;
  }
  return sum;
}
console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3, -2, 2, 3]), 0);
console.log(cubeOdd(["a", 12, 9, "z", 42]), undefined);
