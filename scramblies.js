function scramble(str1, str2) {
  //code me

  str1.toLowerCase();
  str2.toLowerCase();
  var obj = {};
  for (const letter of str1) {
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }
  console.log(obj);
  for (const letter of str2) {
    if (!obj[letter]) {
      return false;
    } else {
      obj[letter]--;
    }
  }
  console.log(obj);
  return true;
}

// function scramble(str1, str2) {
//   let letterHolder = {};
//   for (let letter of str1) {

//     if(letterHolder[letter]) letterHolder[letter]++;
//     else letterHolder[letter] = 1;
//   }
//   letterHolder
//   for (let letter of str2) {
//     if(!letterHolder[letter]) //return false
//     //else
//      letterHolder[letter]--;
//   }
//   letterHolder

//   // return true;
//  }
console.log(scramble("rkqodlw", "world"), true);
// console.log(scramble("cedewaraaossoqqyt", "codewars"), true);
// console.log(scramble("katas", "steak"), false);
// console.log(scramble("scriptjava", "javascript"), true);
// console.log(scramble("scriptingjava", "javascript"), true);
// console.log(scramble("scriptsjava", "javascripts"), true);
console.log(scramble("jscripts", "javascript"), false);
console.log(scramble("aabbcamaomsccdd", "commas"), true);
