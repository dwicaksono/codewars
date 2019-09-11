// Sum Numbers
function sum(numbers) {
  "use strict";
  //   if (!numbers.length) return 0;
  //   return numbers.reduce((total, amount) => total + amount);

  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);
