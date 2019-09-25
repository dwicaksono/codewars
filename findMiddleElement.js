function gimme(inputArray) {
  // Implement this function
  var copy = [];
  for (let i = 0; i < inputArray.length; i++) {
    copy.push(inputArray[i]);
  }
  inputArray.sort((a, b) => a - b);
  var count = 0;
  for (let i = 0; i < inputArray.length; i++) {
    count += inputArray[i];
  }
  var mid = Math.round(count / inputArray.length);

  for (let i = 0; i < copy.length; i++) {
    if (copy[i] === mid) {
      result = i;
    }
  }
  return result;
}

console.log(gimme([2, 3, 1])); //, 0, "Finds the index of middle element");
console.log(gimme([5, 10, 14])); //, 1, "Finds the index of middle element");
