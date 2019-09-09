function isNice(arr) {
  var counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] - 1) || arr.includes(arr[i] + 1)) counter++;
  }
  if (counter == arr.length && arr.length != 0) return true;
  return false;
}
console.log(isNice([2, 10, 9, 3])); //true
console.log(isNice([3, 4, 5, 7])); //false
