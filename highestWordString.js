// function high(x) {
//   console.log(alpha.charAt(0));
//   var arr = x.split(" ");
//   var count = [];
//   for (let i = 0; i < x.length; i++) {
//     console.log(x[i]);
//     console.log(alpha[i]);
//     if (x[i] === alpha.charAt(i)) {
//       count.push(alpha[i]);
//     }
//   }
//   count;
//   arr;
// }

function high(x) {
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var alphabet = alpha.split("");
  var input = x.split(" ");
  var output = [];
  var resultNum = [];
  for (var i = 0; i < input.length; i++) {
    var temp = 0;
    for (var j = 0; j < input[i].length; j++) {
      for (var k = 0; k < alphabet.length; k++) {
        if (input[i][j] == alphabet[k]) {
          temp += k;
        }
      }
    }
    output.push([input[i], temp]);
    resultNum.push(temp);
  }

  var sortNum = resultNum.sort((a, b) => b - a);
  var hasil = "";
  for (let i = 0; i < output.length; i++) {
    if (output[i][1] === sortNum[0]) {
      hasil += output[i][0];
    }
    // break
  }
  return hasil;
}

console.log(high("man i need a taxi up to ubud"), "taxi");
console.log(high("what time are we climbing up the volcano"), "volcano");
console.log(high("take me to semynak"), "semynak");
console.log(high("take me to semynak massage"), "massage");
