function damagedOrSunk(board, attacks) {
  //the battle starts here!
}

// Game 1
var board = [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]];

var attacks = [[3, 1], [3, 2], [3, 3]];
var result = damagedOrSunk(board, attacks);

console.log(result.sunk, 1, "There should be 1 ship sunk");
console.log(result.damaged, 0, "There should be 0 ship damaged");
console.log(result.notTouched, 0, "There should be 0 ship notTouched");
console.log(result.points, 1, "there should be a 1 point score");

// Game 2
// var board = [[3, 0, 1], [3, 0, 1], [0, 2, 1], [0, 2, 0]];

// var attacks = [[2, 1], [2, 2], [3, 2], [3, 3]];
// var result = damagedOrSunk(board, attacks);

// console.log(result.sunk, 1, "There should be 1 ship sunk");
// console.log(result.damaged, 1, "There should be 1 ship damaged");
// console.log(result.notTouched, 1, "There should be 1 ship notTouched");
// console.log(result.points, 0.5, "there should be a 0.5 point score");
