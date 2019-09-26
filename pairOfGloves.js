// function numberOfPairs(gloves) {
//   //My hands are freezing
//   var obj = {};
//   for (let i = 0; i < gloves.length; i++) {
//     obj[gloves[i]] = obj[gloves[i]] + 1 || 1;
//   }
//   obj;
//   var arr = Array.from(Object.values(obj));
//   arr;
//   var count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       count += arr[i] / 2;
//     } else {
//       count += (arr[i] - 1) / 2;
//     }
//   }
//   return count;
// }

function numberOfPairs(gloves) {
  gloves = gloves.sort();
  let count = 0;
  for (var i = 0; i < gloves.length; i++) {
    if (gloves[i] === gloves[i + 1]) {
      count++;
      i++;
    }
  }

  return count;
}

console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]));
// console.log(numberOfPairs(["red", "green", "blue"]));
// console.log(
//   numberOfPairs([
//     "gray",
//     "black",
//     "purple",
//     "purple",
//     "gray",
//     "black",
//     "black",
//     "black",
//     "black",
//     "black",
//     "black",
//     "purple",
//     "purple",
//     "purple",
//     "purple",
//     "purple",
//     "purple",
//     "purple",
//     "purple",
//     "purple",
//     "purple",
//     "purple",
//     "purple"
//   ])
// );
