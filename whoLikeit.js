function likes(names) {
  // TODO
  console.log(names);
  var likes = " likes this";
  var like = " like this";
  if (!names.length) {
    return "no one" + likes;
  } else if (names.length === 1) {
    return names[0] + likes;
  } else if (names.length == 2) {
    return names[0] + " and " + names[1] + like;
  } else if (names.length == 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + like;
  } else if (names.length > 3) {
    var sisa = names.length - 2;
    console.log(typeof sisa);
    return (
      names[0] + ", " + names[1] + " and " + sisa.toString() + " others" + like
    );
  }
}

console.log(likes([]), "no one likes this");
console.log(likes(["Peter"]), "Peter likes this");
console.log(likes(["Jacob", "Alex"]), "Jacob and Alex like this");
console.log(likes(["Max", "John", "Mark"]), "Max, John and Mark like this");
console.log(
  likes(["Alex", "Jacob", "Mark", "Max"]),
  "Alex, Jacob and 2 others like this"
);
