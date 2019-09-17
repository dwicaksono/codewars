// function nameInStr(str, name) {
//   var strL = str.toLowerCase();
//   var nameL = name.toLowerCase();
//   console.log(name);
//   for (let i = 0; i < strL.length; i++) {
//     if (strL[i] === nameL[i]) return true;
//   }
//   return false;
// }

function nameInStr(str, name) {
  name = name.toLowerCase();
  str = str.toLowerCase();

  let index = 0;

  for (let char of str) {
    if (char === name[index]) index++;
  }
  index;

  return index === name.length;
}

console.log(nameInStr("Across the rivers", "chris"), true);
console.log(nameInStr("Next to a lake", "chris"), false);
console.log(nameInStr("Under a sea", "chris"), false);
console.log(nameInStr("A crew that boards the ship", "chris"), false);
console.log(nameInStr("A live son", "Allison"), false);
