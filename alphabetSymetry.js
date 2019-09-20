function solve(arr) {
  //code
  var kamus = "abcdefghijklmnopqrstuvwxyz".split("");
  var result = [];
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].toLowerCase() === kamus[j]) {
        count++;
      }
    }
    // result[i] = count;
    // count = 0;
    result.push(count);
    count = 0;
  }

  return result;
}

console.log(solve(["abode", "ABc", "xyzD"])); //, [4, 3, 1]);
console.log(solve(["abide", "ABc", "xyz"])); //, [4, 3, 0]);
console.log(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"])); //, [6,5,7]);
console.log(solve(["encode", "abc", "xyzD", "ABmD"])); //, [1, 3, 1, 3]);
