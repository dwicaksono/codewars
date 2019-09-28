// function clean_string(s) {
//   //	... your code ...
//   var arr = s.split("");
//   var trash = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "#") {
//       trash.pop();
//     } else {
//       trash.push(arr[i]);
//     }
//   }
//   return trash;
// }
function clean_string(s) {
  const result = [];
  for (const c of s) {
    if (c === "#") {
      result.pop();
    } else {
      result.push(c);
    }
  }
  return result.join("");
}

console.log(clean_string("abc#d##c"), "ac");
console.log(clean_string("abc####d##c#"), "");
