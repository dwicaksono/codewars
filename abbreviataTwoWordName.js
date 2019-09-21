function abbrevName(name) {
  // code away
  var strArr = name.split(" ");
  //   var arr = [];
  //   for (let i = 0; i < strArr.length; i++) {
  //     arr.push(strArr[i][0]);
  //   }
  //   return arr.join(".").toLocaleUpperCase();
  return (strArr[0][0] + "." + strArr[1][0]).toUpperCase();
}

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");
