function reverseWords(str) {
  // reverse those words
  var arr = [];
  var temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      arr.push(temp);
      temp = "";
    } else {
      temp += str[i];
    }
  }
  arr.push(temp);

  var push = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    push.push(arr[i]);
  }
  return push.join(" ");
}

console.log(reverseWords("hello world!"), "world! hello");
console.log(
  reverseWords("yoda doesn't speak like this"),
  "this like speak doesn't yoda"
);
console.log(reverseWords("foobar"), "foobar");
console.log(reverseWords("kata editor"), "editor kata");
console.log(reverseWords("row row row your boat"), "boat your row row row");
