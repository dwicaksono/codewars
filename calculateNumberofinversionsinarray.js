// Calculate the number of inversions in array
function countInversions(array) {
  // TODO
  var count = 0;

  for (let i = 0; i < array.length - 1; i) {
    if (array[i + 1] < array[i]) {
      const temp = array[i + 1];
      array[i + 1] = array[i];
      array[i] = temp;
      i = 0;
      count++;
    } else i++;
  }
  return count;
}

console.log(countInversions([])); //, 0, 'Empty array has 0 inversions');
console.log(countInversions([1, 2, 3])); //, 0, 'Sorted array has 0 inversions');
console.log(countInversions([2, 1, 3])); //, 1, 'Array [2,1,3] only has one inversion');
console.log(countInversions([6, 5, 4, 3, 2, 1])); //, 15, 'Array [6,5,4,3,2,1] has 15 inversions');
console.log(countInversions([6, 5, 4, 3, 3, 3, 3, 2, 1])); //, 30, 'Array [6,5,4,3,3,3,3,2,1] has 30 inversions');
