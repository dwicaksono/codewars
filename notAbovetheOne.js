function binary(arr) {
  var result = [[], []];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 || arr[i] === 0) {
      result[0].push(arr[i]);
    } else {
      result[1].push(i);
    }
  }
  return result;
}
console.log(binary([0, 1, 2, 1, 0, 2, 1, 1, 1, 0, 4, 5, 6, 2, 1, 1, 0])); //[[0,1,1,0,1,1,1,0,1,1,0],[2,5,10,11,12,13]]
console.log(binary([0, 1, 1, 2, 0])); //[[0,1,1,0],[3]]
console.log(binary([2, 2, 0])); //[[0],[0,1]]
console.log(binary([0, 1, 2, 1, 0, 2, 1, 1])); //[[0,1,1,0,1,1],[2,5]]
console.log(binary([1])); //[[1],[]]
