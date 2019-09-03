function repeatStr(n, s) {
  //   var string = "";
  //   for (let i = 0; i < n; i++) {
  //     string += s;
  //   }
  //   return string;
  return s.repeat(n);
}

console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha "));
