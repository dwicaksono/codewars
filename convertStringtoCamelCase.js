function toCamelCase(str) {
  if (!str.length) {
    return "";
  }
  var newArr2 = [];
  var oneWord = "";
  for (var x = 0; x < str.length; x++) {
    if (str[x] == "-") {
      newArr2.push(oneWord);
      oneWord = "";
    } else if (x == str.length - 1) {
      oneWord += str[x];
      newArr2.push(oneWord);
    } else {
      oneWord += str[x];
    }
  }
  var newArr1 = [];
  var oneWord2 = "";
  for (var y = 0; y < str.length; y++) {
    if (str[y] == "_") {
      newArr1.push(oneWord2);
      oneWord2 = "";
    } else if (y == str.length - 1) {
      oneWord2 += str[y];
      newArr1.push(oneWord2);
    } else {
      oneWord2 += str[y];
    }
  }
  var aA = [];
  aA.push(newArr2[0]);
  var bA = [];
  var resultA = aA + "";
  for (let i = 0; i < newArr2.length - 1; i++) {
    bA.push(newArr2[i + 1]);
  }
  for (let i = 0; i < bA.length; i++) {
    resultA += bA[i].replace(bA[i][0], bA[i][0].toLocaleUpperCase());
  }

  var a = [];
  var b = [];
  a.push(newArr1[0]);
  var resultB = a + "";
  for (let i = 0; i < newArr1.length - 1; i++) {
    b.push(newArr1[i + 1]);
  }
  for (let i = 0; i < b.length; i++) {
    resultB += b[i].replace(b[i][0], b[i][0].toUpperCase());
  }
  for (let j = 0; j < str.length; j++) {
    if (str[j] === "_") {
      return resultB;
    }
  }
  return resultA;
}
console.log(toCamelCase("")); //, '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior")); //, "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior")); //, "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("the-Stealth-Warrior")); //, "theStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C")); //, "ABC", "toCamelCase('A-B-C') did not return correct value")
