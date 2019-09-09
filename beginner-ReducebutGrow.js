function grow(x) {
  //   var result = 1;
  //   for (let i = 0; i < x.length; i++) {
  //     result *= x[i];
  //   }
  //   result;
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  return x.reduce(reducer);
}

console.log(grow([1, 2, 3])); //6
console.log(grow([4, 1, 1, 1, 4])); // 16;
console.log(grow([2, 2, 2, 2, 2, 2])); //64
