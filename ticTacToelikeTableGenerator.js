// function displayBoard(board, width) {
//   //your code here
//   var temp = "";
//   for (let i = 0; i < width; i++) {
//     console.log(board[i]);
//     temp += board[i] + " | "  ;
//   }
//   temp;
// }

function displayBoard(board, width) {
  var result = "";
  var rows = board.length / width;
  for (var i = 0; i < board.length; i = i + width) {
    for (var j = i; j < i + width; j++) {
      if (j != i + width - 1) {
        result += " " + board[j] + " |";
      } else {
        result += " " + board[j] + " ";
      }
    }

    if (board.length == i + width) {
      break;
    }
    result += "\n" + "-".repeat(4 * width - 1) + "\n";
  }
  return result;
}

console.log(displayBoard(["O", "X", "X", "O"], 2));
// O | X
// ------
// X | O
// console.log(displayBoard(["O", "X", " ", " ", "X", " ", "X", "O", " "], 3));
// // O | X |
// // ----------
// //   | X |
// // ----------
// // X | O |
// console.log(
//   displayBoard(["O", "X", " ", " ", "X", " ", "X", "O", " ", "O"], 5)
// );
// // O | X |   |   | X
// // -------------------
// //   | X | O |   | O
// console.log(
//   displayBoard(["O", "X", " ", " ", "X", " ", "X", "O", " ", "O"], 2)
//); //," O | X \n-------\n   |   \n-------\n X |   \n-------\n X | O \n-------\n   | O ");
// console.log(displayBoard(["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1"],6))
// // 1 | 2 | 3 | 4 | 5 | 1
// //------------------------
// // 2 | 3 | 4 | 5 | 1 | 2
// //------------------------
// // 3 | 4 | 5 | 1 | 2 | 3
// //------------------------
// // 4 | 5 | 1 | 2 | 3 | 4
// //------------------------
// // 5 | 1 | 2 | 3 | 4 | 5
// //------------------------
// // 1 | 2 | 3 | 4 | 5 | 1 "
