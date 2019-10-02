// function alphanumeric(string) {
//   //your code here
//   //   var secure = true;
//   //   for (let i = 0; i < string.length; i++) {
//   //     console.log(string[i]);
//   //     if (
//   //       string[i] === " " ||
//   //       string[i] === "" ||
//   //       string[i] === "_" ||
//   //       string[i] === "!" ||
//   //       string[i] === "&" ||
//   //       string[i] === "(" ||
//   //       string[i] === ")" ||
//   //       string[i] === "$" ||
//   //       string[i] === undefined
//   //     ) {
//   //       return secure === false;
//   //     }
//   //   }
//   const secure  => /^[a-z\d]+$/gi;
//   string;
//   return secure;
// }
function alphanumeric(string) {
  return /^[\da-z0-9]+$/gi.test(string);
}
//   const alphanumeric = string => /^[a-z\d]+$/gi.test(string)

console.log(alphanumeric("Mazinkaiser"), true);
console.log(alphanumeric("hello world_"), false);
console.log(alphanumeric("PassW0rd"), true);
console.log(alphanumeric("PassW0rd$"), false);
console.log(alphanumeric("ciao   $"), false);
console.log(alphanumeric("     "), false);
