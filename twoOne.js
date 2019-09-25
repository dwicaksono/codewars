function longest(s1, s2) {
  // your code
  var newComb = s1.concat(s2).split("");
  var filtered = Array.from(new Set(newComb));
  var sorting = filtered.sort();
  var result = sorting.join("");
  return result;
}

console.log(longest("aretheyhere", "yestheyarehere")); //, "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); //, "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions")); //, "acefghilmnoprstuy")
