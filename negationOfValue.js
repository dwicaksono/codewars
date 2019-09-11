function negationValue(string, value) {
  // your code here
  var str = string + value;
  str;
  var result = str.toLowerCase() == "!false" ? true : false;
  return result;
}

// Basic Test
console.log(negationValue("!", false), true, "Wrong!");
console.log(negationValue("!", true), false, "Wrong!");
console.log(negationValue("!!!", []), false, "Wrong!");
