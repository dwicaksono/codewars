function findMissingLetter(array) {
  // var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // var arr = alpha.split("");
  // arr;
  // var arrayjoin = array.join("");
  // var temp = "";
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(array.charAt(i));
  //   console.log(arr[i]);
  //   // if (array[i] !== arr[i]) {
  //   //   temp += arr[i];
  //   // }
  // }
  // temp;
  // //return " ";

  for (var i = 0; i < array.length; i++) {
    console.log(array[i].charCodeAt() + 1);
    console.log(array[i + 1].charCodeAt());
    if (array[i].charCodeAt() + 1 !== array[i + 1].charCodeAt()) {
      return String.fromCharCode(array[i].charCodeAt() + 1);
    }
  }
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]), "e");
console.log(findMissingLetter(["O", "Q", "R", "S"]), "P");
