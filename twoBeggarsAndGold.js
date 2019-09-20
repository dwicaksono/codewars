// function distributionOf(golds) {
//   //coding and coding..
//   var odd = 0;
//   var even = 0;
//   for (let i = 0; i < golds.length; i++) {
//     console.log(golds[i]);
//     i % 2 !== 0 ? (odd += golds[i]) : (even += golds[i]);
//   }

//   var output = [];
//   if (odd > even) {
//     output.push(even, odd);
//   } else {
//     output.push(odd, even);
//   }
//   return output;
// }

function distributionOf(golds) {
  //store each beggar's end output
  var a = 0;
  var b = 0;
  var left = 0;
  var right = golds.length - 1;
  // iterate over the array and find each beggar's choice
  for (i = 0; i < golds.length; i++) {
    if (golds[left] >= golds[right]) {
      // check which beggar's turn it is
      if (i % 2 == 0) {
        a += golds[left];
      } else {
        b += golds[left];
      }
      left += 1;
    } else {
      if (i % 2 == 0) {
        a += golds[right];
      } else {
        b += golds[right];
      }
      right -= 1;
    }
  }
  left;
  return [a, b];
}

console.log(distributionOf([4, 7, 2, 9, 5, 2])); // [11, 18];
console.log(distributionOf([10, 1000, 2, 1])); //, [12, 1001]
console.log(distributionOf([4, 2, 9, 5, 2, 7])); //; , [14, 15]
