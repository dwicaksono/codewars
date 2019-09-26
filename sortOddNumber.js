function sortArray(array) {
  // Return a sorted array.
  var odd = [];
  var even = [];
  var result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odd.push(array[i]);
    } else {
      even.push(array[i]);
    }
  }
  odd.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result.push(odd.shift());
    } else {
      result.push(even.shift());
    }
  }

  if (!array.length) {
    return [];
  } else {
    return result;
  }
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]), []);
