// function anagrams(word, words) {
//   word;
//   words;

//   var objWord = {};
//   for (let i = 0; i < word.length; i++) {
//     objWord[word[i]] = objWord[word[i]] + 1 || 1;
//   }
//   objWord;

//   var obj = {};
//   var coba = [];
//   for (let i = 0; i < words.length; i++) {
//       console.log(words[i]);
//     obj[words[i]] = obj[words[i]] + 1 || 1;
//     for (let j = 0; j < words[i].length; j++) {
//       console.log(words[i][j]);
//     }
//     coba.push([words[i]]);
//   }
//   obj;
//   coba;
//   obj;
// }
String.prototype.sort = function() {
  return this.split("")
    .sort()
    .join("");
};
function anagrams(word, words) {
  return words.filter(function(x) {
    return x.sort() === word.sort();
  });
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); // => ['aabb', 'bbaa']
// console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])); // => ['carer', 'racer']
// console.log(anagrams("laser", ["lazing", "lazy", "lacer"])); //=> []
