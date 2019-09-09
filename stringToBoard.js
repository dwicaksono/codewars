function board(str, len) {
  var result = [];
  for (let i = 0; i < str.length; i++) result.push(str[i]);
  var out = [];
  for (let i = 0; i < result.length; i++) out.push(result.splice(0, len));
  return out;
}

console.log(board("OOOOOOTTOPHOOTOO", 4));
// [
//     [ 'O', 'O', 'O', 'O' ],
//     [ 'O', 'O', 'T', 'T' ],
//     [ 'O', 'P', 'H', 'O' ],
//     [ 'O', 'T', 'O', 'O' ]
// ]

console.log(board("TOOOOPOHOTOTOTOO", 4));
// [
//     [ 'T', 'O', 'O', 'O' ],
//     [ 'O', 'P', 'O', 'H' ],
//     [ 'O', 'T', 'O', 'T' ],
//     [ 'O', 'T', 'O', 'O' ]
// ]
