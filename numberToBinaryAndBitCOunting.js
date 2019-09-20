function countBits(n) {
  var count = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      count++;
    }
    n = Math.floor(n / 2);
  }
  //   for (let i = 0; n > i; i++) {
  //     if (n % 2 === 1) {
  //       count++;
  //     }
  //     n = Math.floor(n / 2);
  //   }
  //   count;
  //   n;
  return count;
}

console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
// console.log(countBits(10), 2);
// console.log(countBits(26), 3);
// console.log(countBits(77231418), 14);
// console.log(countBits(12525589), 11);
// console.log(countBits(3811), 8);
// console.log(countBits(392902058), 17);
// console.log(countBits(1044), 3);
// console.log(countBits(10030245), 10);
// console.log(countBits(183337941), 16);
// console.log(countBits(20478766), 14);
// console.log(countBits(103021), 9);
// console.log(countBits(287), 6);
// console.log(countBits(115370965), 15);
// console.log(countBits(31), 5);
// console.log(countBits(417862), 7);
// console.log(countBits(626031), 12);
// console.log(countBits(89), 4);
// console.log(countBits(674259), 10);
