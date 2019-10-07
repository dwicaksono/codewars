// Should return a string representing the ranges
function toRange(arr) {
  let cekValid = [];
  let notValid = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + 1);
    console.log(arr[i + 1]);
    // if (arr[i] + 1 === arr[i + 1]) {
    //   cekValid.push(arr[i]);
    // }
    arr[i] + 1;
    cekValid.push(arr[i]);
  }
  cekValid;
}

// Should return an array
function toArray(str) {}

console.log(toRange([3, 4, 5, 6, 8, 9], "3_6,9"));
console.log(toRange([3, 4, 5, 6, 9], "3_6,9"));
// console.log(toArray("3_6,9", [3, 4, 5, 6, 9]));
