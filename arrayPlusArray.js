function arrayPlusArray(arr1, arr2) {
  //   var arrA = 0;
  //   var arrB = 0;
  //   for (let i = 0; i < arr1.length; i++) {
  //     console.log(arr1[i]);
  //     arrA += arr1[i];
  //   }
  //   for (let i = 0; i < arr2.length; i++) {
  //     console.log(arr2[i]);
  //     arrB += arr2[i];
  //   }
  //   arrA;
  //   arrB;
  //   //   return arr1 + arr2; //something went wrong
  //   return arrA + arrB; //something went wrong

  var arr = arr1.concat(arr2);
  var sum = 0;
  for (let n of arr) sum += n;
  return sum;
  // return Math.round(arr1+arr2)
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // 21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); //, -21
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])); //15
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])); //, 2100
