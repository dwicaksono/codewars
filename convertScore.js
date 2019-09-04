function scoreboard(string) {
  ///split string to array
  var str = [];
  var temp = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      str.push(temp);
      temp = "";
    } else {
      temp += string[i];
    }
  }
  str.push(temp);

  var scored = [
    "nil",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eigth",
    "nine",
    "ten"
  ];
  var result = [];
  var temp1 = "";
  for (let i = 0; i < scored.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[j] == scored[i]) {
        result.push(i);
        temp1 = scored[i];
      }
    }
  }
  temp1;
  return result;
}
console.log(scoreboard("the score is four nil")); // [4,0]
console.log(scoreboard("new score : two three")); // [2,3]
console.log(scoreboard("two two")); // [2,2]
console.log(scoreboard("Arsenal just conceded another, two nil")); // [2,0]
