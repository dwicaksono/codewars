function removeDuplicateWords(s) {
  // your perfect code...
  var arr = s.split(" ");
  return Array.from(new Set(arr)).join(" ");
}

console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  ),
  "alpha beta gamma delta"
);
