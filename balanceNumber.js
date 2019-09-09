function balancedNum(number) {
  var nmstr = number.toString();
  let leftSide = 0;
  let rigthSide = 0;
  if (nmstr.length / 2 < 1 || nmstr.length === 2) return "Balanced";
  for (let i = 0; i < nmstr.length / 2 - 1; i++) {
    leftSide += Number(nmstr[i]);
    rigthSide += Number(nmstr[nmstr.length - 1 - i]);
  }
  return leftSide === rigthSide ? "Balanced" : "Not Balanced";
  leftSide;
  rigthSide;
}

console.log(balancedNum(7), "Balanced");
console.log(balancedNum(959), "Balanced");
console.log(balancedNum(13), "Balanced");
console.log(balancedNum(432), "Not Balanced");
console.log(balancedNum(424), "Balanced");

console.log(balancedNum(1024), "Not Balanced");
console.log(balancedNum(66545), "Not Balanced");
console.log(balancedNum(295591), "Not Balanced");
console.log(balancedNum(1230987), "Not Balanced");
console.log(balancedNum(56239814), "Balanced");
