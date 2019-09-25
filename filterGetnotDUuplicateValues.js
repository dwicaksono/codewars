var array1 = ["a", "b", "c", "d", "e"];
var array2 = ["b", "d", "f"];

var tempArr = array2.filter(function(item) {
  return !array1.includes(item);
});

// var tempArr = array2.filter(item => !array1.includes());

array1 = array1.filter(function(item) {
  return !array2.includes(item);
});
// var tempArr1 = array2.filter(item => !array1.includes());
array2 = tempArr;

console.log(array1); // [ 'a', 'c', 'e' ]
console.log(array2);
