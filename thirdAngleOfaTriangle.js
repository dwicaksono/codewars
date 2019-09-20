function otherAngle(a, b) {
  var c = 180;
  return Math.abs(a + b - c);
}
console.log(otherAngle(30, 60), 90);
console.log(otherAngle(60, 60), 60);
console.log(otherAngle(43, 78), 59);
console.log(otherAngle(10, 20), 150);
