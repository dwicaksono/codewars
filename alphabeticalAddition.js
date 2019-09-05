function addLetters(letters) {
  // your code here
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  console.log(alphabet);
  var count = 0 - 1;
  var index = [];
  for (let i = letters.length - 1; i >= 0; i--) {
    index.push(letters[i]);
    count += letters[i].length;
  }
  count;

  console.log(index[0]);
  for (let i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i]);
    if (index[0] === alphabet[i]) {
      return alphabet[i + count];
    } else if (!letters.length) {
      return "z";
    }
  }
}

console.log(addLetters(["a", "b", "c"])); //'f'
console.log(addLetters(["z"])); //'z'
console.log(addLetters(["a", "b"])); // c
console.log(addLetters(["c"])); //c
console.log(addLetters(["z", "a"])); //'a'
console.log(addLetters(["y", "c", "b"])); //"d",
console.log(addLetters([])); //'z'

// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'
