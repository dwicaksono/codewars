function duplicateCount(text) {
  //...
  var obj = {};
  for (let i = 0; i < text.length; i++) {
    obj[text[i].toLowerCase()] = obj[text[i].toLowerCase()] + 1 || 1;
  }
  var arr = Array.from(Object.values(obj));
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 2) count++;
  }
  return count;
}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1);
console.log(
  duplicateCount("Indivisibilities"),
  2,
  "characters may not be adjacent"
);
