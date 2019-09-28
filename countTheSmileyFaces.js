//return the total number of smiling faces in the array
// function countSmileys(arr) {
//   //   var arrComp = [":D", ":~D", ":-D", ":)", ";D", ";~D", ";-D", ";)"];
//   var count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr[i] === ":D" ||
//       arr[i] === ":-D" ||
//       arr[i] === ":~D" ||
//       arr[i] === ":)" ||
//       arr[i] === ":-)" ||
//       arr[i] === ":~)" ||
//       arr[i] === ";D" ||
//       arr[i] === ";-D" ||
//       arr[i] === ";~D" ||
//       arr[i] === ";)" ||
//       arr[i] === ";-)" ||
//       arr[i] === ";~)"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

function countSmileys(arr) {
  var smileys = [
    ":)",
    ";)",
    ":-)",
    ";-)",
    ";~)",
    ":~)",
    ":D",
    ";D",
    ":-D",
    ":~D",
    ";-D",
    ";~D"
  ];
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < smileys.length; j++) {
      if (arr[i] === smileys[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(countSmileys([]), 0);
console.log(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
