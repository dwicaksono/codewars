function duplicateEncode(word) {
  // ...
  word.toLowerCase();
  var arr = word.split("");
  var result = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr.lastIndexOf(arr[i]) === arr.indexOf(arr[i])) {
      result += "(";
    } else {
      result += ")";
    }
  }
  return result;
}

console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())", "should ignore case");
console.log(duplicateEncode("(( @")); //, "))(("
