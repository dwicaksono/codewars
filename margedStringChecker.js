// function isMerge(s, part1, part2) {
//   s = s.split("");
//   part1 = part1.split("");
//   part2 = part2.split("");
//   var arr = part1.concat(part2).join("");

//   //code me

//   var obj = {};
//   for (const letter of arr) {
//     if (obj[letter]) {
//       obj[letter]++;
//     } else {
//       obj[letter] = 1;
//     }
//   }

//   var arrA = Array.from(Object.values(obj));

//   var objA = {};
//   for (const letter of s) {
//     if (objA[letter]) {
//       objA[letter]++;
//     } else {
//       objA[letter] = 1;
//     }
//   }
//   var arrOriginal = Array.from(Object.values(objA));

//   var countOri = 0;
//   for (let i = 0; i < arrOriginal.length; i++) {
//     countOri += arrOriginal[i];
//   }

//   var countMerger = 0;
//   for (let i = 0; i < arrA.length; i++) {
//     countMerger += arrA[i];
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== s[i]) {
//       return false;
//     } else if (countOri !== countMerger || arrOriginal.length !== arrA.length) {
//       return false;
//     }
//   }
//   return true;
// }

function isMerge(s, part1, part2) {
  if (s.length != part1.length + part2.length) {
    return false;
  } else if (s.length == 0) {
    return true;
  } else if (s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2)) {
    console.log(s);
    return true;
  } else if (s[0] == part2[0] && isMerge(s.slice(1), part2.slice(1), part1)) {
    return true;
  } else return false;
}
console.log(isMerge("codewars", "code", "wars"));
// console.log(
//   isMerge("Can we merge it? No, we can't", "anemrgYee !", "C w ee it? s, wcan")
// );
// console.log(isMerge("codewars", "code", "warss"));
// console.log(isMerge("codewars", "code", "wars"));
// console.log(isMerge("codewars", "cdw", "oears"));
// console.log(!isMerge("codewars", "cod", "wars"));
// console.log(isMerge("Bananas from Bahamas", "Bahas", "Bananas from am"));
