function correct(string) {
  // your code here
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "0") string = string.replace(string[i], "O");
    if (string[i] === "5") string = string.replace(string[i], "S");
    if (string[i] === "1") string = string.replace(string[i], "I");
  }
  return string;
}

console.log(correct("L0ND0N"), "LONDON");
console.log(correct("DUBL1N"), "DUBLIN");
console.log(correct("51NGAP0RE"), "SINGAPORE");
console.log(correct("BUDAPE5T"), "BUDAPEST");
console.log(correct("PAR15"), "PARIS");
