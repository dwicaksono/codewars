function sumAverage(arr) {
  var avg = 0;
  for (let i = 0; i < arr.length; i++) {
    var arrs = 0;
    for (let j = 0; j < arr[i].length; j++) {
      arrs += arr[i][j];
    }
    avg += arrs / arr[i].length;
  }

  return Math.floor(avg);
}
console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), 44);
console.log(sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]]), -6);
