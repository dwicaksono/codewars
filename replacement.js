function replacement(a) {
  var arrSort = a.sort((a, b) => a - b);
  arrSort;
  if (arrSort.length === 1 && arrSort[0] > 2) {
    return [1];
  }
  var out = [];
  for (let i = 0; i < arrSort.length; i++) {
    out.push(arrSort[i - 1]);
  }
  out.unshift(1);
  var arr = out.filter(x => x !== undefined);
  if (arr[arr.length - 1] === 1) {
    arr.pop();
    arr.push(2);
  }
  return arr;

  //   var result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     arr;
  //     console.log(arr[i]);
  //   }
  //   result;
  //   arr;
}

console.log(replacement([1, 2, 3, 4, 5])); //[1,1,2,3,4]
console.log(replacement([4, 2, 1, 3, 5])); //[1,1,2,3,4]
console.log(replacement([2, 3, 4, 5, 6])); //[1,1,2,3,5]
console.log(replacement([2, 2, 2])); //[1,2,2]
console.log(replacement([360])); //[1]
console.log(replacement([1, 1, 1])); //[1,1,2]
console.log(replacement([1])); //[2]
