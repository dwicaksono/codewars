function camelCase(str) {
  //your code here
  var split = str.trim().split(" ");
  var arr = [];
  for (let i = 0; i < split.length; i++) {
    if (split[i] === "") {
      return "";
    }
    var ok = split[i].replace(split[i][0], split[i][0].toUpperCase());
    arr.push(ok);
  }
  return arr.join("");
}

console.log(camelCase("test case")); // "TestCase");
console.log(camelCase("camel case method")); // "CamelCaseMethod");
console.log(camelCase("say hello ")); // ""SayHello"");
console.log(camelCase(" camel case word")); // ""CamelCaseWord"");
console.log(camelCase("")); // ");
