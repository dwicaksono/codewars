function findShort(s) {
  // var arr = s.split(' ');
  ///split without split
  var sArr = [];
  var temp = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      sArr.push(temp);
      temp = "";
    } else {
      temp += s[i];
    }
  }
  sArr.push(temp);
  ////////////smallest number without sort
  var smallest = sArr[0];
  for (var i = 0; i < sArr.length; i++) {
    if (sArr[i].length < smallest.length) {
      smallest = sArr[i];
    }
  }
  smallest;
  return smallest.length;
}

console.log(
  findShort("bitcoin take over the world maybe who knows perhaps"),
  3
);
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  ),
  3
);
