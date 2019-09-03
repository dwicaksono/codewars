function correctTail(bod, tail) {
  //   for (let i = 0; i < bod.length; i++) {
  //     if (bod[bod.length - 1] !== tail) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  return bod[bod.length - 1] === tail;
}

console.log(correctTail("Fox", "x"), true);
console.log(correctTail("Rhino", "o"), true);
console.log(correctTail("Meerkat", "t"), true);
console.log(correctTail("Zazrdssvbapng", "p")); // false
