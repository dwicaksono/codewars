function firstNonRepeatingLetter(s) {
  // Add your code here
  var ss = s.toLowerCase();
  var obj = {};
  for (const letter of ss) {
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }
  var out = [];
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i].toLowerCase()] === 1) {
      out.push(s[i]);
    }
  }
  return !out.length ? "" : out[0];
}

console.log(firstNonRepeatingLetter("a"), "a");
console.log(firstNonRepeatingLetter("stress"), "t");
console.log(firstNonRepeatingLetter("moonmEn"), "E");
console.log(firstNonRepeatingLetter("mooEnemEn"), "");
