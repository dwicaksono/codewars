function nthSmallest(arr, pos) {
  //your code here
  //   arr.sort((a, b) => a - b);
  //   return arr[pos - 1];

  for (let i = 0; i < arr.length - 1; i) {
    if (arr[i + 1] < arr[i]) {
      let temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
      i = 0;
    } else i++;
  }
  return arr[pos - 1];
}

console.log(nthSmallest([3, 1, 2], 2), 2);
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3), 7);
console.log(nthSmallest([-5, -1, -6, -18], 4), -1);
console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5), -2);
console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4), 2);
