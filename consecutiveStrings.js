// function longestConsec(strarr, k) {
//   // your code
//   var copy = [];
//   for (let i = 0; i < strarr.length; i++) {
//     copy.push(strarr[i]);
//   }
//   var sorting = strarr.sort((a, b) => b.length - a.length);
//   var arrOdd = [];
//   var arrEven = [];
//   var l = 100;
//   for (let i = 0; i < k; i++) {
//     console.log(strarr[i].length);
//     console.log(copy[i].length);
//     if (copy[0].length % 2 === 0) {
//       arrEven.push(sorting[i]);
//     } else {
//       arrOdd.push(copy[i]);
//     }
//     // arr.push(copy[i]);
//   }
//   arrEven;
//   arrOdd
//   //   var result = arr.join("");
//   //   if (!strarr.length || k > strarr.length || k <= 0) {
//   //     return "";
//   //   }
//   //   return result;
// }
function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return "";
  }

  var answer = "";
  for (var i = 0; i < strarr.length + 1 - k; i++) {
    var str = "";
    for (var j = i; j < i + k; j++) {
      str += strarr[j];
    }
    if (str.length > answer.length) {
      answer = str;
    }
  }

  return answer;
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),
  "abigailtheta"
);
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh"
    ],
    1
  ),
  "oocccffuucccjjjkkkjyyyeehh"
);
console.log(longestConsec([], 3), "");
console.log(
  longestConsec(
    [
      "itvayloxrp",
      "wkppqsztdkmvcuwvereiupccauycnjutlv",
      "vweqilsfytihvrzlaodfixoyxvyuyvgpck"
    ],
    2
  ),
  "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
);
console.log(
  longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2),
  "wlwsasphmxxowiaxujylentrklctozmymu"
);
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2),
  ""
);
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3),
  "ixoyx3452zzzzzzzzzzzz"
);
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15),
  ""
);
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0),
  ""
);
