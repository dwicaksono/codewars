function add(a, b) {
  a = a
    .split("")
    .reverse()
    .join("");
  b = b
    .split("")
    .reverse()
    .join("");
  la = a.length;
  lb = b.length;
  var temp = [];
  var bit = 0;
  for (var i = 0; i < Math.max(la, lb); i++) {
    if (i >= la) {
      var cur = Number(b[i]);
    } else if (i >= lb) {
      var cur = Number(a[i]);
    } else {
      var cur = Number(a[i]) + Number(b[i]);
    }
    temp.push((cur + bit) % 10);
    bit = Math.floor((cur + bit) / 10);
  }
  if (bit == 1) {
    temp.push(1);
  }
  var ans = "";
  for (var i = temp.length - 1; i >= 0; i--) ans += temp[i];
  return ans;
}
//   function add (a, b) {
//     var res = '', c = 0
//     a = a.split('')
//     b = b.split('')
//     while (a.length || b.length || c) {
//       c += ~~a.pop() + ~~b.pop()
//       res = c % 10 + res
//       c = c > 9
//     }
//     return res
//   }
// console.log(add("1", "1"), "2");
// console.log(add("123", "456"), "579");
// console.log(add("888", "222"), "1110");
// console.log(add("1372", "69"), "1441");
console.log(add("12", "456"), "468");
// console.log(add("101", "100"), "201");
// console.log(add("63829983432984289347293874"));

console.log(
  add("63829983432984289347293874", "90938498237058927340892374089"),
  "91002328220491911630239667963"
);
