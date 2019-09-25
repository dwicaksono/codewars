function pattern(rows, cols, str) {
  str = str.split("");
  let result = "";
  let count = 0;

  for (let i = 0; i < rows * 2 + 1; i++) {
    for (let j = 0; j < cols; j++) {
      // bitwise op checks for even row #
      if (!(i & 1)) {
        result += j == cols - 1 ? "+---+\n" : "+---";
      } else {
        let sub = count < str.length ? str[count] : " ";
        result += j == cols - 1 ? `| ${sub} |\n` : `| ${sub} `;
        count++;
      }
    }
  }

  return result.slice(0, result.length - 1);
}

//   describe("Basic Tests", function(){
//     it("It should works for basic tests", function(){

//   var result=
//   `+---+---+---+---+
//   | H | e | l | l |
//   +---+---+---+---+
//   | o |   | W | o |
//   +---+---+---+---+
//   | r | l | d | ! |
//   +---+---+---+---+
//   |   |   |   |   |
//   +---+---+---+---+`
console.log(pattern(4, 4, "Hello World!"));

//   var result=
//   `+---+---+---+
//   | c | o | d |
//   +---+---+---+
//   | e | w | a |
//   +---+---+---+
//   | r | s |   |
//   +---+---+---+`
// console.log(pattern(3, 3, "codewars"));

// //   var result=
// //   `+---+---+---+---+
// //   | N | i | c | e |
// //   +---+---+---+---+
// //   |   | p | a | t |
// //   +---+---+---+---+
// //   | t | e | r | n |
// //   +---+---+---+---+`

// console.log(pattern(3, 4, "Nice pattern"));

// //   var result=
// //   `+---+---+---+
// //   | N | i | c |
// //   +---+---+---+
// //   | e |   | p |
// //   +---+---+---+
// //   | a | t | t |
// //   +---+---+---+
// //   | e | r | n |
// //   +---+---+---+`
// console.log(pattern(4, 3, "Nice pattern"));
