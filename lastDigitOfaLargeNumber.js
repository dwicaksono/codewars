var asciiZero = "0".charCodeAt(0);
var findModulo = function(base, exponent) {
  var mod = 0;
  for (var i in exponent) {
    //mod = (mod*10 + b[i] - '0')%a;
    mod = (mod * 10 + exponent.charCodeAt(i) - asciiZero) % base;
  }
  return mod;
};

var lastDigit = function(str1, str2) {
  if (str1.length === 1 && str2.length === 1 && str1 === "0" && str2 === "0") {
    return 0;
  }

  if (str2.length === 1 && str2 === "0") {
    return 1;
  }

  if (str1.length === 1 && str1 === "0") {
    return 0;
  }

  var e = findModulo(4, str2);
  if (e === 0) {
    e = 4;
  }

  var res = Math.pow(str1[str1.length - 1].charCodeAt(0) - asciiZero, e);

  // Return last digit of result
  return res % 10;
};

console.log(lastDigit("4", "1"), 4);
console.log(lastDigit("4", "2"), 6);
console.log(lastDigit("9", "7"), 9);
console.log(lastDigit("10", "10000000000"), 0);
// console.log(
//   lastDigit(
//     "1606938044258990275541962092341162602522202993782792835301376",
//     "2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"
//   ),
//   6
// );
// console.log(
//   lastDigit(
//     "3715290469715693021198967285016729344580685479654510946723",
//     "68819615221552997273737174557165657483427362207517952651"
//   ),
//   7
// );
