function persistence(num) {
  //code me
  var arr = num.toString().split("");
  arr;
  var arrNum = [];
  var count = 1;
  var output = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(output);
    count *= arr[i];
    if (count > 9) {
      //   count *= arr[i];
    }
  }
  count;
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
// console.log(persistence(25), 2);
// console.log(persistence(999), 4);
