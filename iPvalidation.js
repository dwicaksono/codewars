// function isValidIP(str) {
//   var arrIp = str.split(".");
//   var valid = false;
//   arrIp;
//   if (arrIp.length !== 4) {
//     valid = false;
//   } else {
//     arrIp.forEach(val => {
//       if (val <= 0 || val >= 255) {
//         valid = false;
//       } else if (typeof val !== Number) {
//         valid = false;
//       } else if (val[0] !== "0") {
//         valid = true;
//       }
//     });
//   }
//   return valid;
// }

function isValidIP(str) {
  // console.log(str);
  if (!(str.split(".").length === 4)) {
    //   console.log('Value has no 4 Numbers');
    return false;
  } else {
    for (var i = 0; i < str.split(".").length; i++) {
      if (isNaN(parseInt(str.split(".")[i]))) {
        //   console.log(str.split('.')[i] + ' is NaN');
        return false;
      }
      if (
        parseInt(str.split(".")[i]).toString(2) > 11111111 ||
        parseInt(str.split(".")[i]).toString(2) < 0
      ) {
        //   console.log('Number ' + str.split('.')[i] + ' is bigger than 255');
        return false;
      }
    }
  }

  // console.log(str + ' is a valid IP!');
  return true;
}

console.log(isValidIP("0.0.0.0"), true);
console.log(isValidIP("12.255.56.1"), true);
console.log(isValidIP("137.255.156.100"), true);

console.log(isValidIP(""), false);
console.log(isValidIP("abc.def.ghi.jkl"), false);
console.log(isValidIP("123.456.789.0"), false);
console.log(isValidIP("12.34.56"), false);
console.log(isValidIP("01.02.03.04"), false);
console.log(isValidIP("256.1.2.3"), false);
console.log(isValidIP("1.2.3.4.5"), false);
console.log(isValidIP("123,45,67,89"), false);
console.log(isValidIP("1e0.1e1.1e2.2e2"), false);
console.log(isValidIP(" 1.2.3.4"), false);
console.log(isValidIP("1.2.3.4 "), false);
console.log(isValidIP("12.34.56.-7"), false);
console.log(isValidIP("1.2.3.4\n"), false);
console.log(isValidIP("\n1.2.3.4"), false);
