function doubleIterator(func, n) {
  // TODO: Write code here to return a function
  // that executes *func*, *n* times on a supplied input
  var nn = n * func;
  return nn + nn;
}
console.log(doubleIterator(3, 1)); //6
console.log(doubleIterator(5, 1)); //10
console.log(doubleIterator(2, 2)); //8
console.log(doubleIterator(5, 2)); //20
console.log(doubleIterator(5, 10)); //100
// Test.describe("Iterator for 'getDouble' function", function() {
//   var getDouble = function (n) {
//       return n + n;
//     };

//   Test.it("Running the iterator for once", function() {
//     var doubleIterator = createIterator(getDouble, 1);

//     Test.assertEquals(doubleIterator(3), 6, "Returns double of 3 as 6");
//     Test.assertEquals(doubleIterator(5), 10, "Returns double of 5 as 10");
//   });

//   Test.it("Running the iterator twice", function() {
//     var getQuadruple = createIterator(getDouble, 2);

//     Test.assertEquals(getQuadruple(2), 8, "Returns quadruple of 2 as 8");
//     Test.assertEquals(getQuadruple(5), 20, "Returns quadruple of 5 as 20");
//   });
// });
