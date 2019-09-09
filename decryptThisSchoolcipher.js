function decrypt(str) {
  //   return str;
  var string = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "'") {
      string += str;
    }
  }
  string;
}
console.log(decrypt("'101''99''105''108''65'")); //, "Alice";
// console.log(decrypt("'98''111''66'")); //, "Bob"
// console.log(decrypt("30 71")); //, "17 03"
