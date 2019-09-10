function scramble(str1, str2) {
  //code me
  str1.toLowerCase();
  str2.toLowerCase();
  for (let i = 0; i < str2.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      console.log(str1[j]);
      console.log(str2[i]);
      if (str1[j] === str2[i]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

console.log(scramble("rkqodlw", "world"), true);
// console.log(scramble("cedewaraaossoqqyt", "codewars"), true);
console.log(scramble("katas", "steak"), false);
// // console.log(scramble("scriptjava", "javascript"), true);
// console.log(scramble("scriptingjava", "javascript"), true);
// console.log(scramble("scriptsjava", "javascripts"), true);
// console.log(scramble("jscripts", "javascript"), false);
// console.log(scramble("aabbcamaomsccdd", "commas"), true);
