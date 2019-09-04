function scoreboard(string) {
  var result = [];
  var numbers = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };
  var arr = string.split(" ");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] in numbers) result.push(numbers[arr[i]]);
  }
  return result;
}
console.log(scoreboard("the score is four nil")); // [4,0]
console.log(scoreboard("new score : two three")); // [2,3]
console.log(scoreboard("two two")); // [2,2]
console.log(scoreboard("Arsenal just conceded another, two nil")); // [2,0]
