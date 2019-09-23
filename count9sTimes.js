// return the number of 9's used to count out 1 to n
function number9(n) {
  var arr = [];
  for (let i = 0; i <= n; i++) {
    if (n % 9 === 0) {
    }
    arr.push(i.toString());
  }
  arr;
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
      if (arr[i][j] === "9") {
        count++;
      }
    }
  }
  return count;
}

console.log(number9(1)); //, 0, "Nein!");
// console.log(number9(9)); //, 1, "Nein!");
console.log(number9(100)); //, 20, "Nein!");
console.log(number9(98)); //, 20, "Nein!");
// console.log(number9(565754)); //, 275645, "Nein!");
// console.log(number9(10000000000)); //, 10000000000, "Nein!");
