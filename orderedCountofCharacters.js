function ok(text) {
  // Implement me!
  var obj = {};
  var arr = text.split("");
  var arrUniq = Array.from(new Set(arr));
  var output = [];
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(arrUniq[i]);
    if (arr[i] === arrUniq[i]) {
      count++;
    }
    //output.push(arr[i],count);
    obj[arr[i]] = count;
    // count = 0;
  }
  count;
  output;
  obj;
  //return [];
}

console.log(ok("abracadabra")); //[['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
// console.log(ok("Code Wars")); //  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
// console.log(ok("212")); //    [['2', 2], ['1', 1 ]]],
