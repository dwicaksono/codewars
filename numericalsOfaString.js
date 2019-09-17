// function numericals(s) {
//   var result = "";
//   for (let i = 0; i < s.length; i++) {
//     var count = 0;
//     console.log(s[i]);
//     for (let j = 0; j < s.length; j++) {
//       console.log(s[j]);
//       if (s[i] !== s[j]) {
//         count++;
//       }
//     }
//   }
//   count;
//   return; // result
// }

function numericals(s) {
  let data = {};
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    if (data[s[i]]) {
      data[s[i]]++;
      newString += data[s[i]];
    } else {
      data[s[i]] = 1;
      newString += data[s[i]];
    }
  }
  data;
  return newString;
}

console.log(numericals("Hello, World!")); //, "1112111121311"
// console.log(numericals("Hello, World! It's me, JomoPipi!")); //"11121111213112111131224132411122"
// console.log(numericals("hello hello")); //, "11121122342"
// console.log(numericals("Hello")); //, "11121"
// console.log(numericals("aaaaaaaaaaaa")); //, "123456789101112"
