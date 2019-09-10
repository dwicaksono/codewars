function sortSequence(sequence) {
  //coding and coding..
  //   const withOut0 = sequence.filter(squen => squen !== 0);
  //   numberSort = function(a, b) {
  //       return a - b;
  //     };
  //     sequence.sort(numberSort);
  //     sequence
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] !== 0) {
      numberSort = function(a, b) {
        return a - b;
      };
      sequence.sort(numberSort);
    }
  }
  sequence;
}

console.log(sortSequence([3, 2, 1, 0, 5, 6, 4, 0, 1, 5, 3, 0, 4, 2, 8, 0])); //[1, 2, 3, 0, 1, 3, 5, 0, 2, 4, 8, 0, 4, 5, 6, 0]

// console.log(sortSequence([3, 2, 1, 0, 5, 6, 4, 0, 1, 5, 3, 0, 2, 2, 2, 0])); //[1, 2, 3, 0, 2, 2, 2, 0, 1, 3, 5, 0, 4, 5, 6, 0]

// console.log(sortSequence([2, 2, 2, 0, 5, 6, 4, 0, 1, 5, 3, 0, 3, 2, 1, 0])); //[2, 2, 2, 0, 1, 2, 3, 0, 1, 3, 5, 0, 4, 5, 6, 0]
