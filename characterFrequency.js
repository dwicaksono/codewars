// function letterFrequency(text) {
//   //your code here

//   var split = text.toLowerCase().split("");
//   var arr = split.filter(
//     x => x !== " " && x !== "," && x !== "." && x !== "-" && x !== "'"
//   );
//   console.log(arr);
//   var obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = obj[arr[i]] + 1 || 1;
//   }
//   obj;
//   var temp = [];
//   for (let [key, value] of Object.entries(obj)) {
//     console.log([`${key}`, `${value}`]);
//     temp.push(`${key}`, `${value}`);
//   }
//   var num = [];
//   var letter = [];
//   for (let i = 0; i < temp.length; i++) {
//     if (i % 2 !== 0) {
//       num.push(parseFloat(temp[i]));
//     } else {
//       letter.push(temp[i]);
//     }
//   }
//   var result = [];
//   letter;
//   num;
//   for (let i = 0; i < temp.length; i++) {
//     if (i % 2 === 0) {
//       result.push(letter.shift());
//     } else {
//       result.push(num.shift());
//     }
//   }
//   result;
//   console.log(result);
//   var temp1 = [];
//   for (let i = 0; i < result.length; i = i + 2) {
//     temp1.push([result[i], result[i + 1]]);
//   }

//   //   temp1.sort((a, b) => b - a);
//   var sorting = [];
//   for (let i = 0; i < temp1.length; i++) {
//     sorting.push(temp1[i].reverse());
//     console.log(temp1);
//   }
//   var rev = sorting.sort();
//   console.log(rev);

//   var out = [];
//   for (let i = rev.length - 1; i >= 0; i--) {
//     out.push(rev[i]);
//   }
//   out;
//   var output = [];
//   for (let i = 0; i < out.length; i++) {
//     out[i].sort();
//     output.push(out[i].reverse());
//   }
//   out;
// }

function letterFrequency(str) {
  const letters = new Set("abcdefghijklmnopqrstuvwxyz".split(""));
  const letterCounts = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (letters.has(char)) {
      letterCounts[char] = (letterCounts[char] || 0) + 1;
    }
  }

  return Object.entries(letterCounts).sort((a, b) => {
    return b[1] - a[1] || a[0].localeCompare(b[0]);
  });
}
console.log(letterFrequency("wklv lv d vhfuhw phvvdjh")); // [['v', 5], ['h', 4], ['d', 2], ['l', 2], ['w', 2], ['f', 1], ['j', 1], ['k', 1], ['p', 1], ['u', 1]];
// console.log(
//   letterFrequency(
//     "As long as I'm learning something, I figure I'm OK - it's a decent day."
//   )
// ); // [["i", 7], ["a", 5], ["e", 5], ["n", 5], ["g", 4], ["s", 4], ["m", 3], ["o", 3], ["t", 3], ["d", 2], ["l", 2], ["r", 2], ["c", 1], ["f", 1], ["h", 1], ["k", 1], ["u", 1], ["y", 1]];
// console.log(
//   letterFrequency(
//     "IWT LDGAS XH HIXAA P LTXGS EAPRT, STHEXIT BN TUUDGIH ID BPZT RATPG PCS ETGUTRI HTCHT DU XI."
//   )
// ); // [["t", 12], ["i", 7], ["h", 6], ["a", 5], ["g", 5], ["p", 5], ["x", 5], ["d", 4], ["s", 4], ["u", 4], ["e", 3], ["r", 3], ["b", 2], ["c", 2], ["l", 2], ["n", 1], ["w", 1], ["z", 1]];
