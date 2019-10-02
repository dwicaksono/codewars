// function incrementString(strng) {
//   // return incrementedString
//   var string = strng.replace(/[0-9]/g, "");

//   var len = strng.length - string.length;

//   var str = strng.slice(string.length) || '0';

//   str = (parseInt(str) + 1).toString();

//   while (str.length < len) {
//     str = "0" + str;
//   }

//   return string.concat(str);

// }

function incrementString(strng) {
  var str = strng.replace(/[0-9]/g, "");
  str;
  var num = strng.replace(/[^0-9]/g, "");
  num;
  num++;
  num;
  var t = str + num;
  t;
  if (strng.length - t.length == 2) str += "00";
  if (strng.length - t.length == 1) str += "0";
  return str + num;
}

console.log(incrementString("foobar000"), "foobar001");
console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foobar99"), "foobar100");
console.log(incrementString("foobar099"), "foobar100");
console.log(incrementString(""), "1");
