function minValue(values) {
  //your code here
  // use new Set method => ES6
  //const unik = new Set(values); // hasil data berubah menjadi object

  //  const backToArray = [...unik]; // mengubah object ke array dengan [...variabel]
  var arr = Array.from(new Set(values)); //filter duplicate array number
  arr.sort();
  var result = "";
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    result += arr[i];
  }
  return parseFloat(result);
}

console.log(minValue([1, 3, 1]), 13);
console.log(minValue([4, 7, 5, 7]), 457);
console.log(minValue([4, 8, 1, 4]), 148);
console.log(minValue([5, 7, 9, 5, 7]), 579);
console.log(minValue([6, 7, 8, 7, 6, 6]), 678);
console.log(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);
console.log(minValue([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0);
