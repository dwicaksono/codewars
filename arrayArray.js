function explode(x) {
  var count = 0;

  for (let i = 0; i < x.length; i++) {
    if (Number.isInteger(x[i])) {
      count += +x[i];
    }
  }

  var output = [];
  for (let i = 0; i < count; i++) {
    output.push(x);
  }
  if (!count) {
    return "Void!";
  } else {
    return output;
  }
}

console.log(explode([9, 3]));
// [[9, 3], [9, 3], [9, 3],[9, 3],[9, 3],[9, 3], [9, 3],[9, 3], [9, 3], [9, 3], [9, 3], [9, 3] ]
console.log(explode(["a", 3])); //[["a", 3], ["a", 3], ["a", 3]]
console.log(explode([6, "c"]));
//[[6, "c"], [6, "c"], [6, "c"], [6, "c"], [6, "c"], [6, "c"]];
console.log(explode(["a", "b"])); //  "Void!"
