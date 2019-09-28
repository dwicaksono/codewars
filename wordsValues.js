function wordValue(a) {
  var answer = [];
  var temp = 0;
  var temp1 = "";
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
      if (a[i].charCodeAt(j) != 32) {
        temp += a[i].charCodeAt(j) - 96;
      }
    }
    answer.push(temp * (i + 1));
    temp = 0;
  }
  return answer;
}

console.log(wordValue(["codewars", "abc", "xyz"]), [88, 12, 225]);
console.log(wordValue(["abc abc", "abc abc", "abc", "abc"]), [12, 24, 18, 24]);
