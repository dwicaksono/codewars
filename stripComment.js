// function solution(input, markers) {
//   var arr = input.split(" ");
//   arr;
//   markers;
//   var trash = [];
//   var arrfil = [];
//   var temp = "";
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j]);
//       console.log(markers[j]);
//       if (arr[i][j] === markers[j]) {
//         temp += arr[i][j];
//       }
//     }
//     temp;
//   }
// }
function solution(input, markers) {
  var comments = input.split("\n");
  for (var i in markers) {
    for (var j in comments) {
      var line = null;
      var idx = comments[j].indexOf(markers[i]);
      if (idx >= 0) {
        comments[j] = comments[j].substring(0, idx).trim();
      }
    }
  }
  return comments.join("\n");
}
console.log(
  solution(
    "apples, plums % and bananas\npears\noranges !applesauce",
    ["%", "!"],
    "apples, plums\npears\noranges"
  )
);
// console.log(solution("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne"));
