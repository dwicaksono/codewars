function sumOrProduct(array, n) {
  // your code here
  for (let i = 0; i < array.length; i++) {
    var hight = [];
    var low = [];
    var arrNow = array[0];
    if (low <= array[i]) {
      low.push(array[i]);
    } else if (hight <= low) {
      hight.push(low);
    }
  }
  low;
  hight;
}

console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4), "sum");
// console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3), "product");
// console.log(sumOrProduct([10, 20, 3, 30, 5, 4], 3), "same");
