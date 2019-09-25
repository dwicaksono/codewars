// function longest(arr, n) {
//   //code me
//   var sortMoreLength = [];
//   var sortOneLength = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length === 1) {
//       sortOneLength.push(arr.sort()[i]);
//     } else if (arr[i].length > 1) {
//       sortMoreLength.push(arr.sort((a, b) => b.length - a.length)[i]);
//     }
//   }
//   var result = "";
//   for (let j = 0; j < arr.length; j++) {
//     if (j + 1 === n) {
//       result += arr[j];
//     }
//   }
//   return result;
// }
function longest(arr, n) {
  var arrcopy = arr.slice(0);
  arrcopy.sort(
    (a, b) => b.length - a.length || arr.indexOf(a) - arr.indexOf(b)
  );
  return arrcopy[n - 1];
}

console.log(longest(["Hello", "World", "Codewars", "Katas"], 3)); //,'World');
console.log(longest(["Hello", "World", "Codewars", "Katas"], 4)); //,'Katas');
console.log(
  longest(["aa", "bb", "cc", "dd", "eee", "b", "f", "ff", "hhh", "gggg"], 4)
); //,'aa');
console.log(longest(["a", "b", "c", "d", "e", "f", "g", "h", "i", "k"], 1)); //,'a');
console.log(
  longest(["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l"], 1)
); //,'a');
